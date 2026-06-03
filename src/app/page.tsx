import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Beef, 
  Drumstick, 
  Thermometer, 
  Clock, 
  ChefHat, 
  Flame,
  ArrowRight,
  Search
} from "lucide-react";

const animalTypes = [
  {
    name: "Dana",
    slug: "dana",
    icon: "🐄",
    description: "Bonfile, antrikot, riploin ve daha fazlası",
    cutCount: 12,
  },
  {
    name: "Kuzu",
    slug: "kuzu",
    icon: "🐑",
    description: "Pirzola, but, kol ve kuzu incik",
    cutCount: 6,
  },
  {
    name: "Tavuk",
    slug: "tavuk",
    icon: "🍗",
    description: "Göğüs, but, kanat ve bütün tavuk",
    cutCount: 5,
  },
  {
    name: "Büyükbaş",
    slug: "buyukbas",
    icon: "🐂",
    description: "Sığır eti ve özel kesimler",
    cutCount: 2,
  },
  {
    name: "Küçükbaş",
    slug: "kucukbas",
    icon: "🐐",
    description: "Koyun ve keçi eti",
    cutCount: 4,
  },
];

const features = [
  {
    icon: Thermometer,
    title: "Doğru Sıcaklık",
    description: "Her et türü için ideal iç sıcaklık rehberi",
  },
  {
    icon: Clock,
    title: "Hassas Süre",
    description: "Ağırlık ve/pişirme yöntemine göre süre hesaplama",
  },
  {
    icon: ChefHat,
    title: "Uzman İpuçları",
    description: "Profesyonel şeflerden püf noktaları",
  },
  {
    icon: Flame,
    title: "8 Pişirme Yöntemi",
    description: "Izgara, fırın, sous vide, smoking ve daha fazlası",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 animate-slide-up">
                Etin Mükemmel{" "}
                <span className="text-primary">Pişirme</span>{" "}
                Rehberi
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Dana, kuzu, tavuk ve tüm et türleri için doğru sıcaklık, 
                doğru süre, mükemmel sonuç. Profesyonel pişirme rehberi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Link href="/hesaplama">
                  <Button size="xl" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Hesaplamaya Başla
                  </Button>
                </Link>
                <Link href="/et-turu">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    Et Türlerini Keşfet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Animal Types Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">
                Et Türlerini Keşfet
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Her et türü için özel pişirme rehberleri, kesim bilgileri ve uzman önerileri
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {animalTypes.map((type) => (
                <Link key={type.slug} href={`/et-turu/${type.slug}`}>
                  <Card className="h-full cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {type.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{type.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {type.description}
                      </p>
                      <span className="text-xs text-primary">
                        {type.cutCount} kesim
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">
                Neden Etimen?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profesyonel şeflerin kullandığı bilgiler, artık cebinizde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Calculator Preview */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display mb-4">
                Hızlı Hesaplama
              </h2>
              <p className="text-muted-foreground mb-8">
                Etinizi seçin, ağırlığı girin, mükemmel pişirme rehberini hemen öğrenin
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-background border border-border">
                  <Beef className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-sm">Et Seçin</span>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <Drumstick className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-sm">Yöntem Seçin</span>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <Thermometer className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-sm">Sonucu Alın</span>
                </div>
              </div>

              <Link href="/hesaplama">
                <Button size="lg">
                  Hemen Dene
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
