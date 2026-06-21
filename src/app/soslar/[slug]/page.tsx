import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sauces, categoryLabels } from "@/data/sauces";
import { cutNameMap } from "@/data/cut-name-map";
import { 
  Clock, 
  Users, 
  ChefHat, 
  ArrowLeft,
  Utensils,
  Lightbulb,
  Wine,
  Snowflake,
  Sparkles,
  Flame
} from "lucide-react";

export async function generateStaticParams() {
  return sauces.map((sauce) => ({
    slug: sauce.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sauce = sauces.find(s => s.slug === slug);
  
  if (!sauce) {
    return { title: "Sos Bulunamadı - Etimen" };
  }
  
  return {
    title: `${sauce.name} Tarifi - Etimen`,
    description: sauce.shortDescription,
  };
}

export default async function SauceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sauce = sauces.find(s => s.slug === slug);
  
  if (!sauce) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/soslar" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tüm Soslara Dön
          </Link>

          {/* Hero */}
          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-7xl">{sauce.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">{categoryLabels[sauce.category]}</Badge>
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
                  <Badge variant="outline">{sauce.origin}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">
                  {sauce.name}
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  {sauce.description}
                </p>
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Toplam Süre</div>
                    <div className="font-bold">{sauce.prepTime + sauce.cookTime} dk</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <ChefHat className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Hazırlama</div>
                    <div className="font-bold">{sauce.prepTime} dk</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Flame className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Pişirme</div>
                    <div className="font-bold">{sauce.cookTime > 0 ? `${sauce.cookTime} dk` : "Gerekmiyor"}</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Porsiyon</div>
                    <div className="font-bold">{sauce.servings} kişilik</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Malzemeler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {sauce.ingredients.map((ing, i) => (
                      <li key={i} className="border-b border-border/50 pb-3 last:border-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium">{ing.item}</span>
                          <span className="text-sm text-muted-foreground text-right whitespace-nowrap">
                            {ing.amount}
                          </span>
                        </div>
                        {ing.note && (
                          <div className="text-xs text-muted-foreground mt-1 italic">
                            {ing.note}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Snowflake className="h-4 w-4 text-primary" />
                      Saklama
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>🧊 {sauce.storageInfo.fridge}</div>
                      {sauce.storageInfo.freezer && (
                        <div>❄️ {sauce.storageInfo.freezer}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructions & More */}
            <div className="lg:col-span-2 space-y-6">
              {/* Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-primary" />
                    Hazırlanışı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {sauce.instructions.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </span>
                        <span className="flex-1 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Şef İpuçları
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sauce.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pairings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Eşleştirme Önerileri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cuts */}
                  {sauce.pairings.cuts.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🥩 Uyumlu Et Kesimleri</h4>
                      <div className="flex flex-wrap gap-2">
                        {sauce.pairings.cuts.map(cut => (
                          <Link key={cut} href={`/kesim/${cut}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                              {cutNameMap[cut] || cut}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Methods */}
                  {sauce.pairings.methods.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🔥 Pişirme Yöntemleri</h4>
                      <div className="flex flex-wrap gap-2">
                        {sauce.pairings.methods.map(method => (
                          <Badge key={method} variant="secondary">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Occasions */}
                  {sauce.pairings.occasions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🎉 Uygun Zamanlar</h4>
                      <div className="flex flex-wrap gap-2">
                        {sauce.pairings.occasions.map(occ => (
                          <Badge key={occ} variant="outline" className="text-xs">
                            {occ}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Nutritional Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wine className="h-5 w-5 text-primary" />
                    Besin Değerleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-3">
                    * Porsiyon başına ({sauce.nutritionalInfo.servingSize}g)
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{sauce.nutritionalInfo.calories}</div>
                      <div className="text-xs text-muted-foreground">Kalori</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{sauce.nutritionalInfo.fat}g</div>
                      <div className="text-xs text-muted-foreground">Yağ</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{sauce.nutritionalInfo.carbs}g</div>
                      <div className="text-xs text-muted-foreground">Karbonhidrat</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{sauce.nutritionalInfo.sodium}mg</div>
                      <div className="text-xs text-muted-foreground">Sodyum</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
