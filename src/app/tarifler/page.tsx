import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { recipes } from "@/data/recipes";
import { Clock, ArrowRight, ChefHat, Timer } from "lucide-react";

export const metadata = {
  title: "Tarifler - Etimen",
  description: "Et yemekleri için 12 imza tarif. Bonfileden brisket'e, kuzudan tavuğa adım adım tarifler.",
};

const difficultyColor: Record<string, string> = {
  "Kolay": "border-green-500/30 text-green-700 dark:text-green-400",
  "Orta": "border-yellow-500/30 text-yellow-700 dark:text-yellow-400",
  "Zor": "border-orange-500/30 text-orange-700 dark:text-orange-400",
};

const methodEmoji: Record<string, string> = {
  "Tava": "🍳", "Izgara": "🔥", "Mangal": "🔥", "Fırın": "♨️",
  "Sous Vide": "🔬", "Smoking": "💨", "Düdüklü + Izgara": "⚗️"
};

export default function TariflerPage() {
  const quickRecipes = recipes.filter(r => r.totalTime <= 60);
  const mediumRecipes = recipes.filter(r => r.totalTime > 60 && r.totalTime <= 180);
  const longRecipes = recipes.filter(r => r.totalTime > 180);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <ChefHat className="h-4 w-4" />
              <span className="text-sm font-medium">Adım Adım Tarifler</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">İmza Tarifler</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Etimen'in seçilmiş 12 imza tarifi. Her biri belirli bir et kesimi, marine, rub ve sos kombinasyonuyla tasarlandı. 
              Baştan sona adım adım, malzeme listesi ve şef ipuçlarıyla.
            </p>
          </div>

          {/* Hızlı Tarifler */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
              <Timer className="h-5 w-5 text-green-500" /> 1 Saatten Kısa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickRecipes.map(recipe => (
                <Link key={recipe.slug} href={`/tarifler/${recipe.slug}`}>
                  <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl group-hover:scale-110 transition-transform">{recipe.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{recipe.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={difficultyColor[recipe.difficulty]}>{recipe.difficulty}</Badge>
                            <span className="text-xs text-muted-foreground">{recipe.origin}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{recipe.shortDescription}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {recipe.totalTime} dk</div>
                        <div className="flex items-center gap-1">{methodEmoji[recipe.method] || "🔥"} {recipe.method}</div>
                      </div>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Tarife Git <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Orta Süreli Tarifler */}
          {mediumRecipes.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                <Timer className="h-5 w-5 text-yellow-500" /> 1-3 Saat
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediumRecipes.map(recipe => (
                  <Link key={recipe.slug} href={`/tarifler/${recipe.slug}`}>
                    <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl group-hover:scale-110 transition-transform">{recipe.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{recipe.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className={difficultyColor[recipe.difficulty]}>{recipe.difficulty}</Badge>
                              <span className="text-xs text-muted-foreground">{recipe.origin}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{recipe.shortDescription}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {recipe.totalTime} dk</div>
                          <div className="flex items-center gap-1">{methodEmoji[recipe.method] || "🔥"} {recipe.method}</div>
                        </div>
                        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Tarife Git <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Uzun Tarifler */}
          {longRecipes.length > 0 && (
            <section>
              <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                <Timer className="h-5 w-5 text-red-500" /> 3 Saatten Uzun
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {longRecipes.map(recipe => (
                  <Link key={recipe.slug} href={`/tarifler/${recipe.slug}`}>
                    <Card className="h-full cursor-pointer group hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl group-hover:scale-110 transition-transform">{recipe.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{recipe.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className={difficultyColor[recipe.difficulty]}>{recipe.difficulty}</Badge>
                              <span className="text-xs text-muted-foreground">{recipe.origin}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{recipe.shortDescription}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {recipe.totalTime} dk</div>
                          <div className="flex items-center gap-1">{methodEmoji[recipe.method] || "🔥"} {recipe.method}</div>
                        </div>
                        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Tarife Git <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
