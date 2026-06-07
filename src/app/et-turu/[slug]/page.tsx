import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Beef, 
  Drumstick, 
  Flame, 
  Utensils,
  ArrowRight
} from "lucide-react";

// Define animals with their cuts
const animalTypes = [
  {
    name: "Dana",
    slug: "dana",
    icon: "🐄",
    description: "Sığır eti, en çok tüketilen kırmızı et türü. Farklı kesim yöntemleriyle çok çeşitli pişirme yöntemlerine uygundur.",
    cutCount: 12,
    cuts: [
      { name: "Bonfile (Tenderloin)", slug: "dana-bonfile", icon: "🥩", difficulty: "Orta", bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"] },
      { name: "Antrikot (Ribeye)", slug: "dana-antrikot", icon: "🥩", difficulty: "Kolay", bestMethods: ["Izgara", "Tava", "Fırın"] },
      { name: "Riploin (New York Strip)", slug: "dana-riploin", icon: "🥩", difficulty: "Kolay", bestMethods: ["Izgara", "Tava", "Fırın"] },
      { name: "T-Bone / Porterhouse", slug: "dana-t-bone", icon: "🥩", difficulty: "Orta", bestMethods: ["Izgara", "Tava"] },
      { name: "Brisket (Göğüs)", slug: "dana-brisket", icon: "🥩", difficulty: "Zor", bestMethods: ["Smoking", "Braising"] },
      { name: "Short Ribs (Kaburga)", slug: "dana-short-ribs", icon: "🥩", difficulty: "Orta", bestMethods: ["Braising", "Smoking", "Izgara"] },
      { name: "Chuck Roast (Kol)", slug: "dana-chuck", icon: "🥩", difficulty: "Orta", bestMethods: ["Bracing", "Smoking", "Fırın"] },
      { name: "Flank Steak (Karın)", slug: "dana-flank", icon: "🥩", difficulty: "Orta", bestMethods: ["Izgara", "Tava"] },
      { name: "Sirloin (Kontrfile)", slug: "dana-sirloin", icon: "🥩", difficulty: "Kolay", bestMethods: ["Izgara", "Tava", "Fırın"] },
      { name: "Tri-Tip (Üçgen)", slug: "dana-tritip", icon: "🥩", difficulty: "Orta", bestMethods: ["Izgara", "Smoking"] },
      { name: "Kıyma (Ground Beef)", slug: "dana-kıyma", icon: "🥩", difficulty: "Kolay", bestMethods: ["Tava", "Izgara", "Fırın"] }
    ]
  },
  {
    name: "Kuzu",
    slug: "kuzu",
    icon: "🐑",
    description: "Kuzu eti, yağlı ve sulu yapısıyla bilinir. Özellikle ızgara ve fırında pişirme için idealdir.",
    cutCount: 6,
    cuts: [
      { name: "Kuzu Pirzola (Lamb Chops)", slug: "kuzu-pirzola", icon: "🍖", difficulty: "Orta", bestMethods: ["Izgara", "Tava"] },
      { name: "Kuzu Kol (Lamb Shoulder)", slug: "kuzu-kol", icon: "🍖", difficulty: "Zor", bestMethods: ["Braising", "Smoking", "Fırın"] },
      { name: "Kuzu But (Leg of Lamb)", slug: "kuzu-but", icon: "🍖", difficulty: "Orta", bestMethods: ["Fırın", "Izgara", "Bracing"] },
      { name: "Kuzu Kaburga (Lamb Ribs)", slug: "kuzu-kaburga", icon: "🍖", difficulty: "Orta", bestMethods: ["Izgara", "Bracing"] },
      { name: "Kuzu İncik (Lamb Shank)", slug: "kuzu-incik", icon: "🍖", difficulty: "Zor", bestMethods: ["Bracing", "Fırın"] },
      { name: "Kuzu Rack (Rack of Lamb)", slug: "kuzu-rack", icon: "🍖", difficulty: "Usta", bestMethods: ["Fırın", "Izgara"] }
    ]
  },
  {
    name: "Tavuk",
    slug: "tavuk",
    icon: "🍗",
    description: "En çok tüketilen beyaz et. Hızlı pişmesi ve çok yönlülüğü ile bilinir.",
    cutCount: 5,
    cuts: [
      { name: "Tavuk Göğsü", slug: "tavuk-gogsu", icon: "🍗", difficulty: "Kolay", bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"] },
      { name: "Tavuk But", slug: "tavuk-but", icon: "🍗", difficulty: "Kolay", bestMethods: ["Fırın", "Izgara", "Bracing"] },
      { name: "Tavuk Kanat", slug: "tavuk-kanat", icon: "🍗", difficulty: "Kolay", bestMethods: ["Izgara", "Fırın", "Deep Fry"] },
      { name: "Bütün Tavuk", slug: "tavuk-butun", icon: "🍗", difficulty: "Orta", bestMethods: ["Fırın", "Izgara", "Deep Fry"] },
      { name: "Tavuk Bonfile", slug: "tavuk-bonfile", icon: "🍗", difficulty: "Kolay", bestMethods: ["Tava", "Izgara", "Sous Vide"] }
    ]
  },
  {
    name: "Büyükbaş",
    slug: "buyukbas",
    icon: "🐂",
    description: "Sığır ve dana dışı büyükbaş hayvan etleri. Güçlü tada sahip, yavaş pişirme için ideal.",
    cutCount: 2,
    cuts: [
      { name: "Sığır Antrikot", slug: "sigr-antrikot", icon: "🥩", difficulty: "Orta", bestMethods: ["Izgara", "Tava", "Fırın"] },
      { name: "Sığır Kaburga", slug: "sigr-kaburga", icon: "🥩", difficulty: "Orta", bestMethods: ["Bracing", "Smoking"] }
    ]
  },
  {
    name: "Küçükbaş",
    slug: "kucukbas",
    icon: "🐐",
    description: "Koyun ve keçi eti. Geleneksel Türk mutfağının vazgeçilmezi.",
    cutCount: 4,
    cuts: [
      { name: "Koyun But", slug: "koyun-but", icon: "🐐", difficulty: "Orta", bestMethods: ["Fırın", "Bracing"] },
      { name: "Koyun Kol", slug: "koyun-kol", icon: "🐐", difficulty: "Zor", bestMethods: ["Bracing", "Smoking"] },
      { name: "Keçi But", slug: "keci-but", icon: "🐐", difficulty: "Orta", bestMethods: ["Fırın", "Bracing"] },
      { name: "Keçi Kol", slug: "keci-kol", icon: "🐐", difficulty: "Zor", bestMethods: ["Bracing", "Smoking"] }
    ]
  }
];

export default function AnimalTypeDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const animal = animalTypes.find(a => a.slug === slug);
  
  if (!animal) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/et-turu" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowRight className="h-4 w-4 mr-2" rotate={180} />
            Et Türlerine Dön
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{animal.icon}</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display">{animal.name}</h1>
                <Badge variant="secondary">{animal.cutCount} kesim</Badge>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl">{animal.description}</p>
          </div>

          {/* Cuts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animal.cuts.map((cut) => (
              <Link key={cut.slug} href={`/kesim/${cut.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {cut.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1">{cut.name}</h2>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={cut.difficulty === "Kolay" ? "default" : cut.difficulty === "Orta" ? "secondary" : "destructive"}>
                            {cut.difficulty}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          En iyi yöntem: {cut.bestMethods.join(", ")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Kesim Detayını Gör
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
