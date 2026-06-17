import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { marinades } from "@/data/marinades";
import { Clock, ArrowRight, FlaskConical, Beef } from "lucide-react";

export const metadata = {
  title: "Marine Rehberi - Etimen",
  description: "Eti yumuşatmak ve lezzetlendirmek için 15 marine tarifi. Yoğurtlu, sirkeli, sütlü, teriyaki ve daha fazlası.",
};

const difficultyColor: Record<string, string> = {
  "Kolay": "border-green-500/30 text-green-700 dark:text-green-400",
  "Orta": "border-yellow-500/30 text-yellow-700 dark:text-yellow-400",
  "Zor": "border-orange-500/30 text-orange-700 dark:text-orange-400",
};

const proteinColor: Record<string, string> = {
  "Dana": "border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/5",
  "Kuzu": "border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5",
  "Tavuk": "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/5",
};

export default function MarinelerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <FlaskConical className="h-4 w-4" />
              <span className="text-sm font-medium">Marine Teknikleri</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Marine Rehberi</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Eti pişirmeden önce lezzetlendirmek ve yumuşatmak için {marinades.length} özel marine tarifi. 
              Asit, enzim ve yağ bazlı; her et türü ve pişirme yöntemi için.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marinades.map(marinade => (
              <Link key={marinade.slug} href={`/marineler/${marinade.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{marinade.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {marinade.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={difficultyColor[marinade.difficulty]}>
                            {marinade.difficulty}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{marinade.origin}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{marinade.shortDescription}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Hazırlık: {marinade.prepTime} dk
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Marine: {marinade.marinationTime.ideal}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {marinade.bestFor.map(protein => (
                        <Badge key={protein} variant="outline" className={proteinColor[protein] + " text-[10px] px-1.5"}>
                          <Beef className="h-2 w-2 mr-0.5" /> {protein}
                        </Badge>
                      ))}
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
