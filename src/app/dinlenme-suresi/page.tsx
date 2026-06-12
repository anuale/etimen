import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Timer, Lightbulb, Beef, ChefHat } from "lucide-react";

export const metadata = {
  title: "Dinlenme Süresi Rehberi - Etimen",
  description: "Et pişirdikten sonra dinlenme süresi ne kadar olmalı? Kesim, kalınlık ve pişirme yöntemine göre dinlenme süreleri.",
};

const restData = [
  {
    type: "İnce Biftek (&lt; 2.5cm)",
    icon: "🥩",
    examples: "Tavuk göğsü, dana flank, ince pirzola",
    restTime: "3-5 dk",
    reason: "İnce kesimler hızlı soğur, kısa dinlenme yeterlidir",
    tip: "Sıcak servis tabağında dinlendirin"
  },
  {
    type: "Orta Biftek (2.5-4cm)",
    icon: "🥩",
    examples: "Antrikot, bonfile, riploin, T-bone",
    restTime: "5-10 dk",
    reason: "İç sıcaklık 2-3°C artmaya devam eder (carry-over cooking)",
    tip: "Folyo ile gevşekçe örtün, sıkı sarmayın"
  },
  {
    type: "Kalın Biftek / Steak (&gt; 4cm)",
    icon: "🥩",
    examples: "Porterhouse, kalın kesim antrikot, rack of lamb (600g+)",
    restTime: "10-15 dk",
    reason: "Büyük kütle ısısını uzun süre korur, carry-over 5°C'ye kadar çıkabilir",
    tip: "Sous vide sonrası mühürleme + 5dk dinlenme yeterlidir"
  },
  {
    type: "Bütün Tavuk / Ördek",
    icon: "🍗",
    examples: "Bütün tavuk, bütün ördek (1.5-2.5kg)",
    restTime: "15-20 dk",
    reason: "Büyük kütle, iç sıcaklık 5-8°C artar",
    tip: "Folyo altında havlu ile sarın, kesmeden önce bacakları oynatın"
  },
  {
    type: "Kuzu But / Dana Rosto (1-3kg)",
    icon: "🐑",
    examples: "Kuzu but, dana chuck roast, dana brisket",
    restTime: "20-30 dk",
    reason: "Büyük rostolar en uzun dinlenmeyi gerektirir",
    tip: "Folyo ile sarın, kesmeden önce 30dk bekletin"
  },
  {
    type: "Yavaş Pişmiş Etler (Smoked/Braised)",
    icon: "💨",
    examples: "Brisket, short ribs, kuzu incik, pulled pork",
    restTime: "30-60 dk",
    reason: "Uzun pişirme sonrası dinlenme etin suyunu geri çekmesini sağlar",
    tip: "Folyo + havlu ile sarın (Faux Cambro), 60dk'ya kadar sıcak kalır"
  }
];

const methodRestData = [
  { method: "Sous Vide", time: "2-5 dk (mühürleme sonrası)", note: "Sous vide'de et zaten dinlenmiş sayılır, sadece mühürleme sonrası kısa dinlenme yeterli" },
  { method: "Tava / Pan-Sear", time: "5-10 dk", note: "Tavadaki yüksek ısı carry-over'i artırır, orta-kalın kesimlerde 10 dk ideal" },
  { method: "Izgara", time: "5-10 dk", note: "Izgara sonrası dinlenme standart, kalın kesimlerde 10 dk" },
  { method: "Fırın (Roasting)", time: "10-20 dk", note: "Fırın sonrası carry-over en yüksektir, özellikle büyük parçalarda" },
  { method: "Smoking", time: "20-60 dk", note: "Smoked etler en uzun dinlenmeyi gerektirir, faux cambro tekniği kullanın" },
  { method: "Deep Fry", time: "2-3 dk", note: "Kızartma sonrası kısa dinlenme yeterli, tel ızgarada bekletin" }
];

export default function DinlenmeSuresiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Timer className="h-4 w-4" />
              <span className="text-sm font-medium">Pişirme Tekniği</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Dinlenme Süresi Rehberi</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Et piştikten sonra dinlenme süresi, lezzet ve sululuk için en kritik adımlardan biridir. 
              Kesim tipi ve pişirme yöntemine göre ideal dinlenme süresini öğrenin.
            </p>
          </div>

          {/* Neden Dinlenmeli? */}
          <Card className="mb-10 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Beef className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Neden Dinlenmeli?</h2>
                  <p className="text-muted-foreground">
                    Pişirme sırasında etin içindeki sular dışarı doğru itilir. Dinlenme sırasında 
                    bu sular tekrar ete dağılır (osmosis). Ayrıca iç sıcaklık <strong>carry-over cooking</strong> 
                    etkisiyle 2-8°C daha yükselmeye devam eder. Dinlendirilmemiş eti kestiğinizde 
                    suyu tabağa akar ve et kuru kalır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kesim Tipine Göre */}
          <h2 className="text-2xl font-bold font-display mb-6">Kesim Tipine Göre Dinlenme Süreleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restData.map((item, i) => (
              <Card key={i} className="hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-3xl">{item.icon}</span>
                    {item.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{item.restTime}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Örnek:</span> {item.examples}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Neden:</span> {item.reason}
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-xs">
                    💡 {item.tip}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pişirme Yöntemine Göre */}
          <h2 className="text-2xl font-bold font-display mb-6">Pişirme Yöntemine Göre Dinlenme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methodRestData.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <h3 className="font-bold flex items-center gap-2 mb-2">
                    <ChefHat className="h-4 w-4 text-primary" />
                    {item.method}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-2">{item.time}</div>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Altın Kurallar */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Altın Dinlenme Kuralları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold mb-1">✅ Doğru</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Et dinlenirken folyo ile gevşekçe örtün</li>
                    <li>• Sıcak servis tabağına alın</li>
                    <li>• Carry-over cooking'i hesaba katın (2-8°C)</li>
                    <li>• Uzun dinlenme sonrası fırında 3-5 dk ısıtın</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold mb-1">❌ Yanlış</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Folyoyu sıkıca sarmayın (buhar yapar, crust yumuşar)</li>
                    <li>• Soğuk tabağa koymayın (sıcaklık şoku)</li>
                    <li>• Mikrodalga ile dinlendirmeyin</li>
                    <li>• Dilimleyip dinlendirmeyin (suyunu kaybeder)</li>
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
