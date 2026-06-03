import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beef, ArrowRight } from "lucide-react";

const animalTypes = [
  {
    name: "Dana",
    slug: "dana",
    icon: "🐄",
    description: "Sığır eti, en çok tüketilen kırmızı et türü. Farklı kesim yöntemleriyle çok çeşitli pişirme yöntemlerine uygundur.",
    cutCount: 12,
    cuts: [
      "Bonfile", "Antrikot", "Riploin", "T-Bone", "Brisket", 
      "Short Ribs", "Chuck Roast", "Flank Steak", "Skirt Steak", 
      "Sirloin", "Tri-Tip", "Kıyma"
    ],
  },
  {
    name: "Kuzu",
    slug: "kuzu",
    icon: "🐑",
    description: "Kuzu eti, yağlı ve sulu yapısıyla bilinir. Özellikle ızgara ve fırında pişirme için idealdir.",
    cutCount: 6,
    cuts: [
      "Pirzola", "Kol", "But", "Kaburga", "İncik", "Rack"
    ],
  },
  {
    name: "Tavuk",
    slug: "tavuk",
    icon: "🍗",
    description: "En çok tüketilen beyaz et. Hızlı pişmesi ve çok yönlülüğü ile bilinir.",
    cutCount: 5,
    cuts: [
      "Göğüs", "But", "Kanat", "Bütün Tavuk", "Bonfile"
    ],
  },
  {
    name: "Büyükbaş",
    slug: "buyukbas",
    icon: "🐂",
    description: "Sığır ve dana dışı büyükbaş hayvan etleri. Güçlü tada sahip, yavaş pişirme için ideal.",
    cutCount: 2,
    cuts: ["Sığır Antrikot", "Sığır Kaburga"],
  },
  {
    name: "Küçükbaş",
    slug: "kucukbas",
    icon: "🐐",
    description: "Koyun ve keçi eti. Geleneksel Türk mutfağının vazgeçilmezi.",
    cutCount: 4,
    cuts: ["Koyun But", "Koyun Kol", "Keçi But", "Keçi Kol"],
  },
];

export default function EtTuruPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">
              Et Türlerini Keşfet
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Her et türü için özel pişirme rehberleri, kesim bilgileri ve uzman önerileri
            </p>
          </div>

          {/* Animal Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animalTypes.map((type) => (
              <Link key={type.slug} href={`/et-turu/${type.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform">
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">{type.name}</h2>
                        <Badge variant="secondary">{type.cutCount} kesim</Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {type.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.cuts.slice(0, 6).map((cut) => (
                        <Badge key={cut} variant="outline" className="text-xs">
                          {cut}
                        </Badge>
                      ))}
                      {type.cuts.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{type.cuts.length - 6} daha
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Kesimleri Gör
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
