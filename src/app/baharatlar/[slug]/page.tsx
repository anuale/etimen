import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { rubs } from "@/data/rubs";
import { cutNameMap } from "@/data/cut-name-map";
import { Clock, ChefHat, ArrowLeft, Lightbulb, Sparkles, Utensils } from "lucide-react";

export async function generateStaticParams() {
  return rubs.map(rub => ({ slug: rub.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rub = rubs.find(r => r.slug === slug);
  if (!rub) return { title: "Bulunamadı - Etimen" };
  return { title: `${rub.name} - Etimen`, description: rub.shortDescription };
}

const difficultyColor: Record<string, string> = {
  "Kolay": "border-green-500/30 text-green-700 dark:text-green-400",
  "Orta": "border-yellow-500/30 text-yellow-700 dark:text-yellow-400",
  "Zor": "border-orange-500/30 text-orange-700 dark:text-orange-400",
};

export default async function RubDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rub = rubs.find(r => r.slug === slug);
  if (!rub) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link href="/baharatlar" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Tüm Baharatlara Dön
          </Link>

          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-7xl">{rub.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className={difficultyColor[rub.difficulty]}>{rub.difficulty}</Badge>
                  <Badge variant="outline">{rub.origin}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">{rub.name}</h1>
                <p className="text-muted-foreground text-lg max-w-3xl">{rub.description}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> Hazırlık: {rub.prepTime} dk</div>
                  <div className="flex items-center gap-1">{rub.ingredients.length} malzeme</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Malzemeler</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {rub.ingredients.map((ing, i) => (
                      <li key={i} className="border-b border-border/50 pb-3 last:border-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium">{ing.item}</span>
                          <span className="text-sm text-muted-foreground text-right whitespace-nowrap">{ing.amount}</span>
                        </div>
                        {ing.note && <div className="text-xs text-muted-foreground mt-1 italic">{ing.note}</div>}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border text-sm text-muted-foreground">
                    <span className="font-semibold">Saklama:</span> {rub.storageInfo}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Hazırlanışı</CardTitle></CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {rub.instructions.map((step, i) => (
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
                    {rub.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3"><Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-1" /><span className="text-sm">{tip}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" /> Eşleştirme Önerileri</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {rub.pairings.cuts.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🥩 Uyumlu Et Kesimleri</h4>
                      <div className="flex flex-wrap gap-2">
                        {rub.pairings.cuts.map(cut => (
                          <Link key={cut} href={`/kesim/${cut}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">{cutNameMap[cut] || cut}</Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {rub.pairings.methods.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🔥 Pişirme Yöntemleri</h4>
                      <div className="flex flex-wrap gap-2">{rub.pairings.methods.map(m => <Badge key={m} variant="secondary">{m}</Badge>)}</div>
                    </div>
                  )}
                  {rub.pairings.occasions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🎉 Uygun Zamanlar</h4>
                      <div className="flex flex-wrap gap-2">{rub.pairings.occasions.map(o => <Badge key={o} variant="outline" className="text-xs">{o}</Badge>)}</div>
                    </div>
                  )}
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
