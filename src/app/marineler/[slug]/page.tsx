import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marinades } from "@/data/marinades";
import { Clock, ChefHat, ArrowLeft, Lightbulb, Sparkles, Utensils, FlaskConical, Timer, Beef } from "lucide-react";

export async function generateStaticParams() {
  return marinades.map(m => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = marinades.find(m => m.slug === slug);
  if (!m) return { title: "Bulunamadı - Etimen" };
  return { title: `${m.name} - Etimen`, description: m.shortDescription };
}

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

export default async function MarinadeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = marinades.find(m => m.slug === slug);
  if (!m) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link href="/marineler" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Tüm Marinelere Dön
          </Link>

          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-7xl">{m.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className={difficultyColor[m.difficulty]}>{m.difficulty}</Badge>
                  <Badge variant="outline">{m.origin}</Badge>
                  {m.bestFor.map(p => (
                    <Badge key={p} variant="outline" className={proteinColor[p]}>
                      <Beef className="h-3 w-3 mr-1" /> {p}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">{m.name}</h1>
                <p className="text-muted-foreground text-lg max-w-3xl">{m.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> Hazırlık: {m.prepTime} dk</div>
                  <div className="flex items-center gap-1"><Timer className="h-4 w-4" /> Marine süresi: {m.marinationTime.ideal}</div>
                  <div className="flex items-center gap-1">{m.ingredients.length} malzeme</div>
                  <div className="flex items-center gap-1"><FlaskConical className="h-4 w-4" /> Asit baz: {m.acidBase}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marine Süresi Bilgi Kartı */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <Timer className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Minimum</div>
                    <div className="font-bold text-xl">{m.marinationTime.minHours} saat</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">İdeal</div>
                    <div className="font-bold text-xl text-primary">{m.marinationTime.ideal}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Maksimum</div>
                    <div className="font-bold text-xl">{m.marinationTime.maxHours} saat</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Malzemeler</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {m.ingredients.map((ing, i) => (
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
                    <span className="font-semibold">Saklama:</span> {m.storageInfo}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" /> Hazırlanışı</CardTitle></CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {m.instructions.map((step, i) => (
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
                    {m.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3"><Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-1" /><span className="text-sm">{tip}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" /> Eşleştirme Önerileri</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {m.pairings.cuts.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🥩 Uyumlu Et Kesimleri</h4>
                      <div className="flex flex-wrap gap-2">
                        {m.pairings.cuts.map(cut => (
                          <Link key={cut} href={`/kesim/${cut}`}>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">{cutNameMap[cut] || cut}</Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {m.pairings.methods.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🔥 Pişirme Yöntemleri</h4>
                      <div className="flex flex-wrap gap-2">{m.pairings.methods.map(m => <Badge key={m} variant="secondary">{m}</Badge>)}</div>
                    </div>
                  )}
                  {m.pairings.occasions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">🎉 Uygun Zamanlar</h4>
                      <div className="flex flex-wrap gap-2">{m.pairings.occasions.map(o => <Badge key={o} variant="outline" className="text-xs">{o}</Badge>)}</div>
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
