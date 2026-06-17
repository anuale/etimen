export interface Marinade {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  prepTime: number;
  origin: string;
  ingredients: { item: string; amount: string; note?: string }[];
  instructions: string[];
  marinationTime: {
    minHours: number;
    maxHours: number;
    ideal: string;
  };
  bestFor: ("Dana" | "Kuzu" | "Tavuk")[];
  acidBase: string;
  pairings: { cuts: string[]; methods: string[]; occasions: string[] };
  tips: string[];
  storageInfo: string;
}

export const marinades: Marinade[] = [
  {
    slug: "yogurtlu-turk-marine",
    name: "Yoğurtlu Türk Marine",
    icon: "🥛",
    shortDescription: "Türk mutfağının temel marine tekniği - yoğurt, sarımsak, salça",
    description: "Türk mutfağında en yaygın kullanılan marine yöntemi olan yoğurtlu marine, laktik asit sayesinde eti yumuşatır, baharatlarla zenginleşir ve ızgarada harika bir kabuk oluşturur. Özellikle kuzu ve tavuk için idealdir.",
    difficulty: "Kolay",
    prepTime: 10,
    origin: "Türkiye",
    ingredients: [
      { item: "Süzme yoğurt", amount: "1 su bardağı" },
      { item: "Sarımsak (ezilmiş)", amount: "4 diş" },
      { item: "Domates salçası", amount: "1 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "2 yemek kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Pul biber", amount: "1 tatlı kaşığı" },
      { item: "Kekik", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Yoğurdu geniş bir kaseye alın, fazla suyunu süzün",
      "Sarımakları ezin, salça ve zeytinyağını ekleyin",
      "Tüm baharatları ilave edip pürüzsüz olana kadar karıştırın",
      "Etleri bu karışıma bulayın, her tarafını kaplayın",
      "Buzdolabında marine süresi kadar bekletin, ara sıra çevirin",
      "Pişirmeden 30 dk önce buzdolabından çıkarın, oda sıcaklığına gelsin",
      "Fazla marinadı sıyırıp ızgaraya alın"
    ],
    marinationTime: { minHours: 2, maxHours: 24, ideal: "4-8 saat" },
    bestFor: ["Kuzu", "Tavuk"],
    acidBase: "Laktik asit (yoğurt)",
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "kuzu-but", "tavuk-gogsu", "tavuk-but", "tavuk-kanat", "tavuk-butun"],
      methods: ["Izgara", "Fırın", "Tava"],
      occasions: ["Günlük yemekler", "BBQ", "Özel günler"]
    },
    tips: [
      "Yoğurt suyunu süzmezseniz sulanır - süzdürmek önemli",
      "Tavuğu en az 4 saat, kuzuyu en az 6 saat marine edin",
      "Marinattan çıkan eti kağıt havluyla hafif kurulayın, daha iyi mühürlenir",
      "Artan marinadı pişirme sırasında fırça ile sürebilirsiniz"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 3 gün"
  },
  {
    slug: "sogan-suyu-marine",
    name: "Soğan Suyu Marine",
    icon: "🧅",
    shortDescription: "Geleneksel Türk usulü - soğan suyu ile inanılmaz yumuşaklık",
    description: "Nesiller boyu aktarılan geleneksel Anadolu marine tekniği. Rendelenmiş soğanın suyu, doğal enzimleri sayesinde en sert etleri bile olağanüstü yumuşatır. Özellikle kebap yapımında ve mangal öncesi hazırlıkta vazgeçilmezdir.",
    difficulty: "Kolay",
    prepTime: 10,
    origin: "Türkiye (Anadolu)",
    ingredients: [
      { item: "Büyük soğan (rendelenmiş, suyu sıkılmış)", amount: "2 adet" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "Tuz", amount: "1.5 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Pul biber", amount: "1 tatlı kaşığı" },
      { item: "Kimyon", amount: "1 çay kaşığı" },
      { item: "Kekik", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Soğanları rendeleyin, tülbent veya ince süzgeçten suyunu sıkın",
      "Soğan suyunu bir kaseye alın, zeytinyağını ekleyin",
      "Tuz ve tüm baharatları ilave edin, iyice karıştırın",
      "Etleri bu karışıma bulayın, her parçayı kaplayın",
      "Buzdolabında bekletin - soğan enzimleri eti yumuşatır",
      "Pişirmeden önce etleri çıkarın, kağıt havluyla hafif kurulayın"
    ],
    marinationTime: { minHours: 2, maxHours: 12, ideal: "4-6 saat" },
    bestFor: ["Dana", "Kuzu"],
    acidBase: "Doğal enzimler (soğan)",
    pairings: {
      cuts: ["dana-antrikot", "dana-bonfile", "dana-kıyma", "kuzu-pirzola", "kuzu-kol", "kuzu-but", "kuzu-kaburga"],
      methods: ["Izgara", "Mangal", "Tava"],
      occasions: ["Günlük yemekler", "BBQ", "Kebap"]
    },
    tips: [
      "Soğanı mutfak robotunda değil, rende ile rendeleyin - daha çok su çıkar",
      "Fazla bekletirseniz (12 saat+) et dağılabilir - süreyi aşmayın",
      "Sadece soğan suyunu kullanın, posasını atın - posa yanar",
      "Kimyon soğan kokusunu dengeler, mutlaka ekleyin"
    ],
    storageInfo: "Hazırlandıktan sonra 24 saat içinde kullanın"
  },
  {
    slug: "sutlu-marine",
    name: "Sütlü Marine",
    icon: "🥛",
    shortDescription: "Sütün yumuşatıcı gücü - özellikle tavuk ve dana ciğer için",
    description: "Süt bazlı marine, laktik asit ve kalsiyum sayesinde et proteinlerini nazikçe kırarak yumuşatır. Özellikle tavuk göğsü ve dana ciğer gibi kurumaya meyilli etlerde harikalar yaratır. Türk mutfağında klasik bir yöntemdir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Türkiye",
    ingredients: [
      { item: "Tam yağlı süt", amount: "2 su bardağı" },
      { item: "Sarımsak (ezilmiş)", amount: "3 diş" },
      { item: "Defne yaprağı", amount: "2 adet" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Zeytinyağı", amount: "1 yemek kaşığı" }
    ],
    instructions: [
      "Sütü bir kaseye alın, ezilmiş sarımsakları ekleyin",
      "Defne yaprağı, tuz, karabiber ve zeytinyağını ilave edin",
      "Etleri bu karışıma tamamen batırın",
      "Buzdolabında marine süresi kadar bekletin",
      "Pişirmeden önce sütü süzün, kağıt havluyla kurulayın"
    ],
    marinationTime: { minHours: 1, maxHours: 8, ideal: "2-4 saat" },
    bestFor: ["Tavuk", "Dana"],
    acidBase: "Laktik asit (süt)",
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-bonfile", "tavuk-but", "dana-tritip", "dana-chuck"],
      methods: ["Tava", "Fırın", "Izgara"],
      occasions: ["Günlük yemekler", "Hafif yemekler"]
    },
    tips: [
      "Tam yağlı süt kullanın - az yağlı süt aynı etkiyi göstermez",
      "Defne yaprağı süt kokusunu kırar, mutlaka ekleyin",
      "Tavuk göğsü için ideal süre 2 saat - fazlası eti unlu yapabilir",
      "Marinadı çöpe dökün, kesinlikle tekrar kullanmayın"
    ],
    storageInfo: "Buzdolabında 24 saat (taze hazırlayın)"
  },
  {
    slug: "balsamik-marine",
    name: "Balsamik Marine",
    icon: "🍇",
    shortDescription: "İtalyan usulü - balsamik sirke, zeytinyağı ve otlar",
    description: "İtalyan mutfağından gelen bu klasik marine, balsamik sirkenin tatlı asiditesi ve zeytinyağının zenginliği ile etlere derin ve kompleks bir lezzet kazandırır. Özellikle dana eti ve Akdeniz usulü tarifler için idealdir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "İtalya",
    ingredients: [
      { item: "Balsamik sirke", amount: "1/2 su bardağı" },
      { item: "Sızma zeytinyağı", amount: "1/4 su bardağı" },
      { item: "Sarımsak (kıyılmış)", amount: "3 diş" },
      { item: "Taze biberiye (kıyılmış)", amount: "1 yemek kaşığı" },
      { item: "Dijon hardalı", amount: "1 tatlı kaşığı" },
      { item: "Bal", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Balsamik sirke, zeytinyağı ve hardalı bir kasede çırpın",
      "Balı ekleyin, eriyene kadar karıştırın",
      "Sarımak, biberiye, tuz ve karabiberi ilave edin",
      "Etleri bu karışıma bulayın, buzdolabında bekletin",
      "Ara sıra çevirerek her tarafının marine olmasını sağlayın"
    ],
    marinationTime: { minHours: 1, maxHours: 8, ideal: "2-4 saat" },
    bestFor: ["Dana", "Kuzu"],
    acidBase: "Asetik asit (balsamik sirke)",
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-sirloin", "kuzu-pirzola", "kuzu-rack"],
      methods: ["Izgara", "Tava", "Fırın"],
      occasions: ["Özel günler", "Romantik yemek", "Akdeniz"]
    },
    tips: [
      "İyi kalite balsamik sirke kullanın - ucuz sirke çok asidik olur",
      "8 saatten fazla bekletmeyin, sirke eti 'pişirebilir'",
      "Marinadı pişirme sırasında fırça ile sürerek parlak bir glaze elde edin",
      "Taze biberiye yoksa kuru biberiye kullanabilirsiniz (1 tatlı kaşığı)"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 3 gün"
  },
  {
    slug: "teriyaki-marine",
    name: "Teriyaki Marine",
    icon: "🇯🇵",
    shortDescription: "Japon klasiği - soya sosu, mirin, zencefil ve sarımsak",
    description: "Japon mutfağının dünyaya armağanı teriyaki marine, soya sosu, mirin (tatlı pirinç şarabı) ve sake'nin mükemmel uyumuyla etlere parlak, tatlı-tuzlu bir lezzet kazandırır. Özellikle dana ve tavuk için mükemmeldir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Japonya",
    ingredients: [
      { item: "Soya sosu", amount: "1/2 su bardağı" },
      { item: "Mirin (tatlı pirinç şarabı)", amount: "1/4 su bardağı" },
      { item: "Esmer şeker", amount: "2 yemek kaşığı" },
      { item: "Taze zencefil (rendelenmiş)", amount: "1 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "3 diş" },
      { item: "Susam yağı", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Soya sosu, mirin ve esmer şekeri bir tavaya alın",
      "Orta ateşte şeker eriyene kadar karıştırın (kaynatmayın)",
      "Ocaktan alın, rendelenmiş zencefil ve sarımsağı ekleyin",
      "Susam yağını ilave edin, tamamen soğumaya bırakın",
      "Soğuyan karışıma etleri bulayın, buzdolabında bekletin",
      "Etleri marinattan çıkarıp süzün, fazla marinatı saklayın",
      "Pişirirken fırça ile marine sürerek glaze katmanı oluşturun"
    ],
    marinationTime: { minHours: 2, maxHours: 24, ideal: "4-8 saat" },
    bestFor: ["Dana", "Tavuk"],
    acidBase: "Fermente (soya sosu)",
    pairings: {
      cuts: ["dana-antrikot", "dana-bonfile", "dana-flank", "dana-sirloin", "tavuk-gogsu", "tavuk-but", "tavuk-kanat"],
      methods: ["Izgara", "Tava", "Fırın", "Sous Vide"],
      occasions: ["Asya esintili", "Özel günler", "Günlük yemekler"]
    },
    tips: [
      "Mirin yoksa: 1/4 bardak beyaz şarap + 1 yemek kaşığı şeker ile değiştirin",
      "Şekerli olduğu için yüksek ateşte hemen yanabilir - orta ateşte pişirin",
      "Saklanan marinadı sos olarak kullanmadan önce 2 dk kaynatın (gıda güvenliği)",
      "Susam ve taze soğan ile servis edin"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 1 hafta (etsiz)"
  },
  {
    slug: "kebap-marine",
    name: "Kebapçı Marine",
    icon: "🔥",
    shortDescription: "Profesyonel kebapçı usulü - domates, biber, isot ve kuyruk yağı",
    description: "Güneydoğu Anadolu'nun usta kebapçılarının sır gibi sakladığı marine yöntemi. Domates ve biberin doğal asiditesi, isotun isli aroması ve kuyruk yağının zenginliği, ete unutulmaz bir lezzet kazandırır.",
    difficulty: "Orta",
    prepTime: 15,
    origin: "Türkiye (Güneydoğu Anadolu)",
    ingredients: [
      { item: "Domates (rendelenmiş)", amount: "1 adet" },
      { item: "Kapya biber (rendelenmiş)", amount: "1 adet" },
      { item: "Soğan (rendelenmiş, suyu sıkılmış)", amount: "1 adet" },
      { item: "Sarımsak (ezilmiş)", amount: "4 diş" },
      { item: "İsot (Urfa biberi)", amount: "1 yemek kaşığı" },
      { item: "Tuz", amount: "1.5 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Kimyon", amount: "1 çay kaşığı" },
      { item: "Sumak", amount: "1 çay kaşığı" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "Kuyruk yağı (ince doğranmış)", amount: "50 gr", note: "yoksa tereyağı" }
    ],
    instructions: [
      "Domates, kapya biber ve soğanı rendeleyin",
      "Soğan suyunu sıkın, posayı atın",
      "Tüm sebzeleri, sarımsağı ve baharatları bir kasede karıştırın",
      "Zeytinyağını ekleyin, homojen olana kadar karıştırın",
      "Doğranmış kuyruk yağını ilave edin",
      "Etleri bu karışıma bulayın, etin her yerini kaplayın",
      "Buzdolabında en az 6 saat (ideal 12 saat) marine edin"
    ],
    marinationTime: { minHours: 6, maxHours: 24, ideal: "12 saat" },
    bestFor: ["Kuzu", "Dana"],
    acidBase: "Domates ve sumak",
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "kuzu-but", "kuzu-kaburga", "dana-antrikot", "dana-kıyma"],
      methods: ["Mangal", "Izgara", "Şiş"],
      occasions: ["Kebap", "BBQ", "Özel günler"]
    },
    tips: [
      "Kuyruk yağı gerçek lezzet için şart - bulamazsanız tereyağı kullanın",
      "İsot (Urfa biberi) tütsülü tadıyla vazgeçilmez - normal pul biberle değiştirmeyin",
      "Marinat etten sıyrılıp ızgaraya konulmamalı - et marineyle ızgaraya gitsin",
      "Mangalda pişiriyorsanız marine yağlandığı için alevlenmeye dikkat edin"
    ],
    storageInfo: "Buzdolabında 2 gün (etsiz), etle birlikte 24 saat"
  },
  {
    slug: "limon-sarimsak-marine",
    name: "Limon-Sarımsak Marine",
    icon: "🍋",
    shortDescription: "Akdeniz'in klasik ikilisi - limon, sarımsak ve taze otlar",
    description: "Akdeniz mutfağının en temel marine yöntemlerinden biri. Limonun ferahlatıcı asiditesi, sarımsağın keskinliği ve taze otların aroması ile özellikle tavuk ve balık için mükemmel, hafif ve lezzetli bir marine.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Akdeniz",
    ingredients: [
      { item: "Limon suyu (taze sıkılmış)", amount: "3 yemek kaşığı" },
      { item: "Limon kabuğu rendesi", amount: "1 tatlı kaşığı" },
      { item: "Sızma zeytinyağı", amount: "1/4 su bardağı" },
      { item: "Sarımsak (ezilmiş)", amount: "5 diş" },
      { item: "Taze kekik (kıyılmış)", amount: "1 yemek kaşığı" },
      { item: "Taze biberiye (kıyılmış)", amount: "1 çay kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Limon suyu, limon kabuğu rendesi ve zeytinyağını bir kasede karıştırın",
      "Ezilmiş sarımsakları ekleyin",
      "Taze otları, tuz ve karabiberi ilave edin",
      "Etleri bu karışıma bulayın, buzdolabında bekletin",
      "Her 30 dakikada bir çevirin"
    ],
    marinationTime: { minHours: 0.5, maxHours: 4, ideal: "1-2 saat" },
    bestFor: ["Tavuk", "Kuzu"],
    acidBase: "Sitrik asit (limon)",
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "tavuk-kanat", "tavuk-butun", "kuzu-pirzola", "kuzu-kol"],
      methods: ["Izgara", "Fırın", "Tava"],
      occasions: ["Hafif yemekler", "Yaz yemekleri", "Günlük yemekler"]
    },
    tips: [
      "Limon asidi fazla bekletilirse eti 'pişirebilir' - 4 saati aşmayın",
      "Taze sıkılmış limon şart - hazır limon suyu aynı tadı vermez",
      "Tavuk için en ideal marine süresi 1-2 saat",
      "Marinada yağ olmazsa et kurur - zeytinyağını eksiltmeyin"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 1 gün (taze hazırlayın)"
  },
  {
    slug: "bira-marine",
    name: "Bira Marine",
    icon: "🍺",
    shortDescription: "Biranın enzimleriyle yumuşatma - özellikle dana için",
    description: "Bira, içerdiği enzimler ve karbonik asit sayesinde eti doğal yoldan yumuşatan mükemmel bir marine bazıdır. Özellikle dana etinin sert kısımlarında harikalar yaratır ve ızgarada eşsiz bir malt aroması bırakır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Almanya / Belçika",
    ingredients: [
      { item: "Bira (lager veya ale)", amount: "1 şişe (330ml)" },
      { item: "Soya sosu", amount: "3 yemek kaşığı" },
      { item: "Esmer şeker", amount: "2 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "4 diş" },
      { item: "Taze zencefil (rendelenmiş)", amount: "1 tatlı kaşığı" },
      { item: "Hardal", amount: "1 yemek kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Birayı geniş bir kaseye dökün, köpüğünü bekleyin",
      "Soya sosu, esmer şeker ve hardalı ekleyip çırpın",
      "Sarımsak, zencefil ve karabiberi ilave edin",
      "Etleri bu karışıma tamamen batırın",
      "Buzdolabında bekletin, ara sıra çevirin"
    ],
    marinationTime: { minHours: 2, maxHours: 12, ideal: "4-6 saat" },
    bestFor: ["Dana", "Kuzu"],
    acidBase: "Karbonik asit (bira)",
    pairings: {
      cuts: ["dana-antrikot", "dana-riploin", "dana-flank", "dana-chuck", "dana-sirloin", "kuzu-kol", "kuzu-kaburga"],
      methods: ["Izgara", "Mangal", "Fırın"],
      occasions: ["BBQ", "Erkek yemekleri", "Maç günü"]
    },
    tips: [
      "Koyu bira (stout/porter) daha yoğun lezzet verir, lager daha hafif",
      "Alkol pişerken uçar, sadece lezzet kalır",
      "Birayı blendera koyup sarımsakla karıştırırsanız daha iyi nüfuz eder",
      "Pişirme sırasında marine sıvısından fırça ile sürebilirsiniz"
    ],
    storageInfo: "Buzdolabında 1 gün (etsiz), etle birlikte 12 saat"
  },
  {
    slug: "sirke-marine",
    name: "Sirke Marine (Adobo Tarzı)",
    icon: "🧪",
    shortDescription: "Asidik güç - sirke, sarımsak ve defne ile klasik marine",
    description: "Filipinler'den İspanya'ya, Latin Amerika'dan Anadolu'ya kadar dünyanın dört bir yanında kullanılan sirke bazlı marine, eti hem yumuşatır hem de doğal yoldan korur. Salamura etkisiyle ete derin ve karakteristik bir tat verir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "İspanya / Filipinler / Türkiye",
    ingredients: [
      { item: "Elma sirkesi", amount: "1/2 su bardağı" },
      { item: "Soya sosu", amount: "1/4 su bardağı" },
      { item: "Sarımsak (bütün, ezilmiş)", amount: "6 diş" },
      { item: "Defne yaprağı", amount: "3 adet" },
      { item: "Tane karabiber", amount: "1 tatlı kaşığı" },
      { item: "Esmer şeker", amount: "1 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "2 yemek kaşığı" }
    ],
    instructions: [
      "Elma sirkesi ve soya sosunu bir kasede karıştırın",
      "Ezilmiş sarımsak, defne ve tane karabiberi ekleyin",
      "Esmer şekeri ilave edin, eriyene kadar karıştırın",
      "Zeytinyağını ekleyin",
      "Etleri bu karışıma bulayın, buzdolabında bekletin"
    ],
    marinationTime: { minHours: 4, maxHours: 24, ideal: "8-12 saat" },
    bestFor: ["Dana", "Kuzu", "Tavuk"],
    acidBase: "Asetik asit (sirke)",
    pairings: {
      cuts: ["dana-brisket", "dana-chuck", "dana-flank", "kuzu-kol", "kuzu-incik", "tavuk-but", "tavuk-kanat"],
      methods: ["Fırın", "Yavaş pişirme", "Izgara", "Mangal"],
      occasions: ["BBQ", "Günlük yemekler", "Latin yemekleri"]
    },
    tips: [
      "Elma sirkesi en dengeli asiditeyi verir - üzüm sirkesi de kullanılabilir",
      "Sirke uzun süre bekletilirse eti 'pişirmez' - güvenle 24 saat marine edebilirsiniz",
      "Defne yaprağını kırarak ekleyin - aroması daha iyi çıkar",
      "Tane karabiber, toz biberden daha derin bir aroma verir"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 1 hafta (etsiz)"
  },
  {
    slug: "nar-eksili-marine",
    name: "Nar Ekşili Marine",
    icon: "🍎",
    shortDescription: "Anadolu klasiği - nar ekşisi, isot ve zeytinyağı",
    description: "Güneydoğu Anadolu mutfağının eşsiz lezzeti nar ekşisi, tatlı-ekşi dengesiyle etlere hem yumuşaklık hem de karakteristik bir tat kazandırır. Özellikle kuzu etiyle ve salatalarda kullanıldığında mükemmel sonuç verir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Türkiye (Güneydoğu)",
    ingredients: [
      { item: "Nar ekşisi", amount: "1/4 su bardağı" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "3 diş" },
      { item: "Sumak", amount: "1 tatlı kaşığı" },
      { item: "İsot (Urfa biberi)", amount: "1 tatlı kaşığı" },
      { item: "Kuru nane", amount: "1 çay kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Nar ekşisi ve zeytinyağını bir kasede çırpın",
      "Ezilmiş sarımsak, sumak ve isotu ekleyin",
      "Kuru nane ve tuzu ilave edip karıştırın",
      "Etleri bu karışıma bulayın, her tarafını kaplayın",
      "Buzdolabında marine süresi kadar bekletin"
    ],
    marinationTime: { minHours: 2, maxHours: 12, ideal: "3-6 saat" },
    bestFor: ["Kuzu", "Tavuk", "Dana"],
    acidBase: "Nar ekşisi (doğal asit)",
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "kuzu-kaburga", "tavuk-gogsu", "tavuk-but", "dana-kıyma"],
      methods: ["Izgara", "Mangal", "Tava", "Fırın"],
      occasions: ["Özel günler", "BBQ", "Türk yemekleri"]
    },
    tips: [
      "Gerçek nar ekşisi kullanın - nar aromalı sos değil",
      "Nar ekşisi şekerli olduğu için yüksek ateşte karamelize olur, güzel kabuk yapar",
      "Marinadı pişirme sonrası salata sosu olarak da kullanabilirsiniz",
      "Sumak nar ekşisinin asiditesini tamamlar, mutlaka ekleyin"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 3 gün (etsiz)"
  },
  {
    slug: "hardal-marine",
    name: "Hardal Marine",
    icon: "🟡",
    shortDescription: "Dijon hardalı ile eti kaplayan klasik Fransız marine",
    description: "Fransız mutfağından gelen hardal bazlı marine, hardalın doğal yapışkanlığı sayesinde ete mükemmel tutunur ve pişerken harika bir kabuk oluşturur. Özellikle dana biftek ve kuzu pirzola için sık tercih edilir.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Fransa",
    ingredients: [
      { item: "Dijon hardalı", amount: "3 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "2 yemek kaşığı" },
      { item: "Beyaz şarap sirkesi", amount: "1 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "3 diş" },
      { item: "Taze kekik (kıyılmış)", amount: "1 yemek kaşığı" },
      { item: "Taze biberiye (kıyılmış)", amount: "1 çay kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Bal", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Dijon hardalı, zeytinyağı ve sirkeyi bir kasede karıştırın",
      "Ezilmiş sarımsak, kekik, biberiye ve karabiberi ekleyin",
      "Bal ve tuzu ilave edin, pürüzsüz olana kadar karıştırın",
      "Etleri bu karışımla her tarafını kaplayacak şekilde sıvayın",
      "Buzdolabında marine süresi kadar bekletin",
      "Pişirmeden önce fazla hardalı sıyırmayın - pişerken kabuk oluşturur"
    ],
    marinationTime: { minHours: 1, maxHours: 8, ideal: "2-4 saat" },
    bestFor: ["Dana", "Kuzu"],
    acidBase: "Asetik asit (sirke) + hardal enzimleri",
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-sirloin", "kuzu-pirzola", "kuzu-rack"],
      methods: ["Tava", "Izgara", "Fırın"],
      occasions: ["Özel günler", "Steakhouse", "Fransız yemekleri"]
    },
    tips: [
      "Dijon hardalı kullanın - sarı Amerikan hardalı çok hafif kalır",
      "Hardal pişerken acılığını kaybeder, korkmayın",
      "Biftek için marine süresini 2 saatle sınırlayın - etin kendi tadı kaybolmasın",
      "Pişirme sonrası tane hardal ve krema ile sos yapabilirsiniz"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 1 hafta (etsiz)"
  },
  {
    slug: "kola-marine",
    name: "Kola Marine",
    icon: "🥤",
    shortDescription: "Kolanın asidi ve şekeriyle eti karamelize eden sıradışı marine",
    description: "Güney ABD'nin BBQ geleneğinden gelen bu sıradışı marine yöntemi, kolanın fosforik asidi sayesinde eti yumuşatırken, şekeri pişirme sırasında karamelize olarak eşsiz bir tatlı-ekşi kabuk oluşturur. Özellikle brisket ve kaburga için harikadır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "ABD (Güney)",
    ingredients: [
      { item: "Kola (normal, diyet değil)", amount: "1 kutu (330ml)" },
      { item: "Soya sosu", amount: "1/4 su bardağı" },
      { item: "Elma sirkesi", amount: "2 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Soğan tozu", amount: "1 tatlı kaşığı" },
      { item: "Tütsülenmiş paprika", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" }
    ],
    instructions: [
      "Kolayı bir kaseye dökün, gazının çıkmasını bekleyin",
      "Soya sosu ve elma sirkesini ekleyin",
      "Tüm kuru baharatları ilave edin, karıştırın",
      "Etleri bu karışıma bulayın, tamamen batırın",
      "Buzdolabında bekletin, ara sıra çevirin",
      "Pişirmeden önce eti marinattan çıkarıp kağıt havluyla kurulayın"
    ],
    marinationTime: { minHours: 4, maxHours: 24, ideal: "8-12 saat" },
    bestFor: ["Dana", "Kuzu"],
    acidBase: "Fosforik asit (kola)",
    pairings: {
      cuts: ["dana-brisket", "dana-short-ribs", "dana-chuck", "kuzu-kaburga", "kuzu-kol"],
      methods: ["Yavaş pişirme", "Smoking", "Fırın", "Mangal"],
      occasions: ["BBQ", "Amerikan yemekleri", "Maç günü"]
    },
    tips: [
      "Diyet kola kullanmayın - şeker karamelizasyon için şart",
      "Fosforik asit güçlüdür, 24 saati aşmayın",
      "Kola marine ile pişen etin rengi koyulaşır - normaldir",
      "Yavaş pişirme (low & slow) ile en iyi sonucu verir"
    ],
    storageInfo: "Buzdolabında 2 gün (etsiz), etle birlikte 24 saat"
  },
  {
    slug: "kiwi-marine",
    name: "Kivi Marine",
    icon: "🥝",
    shortDescription: "Kivi enzimiyle 30 dakikada yumuşatma - hızlı ve etkili",
    description: "Kivi, içerdiği aktinidin enzimi sayesinde proteinleri parçalayarak eti hızlıca yumuşatır. Diğer marine yöntemlerinden farklı olarak sadece 20-30 dakika yeterlidir. Acil durumlar ve sert etler için kurtarıcıdır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Yeni Zelanda / Asya",
    ingredients: [
      { item: "Olgun kivi (püre halinde)", amount: "1 adet" },
      { item: "Zeytinyağı", amount: "2 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "2 diş" },
      { item: "Soya sosu", amount: "1 yemek kaşığı" },
      { item: "Bal", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Tuz", amount: "pişirme öncesi ekleyin" }
    ],
    instructions: [
      "Kiviyi soyun, çatal veya blender ile püre haline getirin",
      "Zeytinyağı, soya sosu ve balı ekleyin",
      "Ezilmiş sarımsak ve karabiberi ilave edin, karıştırın",
      "Etleri bu karışıma bulayın, her tarafını kaplayın",
      "Oda sıcaklığında en fazla 30 dakika bekletin",
      "Süre dolunca eti hemen çıkarın, kağıt havluyla kurulayın",
      "Pişirmeden hemen önce tuzlayın"
    ],
    marinationTime: { minHours: 0.25, maxHours: 0.5, ideal: "20-30 dakika" },
    bestFor: ["Dana", "Tavuk"],
    acidBase: "Aktinidin enzimi (kivi)",
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-flank", "tavuk-gogsu", "tavuk-bonfile"],
      methods: ["Tava", "Izgara"],
      occasions: ["Acil yemekler", "Günlük yemekler"]
    },
    tips: [
      "30 dakikadan fazla bekletmeyin - et dağılır, unlu olur",
      "Tuzu en son ekleyin - tuzla birlikte marine ederseniz etin suyu çekilir",
      "Kivi marine edilmiş eti düşük-orta ateşte pişirin - yüzeyi çabuk yanar",
      "Ananas, papaya ve incir de benzer enzimlere sahiptir, alternatif olabilir"
    ],
    storageInfo: "Taze hazırlanmalı, bekletilmez"
  },
  {
    slug: "sekerli-salamura-marine",
    name: "Şekerli Salamura Marine",
    icon: "🧂",
    shortDescription: "Şeker-tuz dengesiyle eti 24 saatte mükemmelleştiren marine",
    description: "Profesyonel mutfaklarda kullanılan bilimsel bir yöntem: Tuz ve şeker dengesiyle oluşturulan salamura (brine), osmoz yoluyla etin içine işler, su tutma kapasitesini artırır ve pişirme sırasında kurumayı önler. Özellikle hindi ve tavuk için kusursuzdur.",
    difficulty: "Orta",
    prepTime: 10,
    origin: "Profesyonel mutfak",
    ingredients: [
      { item: "Su", amount: "1 litre" },
      { item: "Kaya tuzu", amount: "1/4 su bardağı (60g)" },
      { item: "Esmer şeker", amount: "1/4 su bardağı (50g)" },
      { item: "Defne yaprağı", amount: "3 adet" },
      { item: "Tane karabiber", amount: "1 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "5 diş" },
      { item: "Taze kekik", amount: "5 dal" },
      { item: "Limon dilimi", amount: "3 dilim" }
    ],
    instructions: [
      "Suyu bir tencerede ısıtın (kaynatmayın)",
      "Tuz ve şekeri ekleyin, tamamen eriyene kadar karıştırın",
      "Defne, tane karabiber, sarımsak, kekik ve limonu ilave edin",
      "Ocaktan alın, tamamen soğumaya bırakın",
      "Tamamen soğuyunca etleri salamuranın içine yerleştirin",
      "Buzdolabında süre kadar bekletin",
      "Pişirmeden önce eti çıkarın, durulayın, kurulayın"
    ],
    marinationTime: { minHours: 4, maxHours: 48, ideal: "12-24 saat" },
    bestFor: ["Tavuk", "Dana"],
    acidBase: "Yok (salamura - tuz bazlı)",
    pairings: {
      cuts: ["tavuk-butun", "tavuk-gogsu", "tavuk-but", "dana-chuck", "dana-brisket"],
      methods: ["Fırın", "Izgara", "Yavaş pişirme"],
      occasions: ["Özel günler", "Şükran Günü tarzı", "Büyük davetler"]
    },
    tips: [
      "Salamura suyu tamamen soğumalı - sıcak su ete bakteri üretir",
      "Ağırlık oranı: %5-8 tuz ideal - daha fazlası çok tuzlu yapar",
      "Salamuradan çıkan eti mutlaka durulayın, yoksa çok tuzlu olur",
      "Salamura edilmiş et pişerken daha az su kaybeder, daha sulu kalır"
    ],
    storageInfo: "Salamura suyu buzdolabında 3 gün (etsiz)"
  },
  {
    slug: "anadolu-baharat-marine",
    name: "Anadolu Baharat Marine",
    icon: "🌶️",
    shortDescription: "Yedi bölgeden yedi baharat - Anadolu'nun tüm lezzetleri",
    description: "Anadolu'nun dört bir yanından toplanan yedi temel baharatın mükemmel uyumuyla hazırlanan bu marine, özellikle kuzu ve dana kıymadan yapılan kebaplar, köfteler ve ızgara etler için eşsiz bir lezzet bombasıdır.",
    difficulty: "Kolay",
    prepTime: 10,
    origin: "Türkiye (Anadolu)",
    ingredients: [
      { item: "Yoğurt", amount: "1/2 su bardağı" },
      { item: "Domates salçası", amount: "1 yemek kaşığı" },
      { item: "Biber salçası", amount: "1 yemek kaşığı" },
      { item: "Sarımsak (ezilmiş)", amount: "5 diş" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "İsot (Urfa biberi)", amount: "1 yemek kaşığı" },
      { item: "Kimyon", amount: "1 tatlı kaşığı" },
      { item: "Sumak", amount: "1 tatlı kaşığı" },
      { item: "Kuru nane", amount: "1 çay kaşığı" },
      { item: "Kekik", amount: "1 çay kaşığı" },
      { item: "Karabiber", amount: "1 çay kaşığı" },
      { item: "Yenibahar", amount: "1/2 çay kaşığı" },
      { item: "Tuz", amount: "1.5 tatlı kaşığı" }
    ],
    instructions: [
      "Yoğurdu süzün, bir kaseye alın",
      "Domates ve biber salçasını ekleyin, karıştırın",
      "Ezilmiş sarımsak ve zeytinyağını ilave edin",
      "Tüm baharatları teker teker ekleyin",
      "Hepsini iyice karıştırıp homojen bir karışım elde edin",
      "Etleri bu karışıma bulayın, her tarafını kaplayın",
      "Buzdolabında marine süresi kadar bekletin"
    ],
    marinationTime: { minHours: 3, maxHours: 24, ideal: "6-8 saat" },
    bestFor: ["Kuzu", "Dana"],
    acidBase: "Laktik asit (yoğurt) + domates",
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "kuzu-kaburga", "dana-kıyma", "dana-antrikot", "dana-chuck"],
      methods: ["Izgara", "Mangal", "Şiş", "Fırın"],
      occasions: ["Kebap", "BBQ", "Türk yemekleri", "Özel günler"]
    },
    tips: [
      "Baharatları taze çekilmiş kullanın - toz baharatlar aromasını kaybeder",
      "Salçalar marine'e hem renk hem derinlik katar, eksiltmeyin",
      "Kıyma yemeklerinde marine karışımını doğrudan kıymaya yedirin",
      "Yenibahar az miktarda kullanılmalı - baskın olmamalı"
    ],
    storageInfo: "Buzdolabında hava geçirmez kapta 2 gün (etsiz)"
  }
];
