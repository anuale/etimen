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
  Calculator
} from "lucide-react";

// Statik kesim verileri
const cutsData: Record<string, CutData> = {
  "dana-bonfile": {
    name: "Bonfile (Tenderloin)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-bonfile",
    description: "Dananın en yumuşak ve en değerli parçası. Az yağlı, çok hassas bir lezzete sahiptir. Kısa ve yoğun pişirme yöntemleri için idealdir.",
    locationDescription: "Dananın bel bölgesinde, omurga boyunca uzanan ince ve uzun bir kas. Vücudun en az çalışan kası olduğu için çok yumuşaktır.",
    difficulty: "Orta",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "300-800g",
    priceRange: "Yüksek",
    bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 8,
        instructions: [
          "Et oda sıcaklığına gelsin (15-20 dk)",
          "Her iki tarafını tuz ve karabiber ile tatlandırın",
          "Tavayı çok kızdırın, 1-2 çorba kaşığı yağ ekleyin",
          "Yüksek ateşte her iki tarafı 2-3 dakika kızartın",
          "İç sıcaklık 55°C'ye ulaştığında ocaktan alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Bonfile çok hassas olduğu için çok uzun pişirmeyin",
          "Mükemmel medium rare için 55°C iç sıcaklık hedefleyin",
          "Pişirmeden önce eti kurulayın - bu iyi bir kabuk oluşmasını sağlar"
        ]
      },
      {
        method: "Sous Vide",
        icon: "🫧",
        difficulty: "Zor",
        tempMin: 54,
        tempMax: 60,
        timePerKg: 60,
        instructions: [
          "Sous vide makinesini 55°C'ye ayarlayın",
          "Etinizi vakum poşetine koyun",
          "1-2 saat pişirin (1cm kalınlık için)",
          "Poşetten çıkarın ve kağıt havlu ile kurulayın",
          "Tavada her iki tarafı 1 dakika kızartın"
        ],
        tips: [
          "Sous vide ile mükemmel pişirme kontrolü sağlarsınız",
          "Mühürleme adımını atlamayın - bu lezzet ve renk katar",
          "En iyi sonuç için 55°C'de 1-2 saat yeterlidir"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe merkez" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 133,
      protein: 26,
      fat: 2.6,
      iron: 1.2,
      zinc: 4.5
    },
    storageInfo: {
      fridgeDays: "3-5 gün",
      freezerDays: "6-12 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme (12-24 saat). Sıcak suda veya oda sıcaklığında çözdürmeyin."
    },
    pairingSuggestions: {
      sideDishes: ["Patates püresi", "Haşlanmış sebze", "Grilled asparagus", "Mantar sote"],
      drinks: ["Kırmızı şarap (Cabernet Sauvignon)", "Bira (Amber Ale)", "Meyve suyu"],
      occasions: ["Romantik akşam yemeği", "Özel günler", "Şef yemekleri"]
    }
  },
  "dana-antrikot": {
    name: "Antrikot (Ribeye)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-antrikot",
    description: "Kaburga bölgesinde elde edilen, yağlı yapısıyla ünlü bir kesim. Zengin lezzeti ve sulu yapısıyla bilinir.",
    locationDescription: "Dananın kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kas. Yüksek yağ oranı (marbling) onu çok lezzetli yapar.",
    difficulty: "Kolay",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "400-1200g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava", "Fırın"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 12,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Etinizi oda sıcaklığında 30 dakika bekletin",
          "Her iki tarafını tuz ile tatlandırın",
          "Dolaylı ateşte 4-5 dakika, sonra dolaysız ateşte 2-3 dakika",
          "İç sıcaklık 55°C'ye ulaştığında alın"
        ],
        tips: [
          "Antrikotun yüksek yağ oranı onu affedici yapar",
          "Dolaylı ateş tekniği en iyi sonucu verir",
          "Pişirme sırasında sıklıkla çevirmeyin"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 217,
      protein: 25,
      fat: 13,
      iron: 1.8,
      zinc: 5.2
    },
    storageInfo: {
      fridgeDays: "3-5 gün",
      freezerDays: "6-12 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Patates kızartması", "Mantar sote", "Grilled sebzeler", "Caesar salata"],
      drinks: ["Kırmızı şarap (Malbec, Syrah)", "Bira (IPA)", "Viski"],
      occasions: ["BBQ partileri", "Hafta sonu yemekleri", "Arkadaş buluşmaları"]
    }
  },
  "kuzu-pirzola": {
    name: "Kuzu Pirzola (Lamb Chops)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-pirzola",
    description: "Kuzunun kaburga bölgesinden elde edilen, kemikli ve lezzetli pirzola.",
    locationDescription: "Kuzunun kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kısa ve kemikli pirzolalar.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "150-400g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 5,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Pirzolaları tuz, karabiber ve kekik ile tatlandırın",
          "Her iki tarafı 3-4 dakika pişirin",
          "İç sıcaklık 55°C'ye ulaştığında alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Kuzu pirzola için medium rare en iyi sonuçtur",
          "Çok pişirmek kuzu etini sertleştirir",
          "Taze kekik kuzunun lezzetini tamamlar"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 182,
      protein: 25,
      fat: 9,
      iron: 1.6,
      zinc: 4.8
    },
    storageInfo: {
      fridgeDays: "3-4 gün",
      freezerDays: "6-9 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Patates püresi", "Haşlanmış bezelye", "Közlenmiş sebzeler", "Pirinç pilavı"],
      drinks: ["Kırmızı şarap (Pinot Noir, Merlot)", "Bira (Lager)", "Nar suyu"],
      occasions: ["Bayram yemekleri", "Özel akşam yemekleri", "Şölen sofraları"]
    }
  },
  "tavuk-gogsu": {
    name: "Tavuk Göğsü",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-gogsu",
    description: "Tavuğun en az yağlı ve en çok protein içeren bölgesi. Hızlı pişmesiyle bilinir.",
    locationDescription: "Tavuğun göğüs bölgesinde, kemik üzerinde veya kemiksiz olarak bulunur. Beyaz et olarak adlandırılır.",
    difficulty: "Kolay",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "150-400g",
    priceRange: "Düşük",
    bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 22,
        instructions: [
          "Göğsü 2cm kalınlığında açın veya ikiye bölün",
          "Tuz ve karabiber ile tatlandırın",
          "Tavada orta ateşte her iki tarafı 6-7 dakika pişirin",
          "İç sıcaklık 74°C'ye ulaştığında alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Göğüs eti çok çabuk kurur - fazla pişirmeyin",
          "Pişirmeden önce marine etmek lezzet ve nem sağlar",
          "İç sıcaklık termometresi kullanın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C", color: "#F59E0B", description: "Tamamen pişmiş, pembe yok" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 165,
      protein: 31,
      fat: 3.6,
      iron: 1.0,
      zinc: 1.0
    },
    storageInfo: {
      fridgeDays: "1-2 gün",
      freezerDays: "9 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Pirinç pilavı", "Salata", "Haşlanmış sebze", "Makarna"],
      drinks: ["Beyaz şarap (Sauvignon Blanc)", "Bira (Pilsner)", "Meyve suyu"],
      occasions: ["Hafta içi yemekleri", "Sağlıklı beslenme", "Sporcular için"]
    }
  }
};

// Tüm kesim slug'ları
const allSlugs = Object.keys(cutsData);

type CutData = {
  name: string;
  animalType: string;
  animalIcon: string;
  slug: string;
  description: string;
  locationDescription: string;
  difficulty: string;
  fatContent: string;
  boneIn: boolean;
  averageWeight: string;
  priceRange: string;
  bestMethods: string[];
  cookingGuides: {
    method: string;
    icon: string;
    difficulty: string;
    tempMin: number;
    tempMax: number;
    timePerKg: number;
    instructions: string[];
    tips: string[];
  }[];
  donenessGuide: {
    name: string;
    temp: string;
    color: string;
    description: string;
  }[];
  nutritionalInfo: {
    servingSize: number;
    calories: number;
    protein: number;
    fat: number;
    iron: number;
    zinc: number;
  };
  storageInfo: {
    fridgeDays: string;
    freezerDays: string;
    fridgeTemp: string;
    freezerTemp: string;
    thawingMethod: string;
  };
  pairingSuggestions: {
    sideDishes: string[];
    drinks: string[];
    occasions: string[];
  };
};

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
