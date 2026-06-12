"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { sauces } from "@/data/sauces";
import { Badge } from "@/components/ui/badge";
import { 
  Beef, 
  Thermometer, 
  Clock, 
  Calculator,
  ChefHat,
  AlertCircle,
  Sparkles
} from "lucide-react";

const animalTypes = [
  { name: "Dana", slug: "dana", icon: "🐄" },
  { name: "Kuzu", slug: "kuzu", icon: "🐑" },
  { name: "Tavuk", slug: "tavuk", icon: "🍗" },
  { name: "Büyükbaş", slug: "buyukbas", icon: "🐂" },
  { name: "Küçükbaş", slug: "kucukbas", icon: "🐐" },
];

const cutsByAnimal: Record<string, { name: string; slug: string; minutesPerKg: number }[]> = {
  dana: [
    { name: "Bonfile", slug: "dana-bonfile", minutesPerKg: 10 },
    { name: "Antrikot", slug: "dana-antrikot", minutesPerKg: 12 },
    { name: "Riploin", slug: "dana-riploin", minutesPerKg: 12 },
    { name: "T-Bone", slug: "dana-t-bone", minutesPerKg: 15 },
    { name: "Brisket", slug: "dana-brisket", minutesPerKg: 75 },
    { name: "Short Ribs", slug: "dana-short-ribs", minutesPerKg: 50 },
    { name: "Chuck Roast", slug: "dana-chuck", minutesPerKg: 45 },
    { name: "Flank Steak", slug: "dana-flank", minutesPerKg: 8 },
    { name: "Sirloin", slug: "dana-sirloin", minutesPerKg: 12 },
    { name: "Tri-Tip", slug: "dana-tritip", minutesPerKg: 10 },
  ],
  kuzu: [
    { name: "Pirzola", slug: "kuzu-pirzola", minutesPerKg: 5 },
    { name: "Kol", slug: "kuzu-kol", minutesPerKg: 45 },
    { name: "But", slug: "kuzu-but", minutesPerKg: 30 },
    { name: "Kaburga", slug: "kuzu-kaburga", minutesPerKg: 35 },
    { name: "İncik", slug: "kuzu-incik", minutesPerKg: 75 },
    { name: "Rack", slug: "kuzu-rack", minutesPerKg: 22 },
  ],
  tavuk: [
    { name: "Göğüs", slug: "tavuk-gogsu", minutesPerKg: 22 },
    { name: "But", slug: "tavuk-but", minutesPerKg: 28 },
    { name: "Kanat", slug: "tavuk-kanat", minutesPerKg: 18 },
    { name: "Bütün Tavuk", slug: "tavuk-butun", minutesPerKg: 45 },
    { name: "Bonfile", slug: "tavuk-bonfile", minutesPerKg: 18 },
  ],
  buyukbas: [
    { name: "Sığır Antrikot", slug: "sigr-antrikot", minutesPerKg: 12 },
    { name: "Sığır Kaburga", slug: "sigr-kaburga", minutesPerKg: 40 },
  ],
  kucukbas: [
    { name: "Koyun But", slug: "koyun-but", minutesPerKg: 35 },
    { name: "Koyun Kol", slug: "koyun-kol", minutesPerKg: 50 },
    { name: "Keçi But", slug: "keci-but", minutesPerKg: 35 },
    { name: "Keçi Kol", slug: "keci-kol", minutesPerKg: 45 },
  ],
};

const cookingMethods = [
  { name: "Izgara / Grill", slug: "grill", icon: "🔥", multiplier: 1.0 },
  { name: "Fırın / Roasting", slug: "oven", icon: "🌡️", multiplier: 1.2 },
  { name: "Sous Vide", slug: "sous-vide", icon: "🫧", multiplier: 1.5 },
  { name: "Smoking", slug: "smoking", icon: "💨", multiplier: 2.5 },
  { name: "Tava / Pan-Sear", slug: "pan", icon: "🍳", multiplier: 0.7 },
  { name: "Braising", slug: "braising", icon: "🫕", multiplier: 1.8 },
  { name: "Deep Fry", slug: "deep-fry", icon: "🍟", multiplier: 0.5 },
  { name: "Reverse Sear", slug: "reverse-sear", icon: "✨", multiplier: 1.3 },
];

const donenessLevels = [
  { name: "Rare", tempMin: 49, tempMax: 52, color: "#DC2626", pullOffset: -3 },
  { name: "Medium Rare", tempMin: 55, tempMax: 57, color: "#E11D48", pullOffset: -3 },
  { name: "Medium", tempMin: 60, tempMax: 63, color: "#F472B6", pullOffset: -2 },
  { name: "Medium Well", tempMin: 65, tempMax: 68, color: "#A16207", pullOffset: -1 },
  { name: "Well Done", tempMin: 71, tempMax: 77, color: "#78716C", pullOffset: 0 },
];

interface CalculationResult {
  cutName: string;
  methodName: string;
  weight: number;
  estimatedTimeMin: number;
  estimatedTimeMax: number;
  targetTemp: { min: number; max: number };
  pullTemp: { min: number; max: number };
  restTime: { min: number; max: number };
  doneness: string;
  cutSlug: string;
  recommendedSauces: { slug: string; name: string; icon: string }[];
}

