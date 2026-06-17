import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Hand, Beef, Lightbulb, Timer } from "lucide-react";

export const metadata = {
  title: "Pişirme Seviyesi Rehberi - Etimen",
  description: "Rare, Medium Rare, Medium, Medium Well, Well Done - et pişirme seviyeleri, iç sıcaklık tablosu ve carry-over cooking rehberi.",
};

const donenessLevels = [
  {
    level: "Blue Rare",
    tr: "Mavi",
    temp: "46-49°C",
    color: "Koyu mor/kırmızı merkez, çok ince gri halka",
    texture: "Soğuk merkez, çiğ kıvamında, çok yumuşak",
    carryOver: "",
    icon: "🔵",
    bgClass: "from-blue-950 to-red-950",
    bestFor: "Sadece bonfile gibi premium kesimler",
    touchTest: "Başparmak-avuc açık, işaret parmağıyla dokunma"
  },
  {
    level: "Rare",
    tr: "Az Pişmiş",
    temp: "50-54°C",
    color: "Kırmızı merkez (%75), belirgin pembe halka",
    texture: "Sıcak merkez, çok yumuşak, az çiğnenme direnci",
    carryOver: "+1-2°C",
    icon: "🔴",
    bgClass: "from-red-950 to-red-800",
    bestFor: "Bonfile, antrikot, riploin, kuzu pirzola",
    touchTest: "Başparmak-işaret parmağı açık avuca dokunma"
  },
  {
    level: "Medium Rare",
    tr: "Az-Orta",
    temp: "55-60°C",
    color: "Pembe merkez (%50), belirgin pembe dış halka",
    texture: "Ilık-sıcak merkez, yumuşak, hafif çiğnenme direnci",
    carryOver: "+2-3°C",
    icon: "🟠",
    bgClass: "from-red-700 to-orange-800",
    bestFor: "Tüm premium biftekler, kuzu rack, ördek göğsü",
    touchTest: "Başparmak-orta parmak avuca dokunma"
  },
  {
    level: "Medium",
    tr: "Orta",
    temp: "60-66°C",
    color: "Pembe merkez (%25), geniş kahverengi dış halka",
    texture: "Sıkılaşmaya başlayan doku, belirgin çiğnenme",
    carryOver: "+2-4°C",
    icon: "🟡",
    bgClass: "from-orange-600 to-yellow-700",
    bestFor: "Antrikot, T-bone, sirloin, kuzu but",
    touchTest: "Başparmak-yüzük parmağı avuca dokunma"
  },
  {
    level: "Medium Well",
    tr: "Orta-İyi",
    temp: "66-71°C",
    color: "Hafif pembe izler, çoğunlukla gri-kahverengi",
    texture: "Sertleşen doku, belirgin çiğnenme, daha az sulu",
    carryOver: "+3-5°C",
    icon: "🟤",
    bgClass: "from-yellow-700 to-amber-800",
    bestFor: "Daha az yağlı kesimler, tercihe bağlı",
    touchTest: "Başparmak-serçe parmak avuca dokunma"
  },
  {
    level: "Well Done",
    tr: "İyi Pişmiş",
    temp: "71-76°C+",
    color: "Tamamen gri-kahverengi, pembe iz yok",
    texture: "Sert, kuru olabilir, tam çiğnenme direnci",
    carryOver: "+3-6°C",
    icon: "⚫",
    bgClass: "from-amber-800 to-stone-800",
    bestFor: "Kıyma, brisket (low&slow), dana gerdan (braise)",
    touchTest: "Başparmak-serçe parmak, maksimum sıkılık"
  }
];

const temperatureGuide = [
  { meat: "Dana Biftek", rare: "50°C", medRare: "55°C", medium: "60°C", medWell: "66°C", wellDone: "71°C+" },
  { meat: "Dana Kıyma", rare: "—", medRare: "—", medium: "—", medWell: "—", wellDone: "71°C+" },
  { meat: "Kuzu", rare: "52°C", medRare: "57°C", medium: "63°C", medWell: "68°C", wellDone: "73°C+" },
  { meat: "Tavuk (beyaz)", rare: "—", medRare: "—", medium: "—", medWell: "—", wellDone: "74°C+" },
  { meat: "Tavuk (but)", rare: "—", medRare: "—", medium: "—", medWell: "—", wellDone: "77°C+" },
  { meat: "Dana Rosto/Fırın", rare: "55°C", medRare: "60°C", medium: "65°C", medWell: "70°C", wellDone: "75°C+" },
  { meat: "Ördek Göğsü", rare: "—", medRare: "55°C", medium: "60°C", medWell: "—", wellDone: "—" },
  { meat: "Brisket (smoked)", rare: "—", medRare: "—", medium: "—", medWell: "—", wellDone: "93°C+" },
];

