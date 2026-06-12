export interface Rub {
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
  tips: string[];
  pairings: { cuts: string[]; methods: string[]; occasions: string[] };
  storageInfo: string;
}

export const rubs: Rub[] = [
  {
    slug: "klasik-dana-rubu",
    name: "Klasik Dana Rubu",
    icon: "🥩",
    shortDescription: "Tuz, karabiber, sarımsak - her bifteğe yakışır temel rub",
    description: "Her mutfakta bulunan malzemelerle hazırlanan bu klasik dan rubu, tuz, karabiber, sarımsak tozu ve soğan tozunun mükemmel dengesiyle her türlü biftek, antrikot ve bonfileye lezzet katan temel bir baharat karışımıdır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "Amerika",
    ingredients: [
      { item: "Kaya tuzu (iri taneli)", amount: "2 yemek kaşığı" },
      { item: "Taze çekilmiş karabiber", amount: "1 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Soğan tozu", amount: "1 tatlı kaşığı" },
      { item: "Kırmızı pul biber", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kaseye alın",
      "İyice karıştırın",
      "Hava geçirmez bir kavanoza aktarın"
    ],
    tips: [
      "Pişirmeden 1 saat önce ete sürün, buzdolabında bekletin",
      "Tuz etin yüzeyinde kalmalı - çok derine işlemez",
      "Antrikot ve bonfile için idealdir",
      "Taze çekilmiş karabiber kullanın - toz biber değil"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "dana-sirloin", "dana-t-bone", "dana-flank"],
      methods: ["Izgara", "Tava", "Fırın", "Sous Vide"],
      occasions: ["Günlük yemekler", "Steakhouse", "BBQ"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "steak-rubu",
    name: "Steakhouse Rubu",
    icon: "🔥",
    shortDescription: "Steakhouse'ların gizli karışımı - kahve, kakao, esmer şeker",
    description: "Profesyonel steakhouse'ların sık kullandığı bu eşsiz rub, kahve, kakao ve esmer şeker ile hazırlanan, bifteklere derin ve karamelize bir kabuk kazandıran sıradışı bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Amerika (Chicago)",
    ingredients: [
      { item: "Esmer şeker", amount: "2 yemek kaşığı" },
      { item: "Öğütülmüş kahve", amount: "1 yemek kaşığı" },
      { item: "Kakao tozu", amount: "1 tatlı kaşığı" },
      { item: "Kaya tuzu (iri)", amount: "1 yemek kaşığı" },
      { item: "Taze çekilmiş karabiber", amount: "1 tatlı kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Isli paprika", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm kuru malzemeleri bir kaseye alın",
      "İyice karıştırın",
      "Hava geçirmez kavanozda saklayın"
    ],
    tips: [
      "Pişirmeden 30-45 dk önce ete sürün",
      "Sous vide + tava mührü için mükemmeldir",
      "Kahve ve kakao yanmaz, karamelize olur",
      "Kalın kesim bifteklerde en iyi sonucu verir"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "dana-t-bone", "dana-sirloin"],
      methods: ["Izgara", "Tava", "Fırın", "Sous Vide"],
      occasions: ["Özel günler", "Steakhouse gecesi", "BBQ"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 3 ay"
  },
  {
    slug: "turk-baharat-rubu",
    name: "Türk Baharat Rubu",
    icon: "🌶️",
    shortDescription: "Kırmızı biber, isot, kekik, sumak - kebap ruhu",
    description: "Türk mutfağının zengin baharat kültüründen ilham alan bu rub, kırmızı biber, isot, kekik, sumak ve kimyon ile hazırlanan, kebaplar ve ızgara etler için ideal bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "Türkiye",
    ingredients: [
      { item: "Kırmızı toz biber", amount: "1 yemek kaşığı" },
      { item: "İsot (veya pul biber)", amount: "1 yemek kaşığı" },
      { item: "Kurutulmuş kekik", amount: "1 yemek kaşığı" },
      { item: "Sumak", amount: "1 tatlı kaşığı" },
      { item: "Kimyon", amount: "1 tatlı kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm baharatları bir kasede birleştirin",
      "İyice harmanlayın",
      "Hava geçirmez kavanozda saklayın"
    ],
    tips: [
      "Kuzu şiş, Adana ve tavuk şiş için idealdir",
      "Pişirmeden 2-4 saat önce uygulayın",
      "Isot acısı, sumak ekşiliği dengeler",
      "Zeytinyağı ile macun kıvamına getirip sürebilirsiniz"
    ],
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "kuzu-but", "dana-kıyma", "tavuk-but", "kuzu-incik"],
      methods: ["Izgara", "Şiş", "Fırın", "Mangal"],
      occasions: ["Türk mutfağı", "Kebap gecesi", "BBQ"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "bbq-rubu",
    name: "BBQ Rub (Tatlı Dumanlı)",
    icon: "💨",
    shortDescription: "Esmer şeker, paprika, sarımsak - smoke house klasiği",
    description: "Amerikan güney mutfağının kalbi olan BBQ rub, esmer şeker, ısli paprika, sarımsak ve hardal tozu ile hazırlanan, brisket ve kaburga gibi yavaş pişen etlerde karamelize kabuk (bark) oluşturan klasik bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Amerika (Güney)",
    ingredients: [
      { item: "Esmer şeker", amount: "1/2 su bardağı" },
      { item: "Isli paprika", amount: "2 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 yemek kaşığı" },
      { item: "Soğan tozu", amount: "1 yemek kaşığı" },
      { item: "Hardal tozu", amount: "1 tatlı kaşığı" },
      { item: "Kekik", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Cayenne biberi", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kasede birleştirin",
      "İyice harmanlayın",
      "Hava geçirmez kavanozda saklayın"
    ],
    tips: [
      "Brisket, kaburga ve kol için ideal",
      "Bol miktarda sürün - kalın bir tabaka olmalı",
      "Smoking öncesi 8-12 saat bekletin",
      "Esmer şeker sayesinde mükemmel kabuk (bark) oluşur"
    ],
    pairings: {
      cuts: ["dana-brisket", "dana-short-ribs", "dana-chuck", "kuzu-kaburga", "tavuk-but"],
      methods: ["Smoking", "Fırın", "Braising", "Izgara (düşük)"],
      occasions: ["BBQ partileri", "Texas usulü", "Yavaş pişirme"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 3 ay"
  },
  {
    slug: "akdeniz-rubu",
    name: "Akdeniz Ot Rubu",
    icon: "🌿",
    shortDescription: "Kekik, biberiye, limon, zeytinyağı - Ege lezzeti",
    description: "Akdeniz mutfağının aromatik otlarından ilham alan bu rub, kekik, biberiye, limon kabuğu ve sarımsak ile hazırlanan, özellikle kuzu ve tavuk için ideal hafif bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Ege / Akdeniz",
    ingredients: [
      { item: "Kurutulmuş kekik", amount: "1 yemek kaşığı" },
      { item: "Kurutulmuş biberiye", amount: "1 yemek kaşığı", note: "Havanda dövülmüş" },
      { item: "Kurutulmuş fesleğen", amount: "1 tatlı kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Limon kabuğu (kurutulmuş)", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Pul biber", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Malzemeleri bir kasede birleştirin",
      "Zeytinyağı ile karıştırarak macun yapın",
      "Ete sürün ve 2-4 saat dinlendirin"
    ],
    tips: [
      "Kuzu pirzola ve tavuk but için idealdir",
      "Zeytinyağı ile macun kıvamına getirin",
      "Marine olarak da kullanın (2-6 saat)",
      "Serviste taze limon sıkın"
    ],
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-but", "tavuk-gogsu", "tavuk-but", "kuzu-rack", "dana-sirloin"],
      methods: ["Izgara", "Fırın", "Şiş"],
      occasions: ["Akdeniz yemekleri", "Yaz sofraları", "Ege mutfağı"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "javyan-rubu",
    name: "Cajun Blackened Rub",
    icon: "⚫",
    shortDescription: "Louisiana usulü - siyah kabuk, yoğun baharat",
    description: "Cajun mutfağının ikonik blackened tekniği için özel hazırlanmış bu rub, paprika, cayenne, kekik ve sarımsak ile hazırlanan, aşırı yüksek ısıda siyah bir kabuk oluşturan güçlü bir baharat karışımıdır.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Amerika (Louisiana)",
    ingredients: [
      { item: "Paprika", amount: "2 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 yemek kaşığı" },
      { item: "Soğan tozu", amount: "1 yemek kaşığı" },
      { item: "Kekik (kuru)", amount: "1 yemek kaşığı" },
      { item: "Cayenne biberi", amount: "1-2 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Frenk kimyonu", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kasede birleştirin",
      "İyice harmanlayın",
      "Hava geçirmez kavanozda saklayın"
    ],
    tips: [
      "Tavayı duman noktasına kadar ısıtın",
      "Ete bol rub sürün - beyaz et görünmemeli",
      "Dökme demir tavada yapın - blackening için ideal",
      "Mutlaka havalandırma açın - duman çıkar"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "dana-sirloin", "dana-flank", "kuzu-pirzola"],
      methods: ["Tava (dökme demir)", "Izgara", "Blackening"],
      occasions: ["Cajun mutfağı", "Baharatlı sevenler", "Özel yemekler"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "kore-bbq-rubu",
    name: "Kore BBQ Rubu",
    icon: "🥢",
    shortDescription: "Gochujang, susam, sarımsak - Kore usulü",
    description: "Kore mutfağının lezzetlerini bir rubta toplayan bu karışım, gochujang (Kore acı biber ezmesi), susam ve sarımsak ile hazırlanan, özellikle kısa kaburga (galbi) ve kanatlar için ideal bir rubdur.",
    difficulty: "Kolay",
    prepTime: 5,
    origin: "Kore",
    ingredients: [
      { item: "Gochujang (Kore biber ezmesi)", amount: "2 yemek kaşığı" },
      { item: "Susam yağı", amount: "1 yemek kaşığı" },
      { item: "Soya sosu", amount: "1 yemek kaşığı" },
      { item: "Esmer şeker", amount: "1 yemek kaşığı" },
      { item: "Sarımsak", amount: "3 diş", note: "Ezilmiş" },
      { item: "Taze zencefil", amount: "1 tatlı kaşığı", note: "Rendelenmiş" },
      { item: "Susam", amount: "1 tatlı kaşığı", note: "Kavrulmuş" }
    ],
    instructions: [
      "Tüm malzemeleri bir kasede karıştırın",
      "Macun kıvamına gelene kadar karıştırın",
      "Ete sürün ve 2-4 saat buzdolabında dinlendirin"
    ],
    tips: [
      "Kısa kaburga (galbi) ve tavuk kanat için idealdir",
      "Pişerken son 5 dakika fırça ile tekrar sürün",
      "Izgara veya fırında karamelize olana kadar pişirin",
      "Artan rub buzdolabında 1 hafta saklanır"
    ],
    pairings: {
      cuts: ["dana-short-ribs", "tavuk-kanat", "tavuk-but", "dana-riploin"],
      methods: ["Izgara", "Fırın", "Kore BBQ"],
      occasions: ["Kore mutfağı", "BBQ", "Asya geceleri"]
    },
    storageInfo: "Buzdolabında 1 hafta (ıslak rub)"
  },
  {
    slug: "kirmizi-et-rubu",
    name: "Kırmızı Et Spesiyal Rubu",
    icon: "🥩",
    shortDescription: "Hardal, biberiye, karabiber - klasik biftek karışımı",
    description: "Özellikle kalın kesim biftekler için formüle edilen bu rub, hardal tozu, biberiye, karabiber ve esmer şekerin mükemmel dengesiyle etin doğal lezzetini ön plana çıkaran klasik bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "Fransa / Amerika füzyon",
    ingredients: [
      { item: "Taze çekilmiş karabiber", amount: "2 yemek kaşığı" },
      { item: "Hardal tozu", amount: "1 yemek kaşığı" },
      { item: "Kurutulmuş biberiye", amount: "1 yemek kaşığı", note: "Havanda dövülmüş" },
      { item: "Esmer şeker", amount: "1 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Kaya tuzu (iri)", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kaseye alın",
      "İyice karıştırın",
      "Pişirmeden 30-45 dk önce ete sürün"
    ],
    tips: [
      "T-bone, porterhouse ve antrikot için idealdir",
      "Taze çekilmiş karabiber kullanın",
      "Hardal tozu etin yüzeyinde ince kabuk oluşturur",
      "Sous vide + tava kombosu için mükemmel"
    ],
    pairings: {
      cuts: ["dana-antrikot", "dana-t-bone", "dana-riploin", "dana-sirloin", "dana-bonfile"],
      methods: ["Izgara", "Tava", "Sous Vide", "Fırın"],
      occasions: ["Steakhouse", "Özel akşamlar", "BBQ"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "limon-biberiye-tavuk-rubu",
    name: "Limon Biberiye Tavuk Rubu",
    icon: "🍗",
    shortDescription: "Limon, biberiye, sarımsak - tavuk için özel",
    description: "Tavuk eti için özel olarak formüle edilmiş bu rub, limon kabuğu, biberiye, sarımsak ve kekik ile hazırlanan, tavuğa Akdeniz usulü ferah bir lezzet katan ideal bir karışımdır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "Akdeniz",
    ingredients: [
      { item: "Kurutulmuş biberiye", amount: "1 yemek kaşığı", note: "Havanda dövülmüş" },
      { item: "Kurutulmuş kekik", amount: "1 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Limon kabuğu (kurutulmuş)", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Kırmızı toz biber", amount: "1/2 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kasede birleştirin",
      "İyice harmanlayın",
      "Zeytinyağı ile karıştırıp ete sürün"
    ],
    tips: [
      "Bütün tavuk, göğüs ve but için idealdir",
      "Pişirmeden 2-4 saat önce uygulayın",
      "Zeytinyağı ile macun yapın - deri altına da sürün",
      "Fırında bütün tavuk için 1-2 saat önceden hazırlayın"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "tavuk-butun", "tavuk-kanat"],
      methods: ["Fırın", "Izgara", "Tava"],
      occasions: ["Akdeniz yemekleri", "Pazar tavuğu", "Sağlıklı beslenme"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  },
  {
    slug: "kuzu-spesiyal-rubu",
    name: "Kuzu Spesiyal Rubu",
    icon: "🐑",
    shortDescription: "Kekik, sarımsak, sumak - kuzu için özel",
    description: "Kuzu etinin kendine özgü lezzetini tamamlamak için özel olarak hazırlanan bu rub, kekik, sarımsak, sumak ve nane ile hazırlanan, kuzu pirzola ve but için ideal bir baharat karışımıdır.",
    difficulty: "Kolay",
    prepTime: 3,
    origin: "Türkiye / Yunanistan",
    ingredients: [
      { item: "Kurutulmuş kekik", amount: "2 yemek kaşığı" },
      { item: "Sumak", amount: "1 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 yemek kaşığı" },
      { item: "Kırmızı toz biber", amount: "1 tatlı kaşığı" },
      { item: "Kurutulmuş nane", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri bir kasede birleştirin",
      "İyice harmanlayın",
      "Zeytinyağı ile macun yapıp ete sürün",
      "En az 2-4 saat dinlendirin"
    ],
    tips: [
      "Kuzu pirzola ve but için mükemmel",
      "Sumak ekşiliği kuzunun lezzetini dengeler",
      "Zeytinyağı ile karıştırarak marine edin",
      "Izgara veya fırından önce 1 saat oda sıcaklığında bekletin"
    ],
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-but", "kuzu-rack", "kuzu-kol", "kuzu-incik"],
      methods: ["Izgara", "Fırın", "Mangal", "Şiş"],
      occasions: ["Kuzu geceleri", "Bayram yemekleri", "Özel davetler"]
    },
    storageInfo: "Hava geçirmez kavanozda serin yerde 6 ay"
  }
];