export default function HesaplamaPage() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedCut, setSelectedCut] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedDoneness, setSelectedDoneness] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const availableCuts = selectedAnimal ? cutsByAnimal[selectedAnimal] || [] : [];

  const calculate = () => {
    if (!selectedCut || !selectedMethod || !weight || !selectedDoneness) return;

    const cut = availableCuts.find((c) => c.slug === selectedCut);
    const method = cookingMethods.find((m) => m.slug === selectedMethod);
    const doneness = donenessLevels.find((d) => d.name === selectedDoneness);

    if (!cut || !method || !doneness) return;

    const weightKg = parseFloat(weight) / 1000;
    const baseTime = weightKg * cut.minutesPerKg * method.multiplier;

    const matchingSauces = sauces
      .filter(s => s.pairings.cuts.includes(selectedCut))
      .slice(0, 4)
      .map(s => ({ slug: s.slug, name: s.name, icon: s.icon }));

    setResult({
      cutName: cut.name,
      methodName: method.name,
      weight: parseFloat(weight),
      estimatedTimeMin: Math.round(baseTime * 0.85),
      estimatedTimeMax: Math.round(baseTime * 1.15),
      targetTemp: { min: doneness.tempMin, max: doneness.tempMax },
      pullTemp: { 
        min: doneness.tempMin + doneness.pullOffset, 
        max: doneness.tempMax + doneness.pullOffset 
      },
      restTime: { min: 5, max: 10 },
      doneness: doneness.name,
      cutSlug: selectedCut,
      recommendedSauces: matchingSauces,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-display mb-4">
                Pişirme Hesaplama
              </h1>
              <p className="text-muted-foreground">
                Etinizi seçin, ağırlığı girin, mükemmel pişirme rehberini hemen öğrenin
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calculator Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      Pişirme Parametreleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Animal Type Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">
                        Et Türü
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {animalTypes.map((animal) => (
                          <button
                            key={animal.slug}
                            onClick={() => {
                              setSelectedAnimal(animal.slug);
                              setSelectedCut("");
                            }}
                            className={`p-3 rounded-lg border text-center transition-all ${
                              selectedAnimal === animal.slug
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="text-2xl mb-1">{animal.icon}</div>
                            <div className="text-xs">{animal.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cut Selection */}
                    {selectedAnimal && (
                      <div>
                        <label className="text-sm font-medium mb-3 block">
                          Kesim
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {availableCuts.map((cut) => (
                            <button
                              key={cut.slug}
                              onClick={() => setSelectedCut(cut.slug)}
                              className={`p-3 rounded-lg border text-left transition-all ${
                                selectedCut === cut.slug
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="font-medium text-sm">{cut.name}</div>
                              <div className="text-xs text-muted-foreground">
                                ~{cut.minutesPerKg} dk/kg
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cooking Method */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">
                        Pişirme Yöntemi
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {cookingMethods.map((method) => (
                          <button
                            key={method.slug}
                            onClick={() => setSelectedMethod(method.slug)}
                            className={`p-3 rounded-lg border text-center transition-all ${
                              selectedMethod === method.slug
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="text-2xl mb-1">{method.icon}</div>
                            <div className="text-xs">{method.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weight Input */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Ağırlık (gram)
                      </label>
                      <Input
                        type="number"
                        placeholder="Örn: 500"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min={50}
                        max={20000}
                      />
                    </div>

                    {/* Doneness Level */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">
                        Pişirme Derecesi
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {donenessLevels.map((doneness) => (
                          <button
                            key={doneness.name}
                            onClick={() => setSelectedDoneness(doneness.name)}
                            className={`p-3 rounded-lg border text-center transition-all ${
                              selectedDoneness === doneness.name
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div 
                              className="w-4 h-4 rounded-full mx-auto mb-2"
                              style={{ backgroundColor: doneness.color }}
                            />
                            <div className="text-xs">{doneness.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {doneness.tempMin}-{doneness.tempMax}°C
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <Button 
                      onClick={calculate}
                      className="w-full"
                      size="lg"
                      disabled={!selectedCut || !selectedMethod || !weight || !selectedDoneness}
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Hesapla
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="lg:col-span-1">
                {result ? (
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <ChefHat className="h-5 w-5" />
                        Pişirme Rehberi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 rounded-lg bg-background">
                        <div className="text-sm text-muted-foreground mb-1">
                          {result.cutName} • {result.methodName}
                        </div>
                        <div className="text-lg font-bold">
                          {result.weight}g
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Pişirme Süresi</div>
                            <div className="text-lg font-bold">
                              {result.estimatedTimeMin}-{result.estimatedTimeMax} dakika
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                          <Thermometer className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">İç Sıcaklık</div>
                            <div className="text-lg font-bold">
                              {result.targetTemp.min}-{result.targetTemp.max}°C
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                          <Beef className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Çıkarma Sıcaklığı</div>
                            <div className="text-lg font-bold">
                              {result.pullTemp.min}-{result.pullTemp.max}°C
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-background">
                          <div className="text-sm font-medium mb-1">Dinlenme Süresi</div>
                          <div className="text-lg font-bold">
                            {result.restTime.min}-{result.restTime.max} dakika
                          </div>
                        </div>
                      </div>

                      {/* Sauce Recommendations */}
                      {result.recommendedSauces.length > 0 && (
                        <div className="p-3 rounded-lg bg-background/50 space-y-2">
                          <div className="flex items-center gap-1.5 text-sm font-medium">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Önerilen Soslar
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {result.recommendedSauces.map(sauce => (
                              <Link key={sauce.slug} href={`/soslar/${sauce.slug}`}>
                                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 gap-1">
                                  {sauce.icon} {sauce.name}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                          <div className="text-sm">
                            <strong>Önemli:</strong> Pişirme süreleri tahminidir. 
                            Her zaman et iç termometresi kullanarak kontrol edin.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Calculator className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Parametreleri girin ve Hesapla butonuna basın
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