const carryOverTable = [
  { cut: "İnce biftek (<2.5cm)", ovenTemp: "—", cookTo: "—", final: "—", note: "Carry-over minimal, doğrudan hedef ısıya pişirin" },
  { cut: "Orta biftek (2.5-4cm)", ovenTemp: "200°C+", cookTo: "Hedef - 3°C", final: "Hedef + 2-3°C", note: "Yüksek ısıda carry over 2-3°C" },
  { cut: "Kalın biftek (>4cm)", ovenTemp: "180-200°C", cookTo: "Hedef - 4°C", final: "Hedef + 3-5°C", note: "Büyük kütle ısıyı daha çok tutar" },
  { cut: "Rosto (1-3kg)", ovenTemp: "160-180°C", cookTo: "Hedef - 6°C", final: "Hedef + 5-8°C", note: "Fırından çıkınca 20-30 dk dinlendirin" },
  { cut: "Bütün tavuk", ovenTemp: "180°C", cookTo: "Göğüs 68°C / But 74°C", final: "Göğüs 74°C / But 80°C", note: "Dinlenme sırasında 5-8°C artar" },
  { cut: "Brisket/Smoked", ovenTemp: "110-135°C", cookTo: "93-96°C", final: "93-96°C", note: "Low&slow'de carry-over minimaldir" },
];

const touchTestGuide = [
  { position: "Avuç açık, hiç parmak teması yok", feels: "Çiğ et kıvamı — çok yumuşak", matches: "Blue Rare / Rare" },
  { position: "Başparmak ile işaret parmağı", feels: "Yanak kıvamı — hala yumuşak", matches: "Medium Rare" },
  { position: "Başparmak ile orta parmak", feels: "Çene ucu kıvamı — hafif sıkı", matches: "Medium" },
  { position: "Başparmak ile yüzük parmağı", feels: "Burun ucu kıvamı — sıkı", matches: "Medium Well" },
  { position: "Başparmak ile serçe parmak", feels: "Alın kıvamı — çok sıkı", matches: "Well Done" },
];

