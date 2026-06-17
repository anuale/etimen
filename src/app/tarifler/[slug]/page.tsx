import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/data/recipes";
import { rubs } from "@/data/rubs";
import { marinades } from "@/data/marinades";
import { sauces } from "@/data/sauces";
import {
  Clock, ChefHat, ArrowLeft, Lightbulb, Sparkles, Utensils, Timer,
  CookingPot, Beef, Thermometer, Hammer, AlertTriangle
} from "lucide-react";

export async function generateStaticParams() {
  return recipes.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = recipes.find(r => r.slug === slug);
  if (!r) return { title: "Bulunamadı - Etimen" };
  return { title: `${r.name} - Etimen`, description: r.shortDescription };
}

const difficultyColor: Record<string, string> = {
  "Kolay": "border-green-500/30 text-green-700 dark:text-green-400",
  "Orta": "border-yellow-500/30 text-yellow-700 dark:text-yellow-400",
  "Zor": "border-orange-500/30 text-orange-700 dark:text-orange-400",
};

const cutNameMap: Record<string, string> = {
  "dana-bonfile": "Dana Bonfile", "dana-antrikot": "Dana Antrikot", "dana-riploin": "Dana Riploin",
  "dana-t-bone": "Dana T-Bone", "dana-brisket": "Dana Brisket", "dana-short-ribs": "Dana Short Ribs",
  "dana-chuck": "Dana Chuck", "dana-flank": "Dana Flank", "dana-sirloin": "Dana Sirloin",
  "dana-tritip": "Dana Tri-Tip", "dana-kıyma": "Dana Kıyma", "kuzu-pirzola": "Kuzu Pirzola",
  "kuzu-kol": "Kuzu Kol", "kuzu-but": "Kuzu But", "kuzu-kaburga": "Kuzu Kaburga",
  "kuzu-incik": "Kuzu İncik", "kuzu-rack": "Kuzu Rack", "tavuk-gogsu": "Tavuk Göğsü",
  "tavuk-but": "Tavuk But", "tavuk-kanat": "Tavuk Kanat", "tavuk-butun": "Bütün Tavuk",
  "tavuk-bonfile": "Tavuk Bonfile", "sigr-antrikot": "Sığır Antrikot", "sigr-kaburga": "Sığır Kaburga",
  "koyun-but": "Koyun But", "koyun-kol": "Koyun Kol", "keci-but": "Keçi But", "keci-kol": "Keçi Kol"
};

