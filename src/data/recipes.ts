export interface Recipe {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  prepTime: number;
  cookTime: number;
  restTime: number;
  totalTime: number;
  servings: number;
  origin: string;
  cut: string;
  marinade?: string;
  rub?: string;
  sauce?: string;
  method: string;
  doneness: string;
  equipment: string[];
  ingredients: { item: string; amount: string; note?: string }[];
  instructions: string[];
  tips: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    slug: "klasik-antrikot-tabagi",
    name: "Klasik Antrikot Tabağı",
    icon: "🥩",
    shortDescription: "Steakhouse rubu ile mühürlenmiş dana antrikot, Béarnaise sos eşliğinde",
    description: "Profesyonel bir steakhouse'da yiyeceğiniz kalitede, kahve ve kakao ile zenginleştirilmiş steakhouse rubuyla kaplanmış, tereyağında mühürlenmiş dana antrikot. Üzerine ipeksi Béarnaise sos ve fırın patates ile eksiksiz bir steakhouse deneyimi.",
    difficulty: "Orta",
    prepTime: 10,
    cookTime: 12,
    restTime: 8,
    totalTime: 30,
    servings: 2,
    origin: "Fransa / Amerika",
    cut: "dana-antrikot",
    rub: "steak-rubu",
    sauce: "bearnaise",
    method: "Tava",
    doneness: "Medium Rare (55°C)",
    equipment: ["Döküm tava", "Et termometresi", "Küçük sos tenceresi"],
    ingredients: [
      { item: "Dana antrikot (3cm kalınlık)", amount: "2 adet (250-300g)" },
      { item: "Steakhouse Rubu", amount: "2 yemek kaşığı" },
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "2 diş" },
      { item: "Taze kekik", amount: "2 dal" },
      { item: "Béarnaise sos (hazır)", amount: "4 yemek kaşığı" },
      { item: "Patates", amount: "2 adet", note: "fırınlanmış" }
    ],
    instructions: [
      "Antrikotları pişirmeden 1 saat önce buzdolabından çıkarın, oda sıcaklığına gelsin",
      "Biftekleri steakhouse rubu ile her tarafını kaplayacak şekilde ovun",
      "Döküm tavayı yüksek ateşte iyice kızdırın (duman tütmeye başlayınca)",
      "Eti tavaya koyun, 3 dakika ilk tarafı mühürleyin, çevirin",
      "Tereyağı, sarımsak ve kekiği ekleyin, kaşıkla tereyağını etin üzerine dökün (basting)",
      "3 dakika daha pişirin—iç sıcaklık 52-55°C olmalı (medium rare)",
      "Eti tavadan alın, ızgara teli üzerinde 8 dk dinlendirin",
      "Béarnaise sosu benmari ısıtın",
      "Dilimleyip sos ve fırın patates ile servis edin"
    ],
    tips: [
      "Et oda sıcaklığında olmazsa içi soğuk kalır, dışı yanar",
      "Tereyağını basting yaparken yakmayın — sarımsak yanarsa acılaşır",
      "Béarnaise sosu önceden hazırlayıp 2 saat önce buzdolabından çıkarın",
      "Bifteği kesmeden önce en kalın noktadan termometre ile kontrol edin"
    ],
    tags: ["Steakhouse", "Kırmızı Et", "Özel Gün", "Tereyağlı"]
  },
  {
    slug: "turk-usulu-kuzu-pirzola",
    name: "Türk Usulü Kuzu Pirzola",
    icon: "🐑",
    shortDescription: "Anadolu baharat marine ile 12 saat dinlendirilmiş mangal kuzu pirzola",
    description: "Anadolu'nun yedi bölgesinden yedi baharatın yoğurtla buluştuğu marine, kuzu pirzolanın yoğun lezzetini mükemmel şekilde tamamlar. Mangalda pişen, dışı hafif çıtır, içi sulu kuzu pirzolalar, közlenmiş sebzeler ve sumaklı soğan ile servis edilir.",
    difficulty: "Orta",
    prepTime: 15,
    cookTime: 10,
    restTime: 5,
    totalTime: 30,
    servings: 4,
    origin: "Türkiye",
    cut: "kuzu-pirzola",
    marinade: "anadolu-baharat-marine",
    method: "Mangal",
    doneness: "Medium (60-63°C)",
    equipment: ["Mangal", "Mangal maşası", "Et termometresi"],
    ingredients: [
      { item: "Kuzu pirzola (kalın kesim)", amount: "8 adet" },
      { item: "Anadolu Baharat Marine (hazır)", amount: "1 porsiyon" },
      { item: "Kırmızı kapya biber", amount: "2 adet", note: "közlemek için" },
      { item: "Domates", amount: "2 adet", note: "közlemek için" },
      { item: "Kırmızı soğan (piyazlık)", amount: "1 adet" },
      { item: "Sumak", amount: "1 tatlı kaşığı" },
      { item: "Maydanoz", amount: "1/2 demet" },
      { item: "Lavaş", amount: "4 adet" }
    ],
    instructions: [
      "Kuzu pirzolaları bir gece önceden Anadolu Baharat Marine ile marine edin, buzdolabında 12 saat bekletin",
      "Pişirmeden 1 saat önce buzdolabından çıkarın, oda sıcaklığına gelsin",
      "Mangalı yakın, köz haline gelene kadar bekleyin (alev sönmüş olmalı)",
      "Pirzolaları marineyle birlikte mangala dizin, her tarafı 3-4 dk pişirin",
      "Közlenmesi için biber ve domatesleri mangalın kenarına koyun",
      "Pirzolaları mangaldan alın, 5 dk dinlendirin",
      "Soğanı piyazlık doğrayın, sumak ve tuzla ovun, maydanoz ekleyin",
      "Lavaşları mangalda hafif ısıtın, pirzola ve közlenmiş sebzelerle servis edin"
    ],
    tips: [
      "Marine süresi 12 saatten az olursa lezzet tam oturmaz — sabırlı olun",
      "Mangal közü alevsiz olmalı — alev eti yakar, duman isli tat verir",
      "Pirzolaları çok çevirmeyin — her yüzü sadece bir kere çevirin",
      "Kemikli et olduğu için termometre kullanımı zor — dokunma testi yapın"
    ],
    tags: ["Türk Mutfağı", "Kuzu", "Mangal", "Kebap", "Davet"]
  },
  {
    slug: "sous-vide-bonfile",
    name: "Sous Vide Dana Bonfile",
    icon: "🔬",
    shortDescription: "Sous vide ile kusursuz pişmiş bonfile, tereyağında mühürlenmiş, Beurre Blanc sos",
    description: "Sous vide tekniğinin hassasiyetiyle tam 54°C'de 2 saatte pişirilmiş, ardından kızgın döküm tavada tereyağında mühürlenmiş dana bonfile. Yanında ipeksi bir Beurre Blanc (beyaz tereyağı sos) ve trüf yağlı patates püresi ile fine dining kalitesinde bir deneyim.",
    difficulty: "Zor",
    prepTime: 10,
    cookTime: 130,
    restTime: 5,
    totalTime: 145,
    servings: 2,
    origin: "Fransa",
    cut: "dana-bonfile",
    rub: "klasik-dana-rubu",
    sauce: "beurre-blanc",
    method: "Sous Vide",
    doneness: "Medium Rare (54°C — sous vide)",
    equipment: ["Sous vide cihazı", "Vakum makinesi / kilitli poşet", "Döküm tava"],
    ingredients: [
      { item: "Dana bonfile (4cm kalınlık)", amount: "2 adet (200g)" },
      { item: "Klasik Dana Rubu", amount: "1 yemek kaşığı" },
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Taze biberiye", amount: "2 dal" },
      { item: "Sarımsak", amount: "2 diş" },
      { item: "Beurre Blanc sos", amount: "4 yemek kaşığı" },
      { item: "Patates (püre için)", amount: "3 adet" },
      { item: "Süt/krema", amount: "1/2 su bardağı" }
    ],
    instructions: [
      "Sous vide cihazını 54°C'ye ayarlayın, suyun ısınmasını bekleyin",
      "Bonfileleri klasik dana rubu ile hafifçe kaplayın",
      "Vakum poşete biberiye dalı ve ezilmiş sarımsakla birlikte koyun, vakumlayın",
      "54°C'de tam 2 saat sous vide pişirin",
      "Süre dolunca poşetten çıkarın, kağıt havluyla iyice kurulayın (önemli!)",
      "Döküm tavayı çok yüksek ateşte kızdırın",
      "Her yüzünü 1'er dakika tereyağında mühürleyin, basting yapın",
      "5 dk dinlendirin, dilimleyin, Beurre Blanc sos ile servis edin"
    ],
    tips: [
      "Sous vide'de carry-over yoktur — hedef ısı tam pişme ısısıdır",
      "Mühürleme öncesi eti mutlaka kurulayın — ıslak et mühürlenmez",
      "Tava duman tütecek kadar kızgın olmalı, 1 dk'dan fazla pişirmeyin",
      "Patates püresi için patatesleri sütte haşlayın — daha kremamsı olur"
    ],
    tags: ["Fine Dining", "Sous Vide", "Bonfile", "Fransız", "Özel Gün"]
  },
  {
    slug: "smoked-beef-brisket",
    name: "Smoked Beef Brisket",
    icon: "💨",
    shortDescription: "12 saat dumanlanmış dana brisket, BBQ rub ve ev yapımı BBQ sos ile",
    description: "Texas usulü low & slow felsefesiyle 12 saat boyunca meşe odunu dumanında pişirilmiş, BBQ rub ile kaplanmış dana brisket. Dışı koyu kahve-siyah bark kabuğu, içi pembe duman halkası (smoke ring) ile tam bir Amerikan BBQ klasiği. Yanında ev yapımı BBQ sos ve creamy coleslaw.",
    difficulty: "Zor",
    prepTime: 20,
    cookTime: 720,
    restTime: 45,
    totalTime: 785,
    servings: 8,
    origin: "ABD (Texas)",
    cut: "dana-brisket",
    rub: "bbq-rub",
    sauce: "bbq-sos",
    method: "Smoking",
    doneness: "Well Done (93°C — brisket için ideal)",
    equipment: ["Smoker / Tütsüleme fırını", "Meşe odunu / chips", "Et termometresi (problu)", "Folyo (Texas Crutch)"],
    ingredients: [
      { item: "Dana brisket (full packer)", amount: "1 adet (4-5 kg)" },
      { item: "BBQ Rub", amount: "1 su bardağı" },
      { item: "Elma suyu (spritz için)", amount: "1 su bardağı" },
      { item: "BBQ Sos (ev yapımı)", amount: "1 su bardağı" },
      { item: "Beyaz lahana (coleslaw)", amount: "1/2 adet" },
      { item: "Havuç (coleslaw)", amount: "1 adet" },
      { item: "Mayonez", amount: "1/2 su bardağı" }
    ],
    instructions: [
      "Brisket'in fazla yağını alın, 0.5 cm yağ tabakası bırakın (fat cap)",
      "BBQ rub'u etin her tarafına bolca sürün, 2 saat buzdolabında dinlendirin",
      "Smoker'ı 110-120°C'ye ısıtın, meşe odununu ekleyin",
      "Brisket'i yağlı tarafı üste gelecek şekilde smoker'a yerleştirin",
      "İç sıcaklık 70°C'ye gelene kadar (yaklaşık 6 saat) her saat başı elma suyu spritz yapın",
      "70°C'de (stall noktası) eti folyoya sarın (Texas Crutch), 93-96°C olana kadar devam edin",
      "Smoker'dan çıkarın, folyoda 45 dk dinlendirin (havluya sararak Faux Cambro)",
      "Dilim karşıtı liflere dik olarak 0.5 cm kalınlıkta dilimleyin, BBQ sos ile servis edin"
    ],
    tips: [
      "Full packer brisket kullanın — sadece flat kısmı daha çabuk kurur",
      "Stall (70°C'de ısı artışının durması) normaldir — folyoya sarıp devam edin",
      "Problu termometre şart — tahminle brisket yapılmaz",
      "Dinlenme brisket için en kritik adımdır — en az 30 dk, ideal 1 saat"
    ],
    tags: ["BBQ", "Smoking", "Amerikan", "Dana", "Uzun Pişirme", "Davet"]
  },
  {
    slug: "teriyaki-tavuk-kanat",
    name: "Teriyaki Tavuk Kanat",
    icon: "🍗",
    shortDescription: "Teriyaki marine ile tatlı-tuzlu fırın kanat, susam ve taze soğan ile",
    description: "Japon esintili teriyaki marine ile 4 saat dinlendirilmiş, fırında karamelize olmuş çıtır tavuk kanatlar. Soya sosu, mirin ve zencefilin mükemmel dengesi, susam ve taze soğanla taçlanıyor. Kolay, hızlı ve herkesin bayılacağı bir tarif.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 35,
    restTime: 5,
    totalTime: 50,
    servings: 4,
    origin: "Japonya / Füzyon",
    cut: "tavuk-kanat",
    marinade: "teriyaki-marine",
    method: "Fırın",
    doneness: "Well Done (75°C+)",
    equipment: ["Fırın", "Fırın tepsisi", "Yağlı kağıt / tel ızgara"],
    ingredients: [
      { item: "Tavuk kanat (bütün)", amount: "1 kg" },
      { item: "Teriyaki Marine (hazır)", amount: "1 porsiyon" },
      { item: "Susam", amount: "1 yemek kaşığı" },
      { item: "Taze soğan", amount: "2 dal" },
      { item: "Pirinç (buhar pilavı)", amount: "1.5 su bardağı", note: "servis için" },
      { item: "Lime dilimi", amount: "4 adet" }
    ],
    instructions: [
      "Kanatları teriyaki marine ile buzdolabında en az 4 saat marine edin",
      "Fırını 200°C fanlı ayara getirin",
      "Kanatları marinattan çıkarın, fazlasını süzdürün (ama yıkamayın)",
      "Tel ızgara üzerine dizin, fırına verin",
      "15 dk pişirin, çevirin, fırça ile marine sürün",
      "15-20 dk daha pişirin — dışı karamelize, içi 75°C olmalı",
      "Fırından çıkınca üzerine susam serpin, taze soğan doğrayın",
      "Buhar pilavı ve lime dilimi ile sıcak servis edin"
    ],
    tips: [
      "Kanatları tel ızgara üzerinde pişirmek alttan da çıtır olmasını sağlar",
      "Marinadı pişirme sırasında fırça ile sürmek glaze katmanı oluşturur",
      "Fırından çıkmadan son 3 dk grill moduna alırsanız dışı ekstra çıtır olur",
      "Artan marine sosunu 2 dk kaynatıp dipping sos olarak kullanabilirsiniz"
    ],
    tags: ["Asya", "Tavuk", "Fırın", "Kolay", "Hafta içi", "Kanat"]
  },
  {
    slug: "firinda-kuzu-but",
    name: "Fırında Kuzu But",
    icon: "🍖",
    shortDescription: "Yoğurtlu marine ile 6 saat dinlendirilmiş, fırında ağır ağır pişmiş kuzu but",
    description: "Türk mutfağının en görkemli yemeklerinden fırında kuzu but. Yoğurtlu marine ile 6 saat dinlendirilmiş, düşük ısıda 3 saat fırında pişirilmiş, kemikten ayrılacak kadar yumuşak. Sarımsaklı yoğurt sosu ve tereyağlı pilav eşliğinde bayram sofralarının yıldızı.",
    difficulty: "Orta",
    prepTime: 20,
    cookTime: 180,
    restTime: 20,
    totalTime: 220,
    servings: 6,
    origin: "Türkiye",
    cut: "kuzu-but",
    marinade: "yogurtlu-turk-marine",
    sauce: "sarimsakli-yogurt-sosu",
    method: "Fırın",
    doneness: "Medium-Well (68-70°C)",
    equipment: ["Fırın", "Fırın tepsisi", "Folyo", "Et termometresi"],
    ingredients: [
      { item: "Kuzu but (kemikli)", amount: "1 adet (1.5-2 kg)" },
      { item: "Yoğurtlu Türk Marine (hazır)", amount: "1 porsiyon" },
      { item: "Patates (büyük)", amount: "4 adet" },
      { item: "Havuç", amount: "3 adet" },
      { item: "Soğan", amount: "2 adet" },
      { item: "Defne yaprağı", amount: "3 adet" },
      { item: "Sarımsaklı Yoğurt Sosu", amount: "1 su bardağı" },
      { item: "Pirinç pilavı", amount: "servis için" }
    ],
    instructions: [
      "Kuzu budu bıçakla birkaç yerinden delin (marinenin içe işlemesi için)",
      "Hazırlanan yoğurtlu marine ile her tarafını kaplayın, buzdolabında 6 saat bekletin",
      "Fırını 160°C'ye ısıtın",
      "Sebzeleri iri iri doğrayın, fırın tepsisine yayın",
      "Marine edilmiş kuzu budu sebzelerin üzerine yerleştirin",
      "Tepsiyi folyo ile sıkıca kapatın, 2 saat pişirin",
      "Folyoyu açın, fırını 180°C'ye yükseltin, 40 dk daha pişirin (üstü kızarsın)",
      "İç sıcaklık 68°C olduğunda fırından alın, 20 dk folyoda dinlendirin",
      "Dilimleyip sarımsaklı yoğurt ve pilav ile servis edin"
    ],
    tips: [
      "Eti delmek marinenin içe işlemesini sağlar — bıçakla 6-8 yerinden delin",
      "Folyo ilk 2 saat nemi hapseder, etin kurumasını önler",
      "Son 40 dk folyosuz pişirmek dışının kızarmasını sağlar",
      "Fırından çıkan etin suyunu pilava ekleyin — lezzet patlaması"
    ],
    tags: ["Türk Mutfağı", "Kuzu", "Fırın", "Davet", "Bayram"]
  },
  {
    slug: "tava-tavuk-gogsu",
    name: "Tavada Limonlu Tavuk Göğsü",
    icon: "🐔",
    shortDescription: "Limon-sarımsak marine ile 30 dk'da sulu tavuk göğsü, naneli yoğurt ile",
    description: "Kurumaya meyilli tavuk göğsünü limon-sarımsak marine ile 1 saat dinlendirip kısa sürede tavada pişirerek elde edilen sulu ve lezzetli bir sonuç. Naneli yoğurt sosu ferahlık katar, yanında roka salatası ile hafif ama doyurucu bir öğün.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 10,
    restTime: 3,
    totalTime: 23,
    servings: 2,
    origin: "Akdeniz",
    cut: "tavuk-gogsu",
    marinade: "limon-sarimsak-marine",
    sauce: "naneli-yogurt-sosu",
    method: "Tava",
    doneness: "Well Done (74°C — kümes hayvanı)",
    equipment: ["Tava (tercihen ızgara tava)", "Et tokmağı", "Et termometresi"],
    ingredients: [
      { item: "Tavuk göğsü (kelebek kesilmiş)", amount: "2 adet (200g)" },
      { item: "Limon-Sarımsak Marine (hazır)", amount: "1 porsiyon" },
      { item: "Naneli Yoğurt Sosu", amount: "4 yemek kaşığı" },
      { item: "Roka", amount: "2 avuç" },
      { item: "Cherry domates", amount: "10 adet" },
      { item: "Zeytinyağı", amount: "1 yemek kaşığı" }
    ],
    instructions: [
      "Tavuk göğsünü streç film arasında et tokmağıyla eşit kalınlığa getirin",
      "Limon-sarımsak marine ile 1 saat buzdolabında marine edin",
      "Tavayı orta-yüksek ateşte ısıtın, az zeytinyağı ekleyin",
      "Tavukları marinattan çıkarın, fazlasını silkeleyin, tavaya koyun",
      "Her tarafı 4-5 dk pişirin — iç sıcaklık 74°C olmalı",
      "Tavadan alın, 3 dk dinlendirin",
      "Roka ve cherry domatesle tabağa alın, üzerine naneli yoğurt gezdirin"
    ],
    tips: [
      "Tavuk göğsünü eşit kalınlığa getirmek en önemli adım — eşit pişmesini sağlar",
      "Tavuk kurumaya meyillidir — iç sıcaklık 74°C'yi geçmesin",
      "Marine süresi 2 saati aşarsa limon eti 'pişirir' — 1-2 saat idealdir",
      "Izgara tava kullanırsanız görsel olarak daha güzel olur"
    ],
    tags: ["Hafif", "Tavuk", "Sağlıklı", "Hafta içi", "Akdeniz", "Hızlı"]
  },
  {
    slug: "biberiyeli-riploin",
    name: "Biberiyeli Dana Riploin",
    icon: "🌿",
    shortDescription: "Akdeniz ot rubu ve chimichurri ile biberiye ağırlıklı riploin biftek",
    description: "Riploin'in zengin mermerleşmesi, Akdeniz otlarının aromatik rubu ve Arjantin usulü taze chimichurri sosun mükemmel birlikteliği. Döküm tavada mühürlenen bu biftek, biberiye ve sarımsaklı tereyağı ile basting yapılarak restoran kalitesine ulaşıyor.",
    difficulty: "Orta",
    prepTime: 10,
    cookTime: 10,
    restTime: 8,
    totalTime: 28,
    servings: 2,
    origin: "Akdeniz / Arjantin",
    cut: "dana-riploin",
    rub: "akdeniz-ot-rubu",
    sauce: "chimichurri",
    method: "Tava",
    doneness: "Medium Rare (55°C)",
    equipment: ["Döküm tava", "Et termometresi"],
    ingredients: [
      { item: "Dana riploin (3cm kalınlık)", amount: "2 adet (300g)" },
      { item: "Akdeniz Ot Rubu", amount: "2 yemek kaşığı" },
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Biberiye (taze dal)", amount: "2 adet" },
      { item: "Sarımsak (ezilmiş)", amount: "3 diş" },
      { item: "Chimichurri (hazır)", amount: "4 yemek kaşığı" },
      { item: "Izgara kuşkonmaz", amount: "12 adet", note: "servis için" }
    ],
    instructions: [
      "Riploin'i pişirmeden 1 saat önce buzdolabından çıkarın",
      "Akdeniz ot rubu ile bifteğin her tarafını ovun",
      "Döküm tavayı çok yüksek ateşte kızdırın",
      "Bifteği tavaya koyun, ilk tarafı 3 dk mühürleyin",
      "Çevirin, tereyağı, sarımsak ve biberiyeyi ekleyin",
      "2-3 dk basting yaparak pişirin — hedef 55°C",
      "8 dk dinlendirin, dilimleyin, chimichurri ile servis edin"
    ],
    tips: [
      "Riploin antrikottan daha az yağlıdır — medium rare'den fazla pişirmeyin",
      "Biberiye dalını tavada yakmayın — aroma vermesi için basting yeterli",
      "Chimichurri'yi servisten hemen önce ekleyin — sıcak ette solmasın",
      "Kuşkonmazları biftekle aynı tavada 2 dk çevirerek pişirebilirsiniz"
    ],
    tags: ["Steakhouse", "Akdeniz", "Biftek", "Özel Gün"]
  },
  {
    slug: "cajun-tavuk-but",
    name: "Cajun Baharatlı Tavuk But",
    icon: "🍗",
    shortDescription: "Cajun rub ve mavi peynir sosu ile Louisiana esintili fırın tavuk but",
    description: "Louisiana mutfağının ateşli lezzetlerini yansıtan bu tarifte, cajun baharat rubu ile ovulmuş tavuk butları fırında çıtır çıtır pişiriliyor. Yanında gelen soğutulmuş mavi peynir sosu, baharatın ateşini mükemmel dengeliyor. Mısır ekmeği (cornbread) ile tam bir Southern deneyimi.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 40,
    restTime: 5,
    totalTime: 55,
    servings: 4,
    origin: "ABD (Louisiana)",
    cut: "tavuk-but",
    rub: "cajun-rub",
    sauce: "mavi-peynir-sosu",
    method: "Fırın",
    doneness: "Well Done (77°C — but eti için)",
    equipment: ["Fırın", "Fırın tepsisi", "Tel ızgara"],
    ingredients: [
      { item: "Tavuk but (kemikli, derili)", amount: "8 adet" },
      { item: "Cajun Rub", amount: "3 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "2 yemek kaşığı" },
      { item: "Mavi Peynir Sosu (hazır)", amount: "1 su bardağı" },
      { item: "Kereviz sapı", amount: "3 dal", note: "servis için" },
      { item: "Acı sos (Tabasco)", amount: "1 tatlı kaşığı", note: "tercihe bağlı" }
    ],
    instructions: [
      "Tavuk butlarını kağıt havluyla kurulayın (derinin çıtır olması için önemli)",
      "Zeytinyağı sürün, cajun rub ile her tarafını ovun",
      "Fırını 200°C fanlı ayara getirin",
      "Tel ızgara üzerine butları dizin, fırına verin",
      "20 dk pişirin, çevirin, 20 dk daha pişirin (toplam 40 dk)",
      "İç sıcaklık 77°C olduğunda fırından alın",
      "5 dk dinlendirin, kereviz sapı ve mavi peynir sos ile servis edin"
    ],
    tips: [
      "Deriyi kurulamak çıtırlık için en önemli adım — ıslak deri çıtır olmaz",
      "Cajun rub'da tuz olduğu için ekstra tuz eklemeyin",
      "Mavi peynir sosu soğuk servis edilmeli — sıcak tavukla kontrast yaratır",
      "Daha acı seviyorsanız rub'a ekstra cayenne biberi ekleyin"
    ],
    tags: ["Amerikan", "Cajun", "Tavuk", "Fırın", "Baharatlı"]
  },
  {
    slug: "mangal-kuzu-kaburga",
    name: "Mangal Kuzu Kaburga",
    icon: "🔥",
    shortDescription: "Kebapçı marine ile 12 saat dinlendirilmiş mangal kuzu kaburga, tzatziki ile",
    description: "Güneydoğu Anadolu'nun profesyonel kebap ustalarından esinlenen bu tarifte, isotlu ve domatesli kebap marine ile 12 saat dinlendirilen kuzu kaburgalar mangalda ağır ağır pişiriliyor. Yanında serinletici tzatziki, köz patlıcan salatası ve tırnaklı pide ile servis ediliyor.",
    difficulty: "Orta",
    prepTime: 15,
    cookTime: 25,
    restTime: 10,
    totalTime: 50,
    servings: 4,
    origin: "Türkiye (Güneydoğu)",
    cut: "kuzu-kaburga",
    marinade: "kebap-marine",
    sauce: "tzatziki",
    method: "Mangal",
    doneness: "Medium-Well (68-70°C)",
    equipment: ["Mangal", "Mangal maşası", "Fırça"],
    ingredients: [
      { item: "Kuzu kaburga (rack şeklinde)", amount: "2 adet (600-800g)" },
      { item: "Kebapçı Marine (hazır)", amount: "1 porsiyon" },
      { item: "Tzatziki (hazır)", amount: "1 su bardağı" },
      { item: "Patlıcan (köz için)", amount: "2 adet" },
      { item: "Tırnaklı pide", amount: "4 adet" },
      { item: "Sumaklı soğan", amount: "1 adet", note: "servis için" }
    ],
    instructions: [
      "Kaburgaları bir gece önceden kebap marine ile buzdolabında 12 saat marine edin",
      "Pişirmeden 1 saat önce buzdolabından çıkarın",
      "Mangalı yakın, tam köz haline gelene kadar bekleyin",
      "Kaburgaları mangala dizin, marine ile birlikte pişirin",
      "Her yüzü 4-5 dk, arada fırça ile marine sürerek pişirin",
      "Arada patlıcanları közleyin, soyup doğrayın ve zeytinyağı gezdirin",
      "Kaburgaları mangaldan alın, 10 dk folyoda dinlendirin",
      "Kemik aralarından kesip tzatziki, köz patlıcan ve pide ile servis edin"
    ],
    tips: [
      "Kaburganın kemikli tarafını önce pişirin — kemik ısıyı iletir",
      "Marine yağlı olduğu için alevlenmeye dikkat — köz ateşinde pişirin",
      "İsot (Urfa biberi) bu marine'in imzasıdır — değiştirmeyin",
      "Kaburgaları keserken kemik aralarından bıçakla değil, satırla kesin"
    ],
    tags: ["Türk Mutfağı", "Kuzu", "Mangal", "Kebap", "Davet"]
  },
  {
    slug: "kore-bbq-short-ribs",
    name: "Kore BBQ Kısa Kaburga",
    icon: "🇰🇷",
    shortDescription: "Kore usulü karamelize dana short ribs, gochujang glaze ve susam",
    description: "Seul sokaklarından mutfağınıza: Kore BBQ rub ve tatlı-acı gochujang glaze ile kaplanmış dana short ribs. Düdüklüde ön pişirme ile yumuşatılmış, ardından ızgarada karamelize edilmiş. Kimchi, buharda pirinç ve susamlı taze soğan ile otantik bir Kore ziyafeti.",
    difficulty: "Zor",
    prepTime: 15,
    cookTime: 60,
    restTime: 10,
    totalTime: 85,
    servings: 4,
    origin: "Kore",
    cut: "dana-short-ribs",
    rub: "kore-bbq-rub",
    sauce: "gochujang-glaze",
    method: "Düdüklü + Izgara",
    doneness: "Well Done (85°C+ — yumuşayana kadar)",
    equipment: ["Düdüklü tencere", "Izgara / döküm tava", "Fırça"],
    ingredients: [
      { item: "Dana short ribs (kalın kesilmiş)", amount: "1 kg" },
      { item: "Kore BBQ Rub", amount: "3 yemek kaşığı" },
      { item: "Gochujang Glaze (hazır)", amount: "1/2 su bardağı" },
      { item: "Soya sosu", amount: "2 yemek kaşığı" },
      { item: "Susam", amount: "1 yemek kaşığı" },
      { item: "Taze soğan", amount: "3 dal" },
      { item: "Kimchi", amount: "1 su bardağı", note: "servis için" },
      { item: "Pirinç (buğulama)", amount: "2 su bardağı" }
    ],
    instructions: [
      "Short ribs'i Kore BBQ rub ile ovun, 2 saat buzdolabında dinlendirin",
      "Düdüklüye etleri koyun, soya sosu ve 1 su bardağı su ekleyin",
      "30 dk basınçlı pişirin, doğal tahliye ile açın (et kemikten ayrılacak kıvamda)",
      "Izgarayı veya döküm tavayı yüksek ateşte kızdırın",
      "Etleri düdüklüden çıkarın, her iki yüzüne gochujang glaze sürün",
      "Izgarada her yüzü 2 dk karamelize edin",
      "10 dk dinlendirin, susam ve taze soğan serpin",
      "Kimchi ve buharda pirinç ile servis edin"
    ],
    tips: [
      "Düdüklü ön pişirme short ribs gibi sert etler için kurtarıcıdır",
      "Doğal tahliye eti daha yumuşak tutar — hızlı tahliye yapmayın",
      "Gochujang yüksek şeker içerir — ızgarada dikkatli olun, çabuk yanar",
      "Düdüklü suyunu sakın dökmeyin — çorba veya pilav için muhteşem bir baz"
    ],
    tags: ["Kore", "Asya", "BBQ", "Baharatlı", "Özel Gün"]
  },
  {
    slug: "firin-butun-tavuk",
    name: "Fırın Bütün Tavuk",
    icon: "🐓",
    shortDescription: "Şekerli salamurada 12 saat dinlenmiş, fırında altın sarısı bütün tavuk",
    description: "Profesyonel mutfakların sırrı şekerli salamura (brine) ile 12 saat dinlendirilmiş, fırında nar gibi kızarmış bütün tavuk. Salamura sayesinde göğüs eti bile sulu ve lezzetli kalırken, derisi çıtır çıtır oluyor. Sarımsaklı yoğurt sos ve fırın sebzeleriyle eksiksiz bir pazar yemeği.",
    difficulty: "Orta",
    prepTime: 20,
    cookTime: 80,
    restTime: 15,
    totalTime: 115,
    servings: 4,
    origin: "Uluslararası",
    cut: "tavuk-butun",
    marinade: "sekerli-salamura-marine",
    sauce: "sarimsakli-yogurt-sosu",
    method: "Fırın",
    doneness: "Well Done (Göğüs 74°C / But 80°C)",
    equipment: ["Fırın", "Fırın tepsisi", "Et termometresi (problu)", "Fırın ipi (trussing)"],
    ingredients: [
      { item: "Bütün tavuk", amount: "1 adet (1.5-2 kg)" },
      { item: "Şekerli Salamura Marine (hazır)", amount: "1 porsiyon" },
      { item: "Tereyağı (yumuşak)", amount: "50 gr" },
      { item: "Sarımsaklı Yoğurt Sosu", amount: "1 su bardağı" },
      { item: "Patates (küçük boy)", amount: "6 adet" },
      { item: "Havuç", amount: "3 adet" },
      { item: "Limon", amount: "1 adet" },
      { item: "Taze kekik", amount: "5 dal" }
    ],
    instructions: [
      "Tavuğu şekerli salamurda buzdolabında 12 saat bekletin",
      "Salamuradan çıkarın, soğuk suyla durulayın, kağıt havluyla iyice kurulayın",
      "Fırını 200°C'ye ısıtın",
      "Tavuğun deri altına yumuşak tereyağını sürün (göğüs ve but bölgesine)",
      "İçine limon ve kekik dallarını yerleştirin, bacakları iple bağlayın (trussing)",
      "Sebzeleri iri doğrayın, tepsiye yayın, tavuğu üzerine oturtun",
      "Fırına verin: 20 dk 220°C'de, sonra 60 dk 180°C'de pişirin",
      "Göğüs 74°C, but 80°C olunca fırından alın",
      "15 dk folyoda dinlendirin, dilimleyip sarımsaklı yoğurt ile servis edin"
    ],
    tips: [
      "Salamuradan çıkan tavuğu mutlaka durulayın — yoksa tuzlu olur",
      "Deriyi kurulamak çıtırlık için şart — ne kadar kuru o kadar çıtır",
      "Trussing (bağlama) eşit pişirme sağlar — atlamayın",
      "Tavuk dinlenirken iç sıcaklık 5-8°C daha artar — bunu hesaba katın"
    ],
    tags: ["Fırın", "Tavuk", "Pazar Yemeği", "Davet", "Klasik"]
  }
];
