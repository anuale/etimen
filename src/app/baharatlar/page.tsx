import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { rubs } from "@/data/rubs";
import { Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Baharat Karışımları (Rub) - Etimen",
  description: "Etleriniz için özel hazırlanmış 10+ baharat rub tarifi. Steak rub, BBQ rub, Türk baharat rubu ve daha fazlası.",
};

const difficultyColor: Record<string, string> = {
  "Kolay": "border-green-500/30 text-green-700 dark:text-green-400",
  "Orta": "border-yellow-500/30 text-yellow-700 dark:text-yellow-400",
  "Zor": "border-orange-500/30 text-orange-700 dark:text-orange-400",
};

export default function BaharatlarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Kuru Baharat Karışımları</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Baharat Karışımları (Rub)</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Etlerinizi pişirmeden önce lezzetlendirmek için {rubs.length} özel baharat karışımı. 
              Her rub, belirli et kesimleri ve pişirme yöntemleri için tasarlandı.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rubs.map(rub => (
              <Link key={rub.slug} href={`/baharatlar/${rub.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{rub.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{rub.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={difficultyColor[rub.difficulty]}>{rub.difficulty}</Badge>
                          <span className="text-xs text-muted-foreground">{rub.origin}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{rub.shortDescription}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rub.prepTime} dk
                      </div>
                      <div className="flex items-center gap-1">{rub.ingredients.length} malzeme</div>
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Tarifi Gör <ArrowRight className="h-4 w-4 ml-1" />
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