const methodEmoji: Record<string, string> = {
  "Tava": "🍳", "Izgara": "🔥", "Mangal": "🔥", "Fırın": "♨️",
  "Sous Vide": "🔬", "Smoking": "💨", "Düdüklü + Izgara": "⚗️"
};

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find(r => r.slug === slug);
  if (!recipe) notFound();

  const linkedRub = recipe.rub ? rubs.find(r => r.slug === recipe.rub) : null;
  const linkedMarinade = recipe.marinade ? marinades.find(m => m.slug === recipe.marinade) : null;
  const linkedSauce = recipe.sauce ? sauces.find(s => s.slug === recipe.sauce) : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link href="/tarifler" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Tüm Tariflere Dön
          </Link>

          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-7xl">{recipe.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className={difficultyColor[recipe.difficulty]}>{recipe.difficulty}</Badge>
                  <Badge variant="outline">{recipe.origin}</Badge>
                  <Badge variant="outline">{methodEmoji[recipe.method]} {recipe.method}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">{recipe.name}</h1>
                <p className="text-muted-foreground text-lg max-w-3xl">{recipe.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> Hazırlık: {recipe.prepTime} dk</div>
                  <div className="flex items-center gap-1"><CookingPot className="h-4 w-4" /> Pişirme: {recipe.cookTime} dk</div>
                  <div className="flex items-center gap-1"><Timer className="h-4 w-4" /> Dinlenme: {recipe.restTime} dk</div>
                  <div className="flex items-center gap-1"><Beef className="h-4 w-4" /> {recipe.servings} kişilik</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bileşen Kartı - Kesim + Marine + Rub + Sos */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href={`/kesim/${recipe.cut}`} className="text-center p-3 rounded-lg hover:bg-background transition-colors group">
                  <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">🥩</div>
                  <div className="text-xs text-muted-foreground">Et Kesimi</div>
                  <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {cutNameMap[recipe.cut] || recipe.cut}
                  </div>
                </Link>
                {linkedMarinade && (
                  <Link href={`/marineler/${recipe.marinade}`} className="text-center p-3 rounded-lg hover:bg-background transition-colors group">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{linkedMarinade.icon}</div>
                    <div className="text-xs text-muted-foreground">Marine</div>
                    <div className="font-semibold text-sm group-hover:text-primary transition-colors">{linkedMarinade.name}</div>
                  </Link>
                )}
                {linkedRub && (
                  <Link href={`/baharatlar/${recipe.rub}`} className="text-center p-3 rounded-lg hover:bg-background transition-colors group">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{linkedRub.icon}</div>
                    <div className="text-xs text-muted-foreground">Baharat (Rub)</div>
                    <div className="font-semibold text-sm group-hover:text-primary transition-colors">{linkedRub.name}</div>
                  </Link>
                )}
                {linkedSauce && (
                  <Link href={`/soslar/${recipe.sauce}`} className="text-center p-3 rounded-lg hover:bg-background transition-colors group">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{linkedSauce.icon}</div>
                    <div className="text-xs text-muted-foreground">Sos</div>
                    <div className="font-semibold text-sm group-hover:text-primary transition-colors">{linkedSauce.name}</div>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol - Malzemeler + Ekipman */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 mb-6">
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Malzemeler</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="border-b border-border/50 pb-3 last:border-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium">{ing.item}</span>
                          <span className="text-sm text-muted-foreground text-right whitespace-nowrap">{ing.amount}</span>
                        </div>
                        {ing.note && <div className="text-xs text-muted-foreground mt-1 italic">{ing.note}</div>}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Hammer className="h-5 w-5 text-primary" /> Ekipman</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.equipment.map((eq, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {eq}</li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Hedef pişme:</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{recipe.doneness}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sağ - Hazırlanış + İpuçları */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Adım Adım Hazırlanış</CardTitle></CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {recipe.instructions.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{i + 1}</span>
                        <span className="flex-1 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary" /> Şef İpuçları</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3"><Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-1" /><span className="text-sm">{tip}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Hızlı Bağlantılar - Bileşen Sayfaları */}
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" /> Bu Tarifin Bileşenleri</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <Link href={`/kesim/${recipe.cut}`} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2">
                      <Beef className="h-4 w-4 text-primary" />
                      <span className="text-sm">{cutNameMap[recipe.cut] || recipe.cut}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">Kesim Detayı →</Badge>
                  </Link>
                  {linkedMarinade && (
                    <Link href={`/marineler/${recipe.marinade}`} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-2">
                        <span>{linkedMarinade.icon}</span>
                        <span className="text-sm">{linkedMarinade.name} Marine</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Marine Tarifi →</Badge>
                    </Link>
                  )}
                  {linkedRub && (
                    <Link href={`/baharatlar/${recipe.rub}`} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-2">
                        <span>{linkedRub.icon}</span>
                        <span className="text-sm">{linkedRub.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Rub Tarifi →</Badge>
                    </Link>
                  )}
                  {linkedSauce && (
                    <Link href={`/soslar/${recipe.sauce}`} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-2">
                        <span>{linkedSauce.icon}</span>
                        <span className="text-sm">{linkedSauce.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Sos Tarifi →</Badge>
                    </Link>
                  )}
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 bg-yellow-500/5">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Gıda Güvenliği Uyarısı</div>
                    <p className="text-sm text-muted-foreground">
                      Tarifte belirtilen iç sıcaklıklara uyun. Kümes hayvanları için minimum 74°C, 
                      kıyma için 71°C gereklidir. Çiğ etle temas eden yüzeyleri ve elleri mutlaka yıkayın.
                    </p>
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