export default function PisirmeSeviyesiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Thermometer className="h-4 w-4" />
              <span className="text-sm font-medium">Pişirme Tekniği</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Pişirme Seviyesi Rehberi</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Blue Rare'den Well Done'a tüm pişirme seviyeleri; iç sıcaklık, carry-over cooking, dokunma testi ve et türüne göre ideal sıcaklık tablosu.
            </p>
          </div>

          {/* Carry-Over Açıklaması */}
          <Card className="mb-10 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Timer className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Carry-Over Cooking (Taşıma Pişmesi) Nedir?</h2>
                  <p className="text-muted-foreground">
                    Et piştikten sonra bile iç sıcaklığı artmaya devam eder. Bunun sebebi, etin dış 
                    katmanlarındaki ısının içe doğru iletilmeye devam etmesidir. Bu etki, et ne kadar 
                    büyük ve pişirme ısısı ne kadar yüksekse o kadar güçlüdür. Örneğin medium-rare 
                    (55-60°C) istiyorsanız, eti 52-55°C'de ocaktan almalısınız.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Doneness Seviyeleri */}
          <h2 className="text-2xl font-bold font-display mb-6">Pişirme Seviyeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donenessLevels.map((level, i) => (
              <Card key={i} className="overflow-hidden hover:border-primary/30 transition-all">
                <div className={`h-2 bg-gradient-to-r ${level.bgClass}`} />
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{level.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{level.level}</h3>
                        <div className="text-xs text-muted-foreground">{level.tr}</div>
                      </div>
                    </div>
                    <Badge variant="default" className="font-mono font-bold text-lg px-3">{level.temp}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-xs w-14 flex-shrink-0">Görünüm:</span>
                      <span className="text-muted-foreground">{level.color}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-xs w-14 flex-shrink-0">Doku:</span>
                      <span className="text-muted-foreground">{level.texture}</span>
                    </div>
                    {level.carryOver && (
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-xs w-14 flex-shrink-0">Carry-over:</span>
                        <span className="text-primary">{level.carryOver}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-xs w-14 flex-shrink-0">İçin ideal:</span>
                      <span className="text-muted-foreground">{level.bestFor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Et Türüne Göre Sıcaklık Tablosu */}
          <h2 className="text-2xl font-bold font-display mb-6">Et Türüne Göre İç Sıcaklık Tablosu (°C)</h2>
          <Card className="mb-12 overflow-x-auto">
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Et Türü</th>
                    <th className="text-center py-3 px-4 font-semibold">Rare</th>
                    <th className="text-center py-3 px-4 font-semibold">Med. Rare</th>
                    <th className="text-center py-3 px-4 font-semibold">Medium</th>
                    <th className="text-center py-3 px-4 font-semibold">Med. Well</th>
                    <th className="text-center py-3 px-4 font-semibold">Well Done</th>
                  </tr>
                </thead>
                <tbody>
                  {temperatureGuide.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{row.meat}</td>
                      <td className="text-center py-3 px-4 text-primary">{row.rare}</td>
                      <td className="text-center py-3 px-4 text-primary">{row.medRare}</td>
                      <td className="text-center py-3 px-4 text-primary">{row.medium}</td>
                      <td className="text-center py-3 px-4 text-primary">{row.medWell}</td>
                      <td className="text-center py-3 px-4">{row.wellDone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Dokunma Testi */}
          <h2 className="text-2xl font-bold font-display mb-6">Dokunma Testi (Touch Test)</h2>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hand className="h-5 w-5 text-primary" />
                Termometre olmadan etin pişme seviyesini anlama
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Elinizin başparmak altındaki etli bölgeye diğer parmaklarınızla dokunarak etin pişme 
                seviyesini tahmin edebilirsiniz. Bu test için avucunuzu açık tutun ve diğer elinizin 
                işaret parmağıyla başparmak altındaki bölgeye dokunun. Ardından başparmağınızı sırayla 
                diğer parmaklara dokundurun — her seferinde avuç içi sertleşir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {touchTestGuide.map((step, i) => (
                  <div key={i} className="border rounded-lg p-3 hover:border-primary/30 transition-all">
                    <Badge variant="outline" className="mb-2">{step.matches}</Badge>
                    <div className="text-sm font-semibold mb-1">{step.position}</div>
                    <div className="text-xs text-muted-foreground">{step.feels}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Carry-Over Tablosu */}
          <h2 className="text-2xl font-bold font-display mb-6">Carry-Over Cooking Rehberi</h2>
          <Card className="mb-12 overflow-x-auto">
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Kesim / Pişirme</th>
                    <th className="text-center py-3 px-4 font-semibold">Pişirme Isısı</th>
                    <th className="text-center py-3 px-4 font-semibold">Ocaktan Alma</th>
                    <th className="text-center py-3 px-4 font-semibold">Son Sıcaklık</th>
                    <th className="text-left py-3 px-4 font-semibold">Not</th>
                  </tr>
                </thead>
                <tbody>
                  {carryOverTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{row.cut}</td>
                      <td className="text-center py-3 px-4">{row.ovenTemp}</td>
                      <td className="text-center py-3 px-4 text-primary font-medium">{row.cookTo}</td>
                      <td className="text-center py-3 px-4 text-primary font-medium">{row.final}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Önemli Notlar */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Önemli Güvenlik Notları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-primary" /> Sıcaklık Eşikleri
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dana/Kuzu bütün et: Minimum 52°C (rare)</li>
                    <li>• Kıyma etler: Minimum 71°C (iyi pişmiş)</li>
                    <li>• Kümes hayvanları: Minimum 74°C</li>
                    <li>• Ölçümü en kalın noktadan alın, kemiğe değdirmeyin</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold mb-2 flex items-center gap-2">
                    <Beef className="h-4 w-4 text-primary" /> Pişirme İpuçları
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Termometre en güvenilir yöntemdir - dokunma testi pratiktir</li>
                    <li>• Dinlenme sırasında iç sıcaklık 2-8°C artar</li>
                    <li>• Sous vide'de carry-over yoktur - tam hedef ısı yeterli</li>
                    <li>• Eti kesmeden en az 5 dk dinlendirin</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
