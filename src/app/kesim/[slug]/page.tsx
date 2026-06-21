import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Beef, 
  Thermometer, 
  Clock, 
  Flame, 
  ChefHat, 
  AlertTriangle,
  ArrowLeft,
  Utensils,
  Droplets,
  Timer,
  Calculator,
  FlaskConical,
  Sparkles,
  Lightbulb
} from "lucide-react";
import { cutsData, allCutSlugs } from "@/data/cuts";
import { cutRecommendations } from "@/data/cut-recommendations";


const allSlugs = allCutSlugs;

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cut = cutsData[slug];
  if (!cut) return { title: "Kesim Bulunamadı" };
  
  return {
    title: `${cut.name} - Pişirme Rehberi`,
    description: `${cut.name} nasıl pişirilir? Detaylı pişirme rehberi, sıcaklık ve süre bilgileri.`,
  };
}

export default async function CutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cut = cutsData[slug];

  if (!cut) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/et-turu" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Et Türlerine Dön
          </Link>

          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{cut.animalIcon}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display">{cut.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{cut.animalType}</Badge>
                  <Badge variant="outline">{cut.difficulty}</Badge>
                  <Badge variant="outline">{cut.fatContent}</Badge>
                  {cut.boneIn && <Badge variant="outline">Kemikli</Badge>}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl">{cut.description}</p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Beef className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Ortalama Ağırlık</div>
                <div className="font-bold">{cut.averageWeight}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Flame className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Fiyat Aralığı</div>
                <div className="font-bold">{cut.priceRange}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Droplets className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Yağ İçeriği</div>
                <div className="font-bold">{cut.fatContent}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <ChefHat className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">En İyi Yöntemler</div>
                <div className="font-bold text-xs">{cut.bestMethods.join(", ")}</div>
              </CardContent>
            </Card>
          </div>

          {/* Location Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beef className="h-5 w-5 text-primary" />
                Kesim Bölgesi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{cut.locationDescription}</p>
            </CardContent>
          </Card>

          {/* Cooking Guides */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary" />
              Pişirme Rehberleri
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cut.cookingGuides.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-2xl">{guide.icon}</span>
                        {guide.method}
                      </span>
                      <Badge variant={guide.difficulty === "Kolay" ? "default" : guide.difficulty === "Orta" ? "secondary" : "destructive"}>
                        {guide.difficulty}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Temp and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-background">
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Thermometer className="h-4 w-4" />
                          Sıcaklık
                        </div>
                        <div className="font-bold">{guide.tempMin}-{guide.tempMax}°C</div>
                      </div>
                      <div className="p-3 rounded-lg bg-background">
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Timer className="h-4 w-4" />
                          Süre (kg başına)
                        </div>
                        <div className="font-bold">~{guide.timePerKg} dk</div>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h4 className="font-semibold mb-2">Adımlar:</h4>
                      <ol className="space-y-2">
                        {guide.instructions.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary flex items-center gap-1">
                        <ChefHat className="h-4 w-4" />
                        İpuçları
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {guide.tips.map((tip, i) => (
                          <li key={i}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Doneness Guide */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                Pişirme Derecesi Rehberi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cut.donenessGuide.map((level, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-background">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: level.color }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{level.name}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{level.temp}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/20">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                  <div className="text-sm">
                    <strong>Önemli:</strong> Her zaman et iç termometresi kullanarak kontrol edin. 
                    Süreler tahminidir, gerçek pişirme süresi etin kalınlığına ve ateşin şiddetine göre değişir.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nutritional Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Besin Değerleri (100g)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="p-3 rounded-lg bg-background text-center">
                  <div className="text-2xl font-bold text-primary">{cut.nutritionalInfo.calories}</div>
                  <div className="text-sm text-muted-foreground">Kalori (kcal)</div>
                </div>
                <div className="p-3 rounded-lg bg-background text-center">
                  <div className="text-2xl font-bold text-primary">{cut.nutritionalInfo.protein}g</div>
                  <div className="text-sm text-muted-foreground">Protein</div>
                </div>
                <div className="p-3 rounded-lg bg-background text-center">
                  <div className="text-2xl font-bold text-primary">{cut.nutritionalInfo.fat}g</div>
                  <div className="text-sm text-muted-foreground">Yağ</div>
                </div>
                <div className="p-3 rounded-lg bg-background text-center">
                  <div className="text-2xl font-bold text-primary">{cut.nutritionalInfo.iron}mg</div>
                  <div className="text-sm text-muted-foreground">Demir</div>
                </div>
                <div className="p-3 rounded-lg bg-background text-center">
                  <div className="text-2xl font-bold text-primary">{cut.nutritionalInfo.zinc}mg</div>
                  <div className="text-sm text-muted-foreground">Çinko</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Storage Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Depolama Bilgisi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background">
                    <div className="font-semibold">Buzdolabında</div>
                    <div className="text-sm text-muted-foreground">Süre: {cut.storageInfo.fridgeDays}</div>
                    <div className="text-sm text-muted-foreground">Sıcaklık: {cut.storageInfo.fridgeTemp}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background">
                    <div className="font-semibold">Derin Dondurucuda</div>
                    <div className="text-sm text-muted-foreground">Süre: {cut.storageInfo.freezerDays}</div>
                    <div className="text-sm text-muted-foreground">Sıcaklık: {cut.storageInfo.freezerTemp}</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-background">
                  <div className="font-semibold mb-2">Çözdürme Yöntemi</div>
                  <p className="text-sm text-muted-foreground">{cut.storageInfo.thawingMethod}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pairing Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Eşleştirme Önerileri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Yan Yemekler</h4>
                  <ul className="space-y-2">
                    {cut.pairingSuggestions.sideDishes.map((dish, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">İçecekler</h4>
                  <ul className="space-y-2">
                    {cut.pairingSuggestions.drinks.map((drink, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {drink}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Özel Durumlar</h4>
                  <ul className="space-y-2">
                    {cut.pairingSuggestions.occasions.map((occasion, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {occasion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Önerilen Marineler, Rub'lar ve Soslar */}
          {(() => {
            const recs = cutRecommendations[slug];
            if (!recs || recs.length === 0) return null;
            const marineler = recs.filter(r => r.type === "marine");
            const rubList = recs.filter(r => r.type === "rub");
            const sosList = recs.filter(r => r.type === "sos");
            const linkMap: Record<string, string> = { marine: "/marineler", rub: "/baharatlar", sos: "/soslar" };
            return (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Bu Kesim İçin Önerilenler
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {marineler.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-2">
                        <FlaskConical className="h-4 w-4 text-primary" /> Önerilen Marineler
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {marineler.map(r => (
                          <Link key={r.slug} href={`${linkMap[r.type]}/${r.slug}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 flex items-center gap-1 py-1.5">
                              <span>{r.icon}</span> {r.name}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {rubList.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-2">
                        <Sparkles className="h-4 w-4 text-primary" /> Önerilen Baharat Rub'ları
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rubList.map(r => (
                          <Link key={r.slug} href={`${linkMap[r.type]}/${r.slug}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 flex items-center gap-1 py-1.5">
                              <span>{r.icon}</span> {r.name}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {sosList.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-2">
                        <Utensils className="h-4 w-4 text-primary" /> Önerilen Soslar
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sosList.map(r => (
                          <Link key={r.slug} href={`${linkMap[r.type]}/${r.slug}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 flex items-center gap-1 py-1.5">
                              <span>{r.icon}</span> {r.name}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })()}

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link href={`/hesaplama?cut=${cut.slug}`}>
              <Button size="lg">
                <Calculator className="mr-2 h-5 w-5" />
                Bu Kesim İçin Hesaplama Yap
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
