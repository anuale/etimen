import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { sauces, categoryLabels } from "@/data/sauces";
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Et Sosları Tarifleri - Etimen",
  description: "Et yemeklerinize eşlik edecek 20+ sos tarifi. Chimichurri, BBQ, hardal, mantar, pesto ve daha fazlası.",
};

export default function SoslarPage() {
  const categories = Array.from(new Set(sauces.map(s => s.category)));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <ChefHat className="h-4 w-4" />
              <span className="text-sm font-medium">Şef Sosları</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Et Sosları Tarifleri
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Et yemeklerinizi bir üst seviyeye taşıyacak {sauces.length}+ özenle hazırlanmış sos tarifi. 
              Her sosta tam malzeme listesi, adım adım yapılış ve eşleştirme önerileri.
            </p>
          </div>

          {/* Categories Quick Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <a 
                key={cat} 
                href={`#${cat}`}
                className="px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-sm transition-all"
              >
                {categoryLabels[cat as keyof typeof categoryLabels]}
              </a>
            ))}
          </div>

          {/* Sauces Grid */}
          {categories.map(category => {
            const categorySauces = sauces.filter(s => s.category === category);
            return (
              <section key={category} id={category} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                  <Badge variant="secondary">{categorySauces.length}</Badge>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySauces.map(sauce => (
                    <Link key={sauce.slug} href={`/soslar/${sauce.slug}`}>
                      <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-5xl group-hover:scale-110 transition-transform">
                              {sauce.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                                {sauce.name}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge 
                                  variant="outline" 
                                  className={
                                    sauce.difficulty === "Kolay" ? "border-green-500/30 text-green-700 dark:text-green-400" :
                                    sauce.difficulty === "Orta" ? "border-yellow-500/30 text-yellow-700 dark:text-yellow-400" :
                                    sauce.difficulty === "Zor" ? "border-orange-500/30 text-orange-700 dark:text-orange-400" :
                                    "border-red-500/30 text-red-700 dark:text-red-400"
                                  }
                                >
                                  {sauce.difficulty}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{sauce.origin}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {sauce.shortDescription}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {sauce.prepTime + sauce.cookTime} dk
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {sauce.servings} kişilik
                            </div>
                          </div>
                          
                          <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            Tarifi Gör
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
