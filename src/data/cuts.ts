export type CutData = {
  name: string;
  animalType: string;
  animalIcon: string;
  slug: string;
  description: string;
  locationDescription: string;
  difficulty: string;
  fatContent: string;
  boneIn: boolean;
  averageWeight: string;
  priceRange: string;
  bestMethods: string[];
  cookingGuides: {
    method: string;
    icon: string;
    difficulty: string;
    tempMin: number;
    tempMax: number;
    timePerKg: number;
    instructions: string[];
    tips: string[];
  }[];
  donenessGuide: {
    name: string;
    temp: string;
    color: string;
    description: string;
  }[];
  nutritionalInfo: {
    servingSize: number;
    calories: number;
    protein: number;
    fat: number;
    iron: number;
    zinc: number;
  };
  storageInfo: {
    fridgeDays: string;
    freezerDays: string;
    fridgeTemp: string;
    freezerTemp: string;
    thawingMethod: string;
  };
  pairingSuggestions: {
    sideDishes: string[];
    drinks: string[];
    occasions: string[];
  };
};

export const cutsData: Record<string, CutData> = {
  "dana-bonfile": {
    name: "Bonfile (Tenderloin)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-bonfile",
    description: "Dananın en yumuşak ve en değerli parçası. Az yağlı, çok hassas bir lezzete sahiptir. Kısa ve yoğun pişirme yöntemleri için idealdir.",
    locationDescription: "Dananın bel bölgesinde, omurga boyunca uzanan ince ve uzun bir kas. Vücudun en az çalışan kası olduğu için çok yumuşaktır.",
    difficulty: "Orta",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "300-800g",
    priceRange: "Yüksek",
    bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 8,
        instructions: [
          "Et oda sıcaklığına gelsin (15-20 dk)",
          "Her iki tarafını tuz ve karabiber ile tatlandırın",
          "Tavayı çok kızdırın, 1-2 çorba kaşığı yağ ekleyin",
          "Yüksek ateşte her iki tarafı 2-3 dakika kızartın",
          "İç sıcaklık 55°C'ye ulaştığında ocaktan alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Bonfile çok hassas olduğu için çok uzun pişirmeyin",
          "Mükemmel medium rare için 55°C iç sıcaklık hedefleyin",
          "Pişirmeden önce eti kurulayın - bu iyi bir kabuk oluşmasını sağlar"
        ]
      },
      {
        method: "Sous Vide",
        icon: "🫧",
        difficulty: "Zor",
        tempMin: 54,
        tempMax: 60,
        timePerKg: 60,
        instructions: [
          "Sous vide makinesini 55°C'ye ayarlayın",
          "Etinizi vakum poşetine koyun",
          "1-2 saat pişirin (1cm kalınlık için)",
          "Poşetten çıkarın ve kağıt havlu ile kurulayın",
          "Tavada her iki tarafı 1 dakika kızartın"
        ],
        tips: [
          "Sous vide ile mükemmel pişirme kontrolü sağlarsınız",
          "Mühürleme adımını atlamayın - bu lezzet ve renk katar",
          "En iyi sonuç için 55°C'de 1-2 saat yeterlidir"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe merkez" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 133,
      protein: 26,
      fat: 2.6,
      iron: 1.2,
      zinc: 4.5
    },
    storageInfo: {
      fridgeDays: "3-5 gün",
      freezerDays: "6-12 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme (12-24 saat). Sıcak suda veya oda sıcaklığında çözdürmeyin."
    },
    pairingSuggestions: {
      sideDishes: ["Patates püresi", "Haşlanmış sebze", "Grilled asparagus", "Mantar sote"],
      drinks: ["Kırmızı şarap (Cabernet Sauvignon)", "Bira (Amber Ale)", "Meyve suyu"],
      occasions: ["Romantik akşam yemeği", "Özel günler", "Şef yemekleri"]
    }
  },
  "dana-antrikot": {
    name: "Antrikot (Ribeye)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-antrikot",
    description: "Kaburga bölgesinde elde edilen, yağlı yapısıyla ünlü bir kesim. Zengin lezzeti ve sulu yapısıyla bilinir.",
    locationDescription: "Dananın kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kas. Yüksek yağ oranı (marbling) onu çok lezzetli yapar.",
    difficulty: "Kolay",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "400-1200g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava", "Fırın"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 12,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Etinizi oda sıcaklığında 30 dakika bekletin",
          "Her iki tarafını tuz ile tatlandırın",
          "Dolaylı ateşte 4-5 dakika, sonra dolaysız ateşte 2-3 dakika",
          "İç sıcaklık 55°C'ye ulaştığında alın"
        ],
        tips: [
          "Antrikotun yüksek yağ oranı onu affedici yapar",
          "Dolaylı ateş tekniği en iyi sonucu verir",
          "Pişirme sırasında sıklıkla çevirmeyin"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 217,
      protein: 25,
      fat: 13,
      iron: 1.8,
      zinc: 5.2
    },
    storageInfo: {
      fridgeDays: "3-5 gün",
      freezerDays: "6-12 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Patates kızartması", "Mantar sote", "Grilled sebzeler", "Caesar salata"],
      drinks: ["Kırmızı şarap (Malbec, Syrah)", "Bira (IPA)", "Viski"],
      occasions: ["BBQ partileri", "Hafta sonu yemekleri", "Arkadaş buluşmaları"]
    }
  },
  "kuzu-pirzola": {
    name: "Kuzu Pirzola (Lamb Chops)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-pirzola",
    description: "Kuzunun kaburga bölgesinden elde edilen, kemikli ve lezzetli pirzola.",
    locationDescription: "Kuzunun kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kısa ve kemikli pirzolalar.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "150-400g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 5,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Pirzolaları tuz, karabiber ve kekik ile tatlandırın",
          "Her iki tarafı 3-4 dakika pişirin",
          "İç sıcaklık 55°C'ye ulaştığında alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Kuzu pirzola için medium rare en iyi sonuçtur",
          "Çok pişirmek kuzu etini sertleştirir",
          "Taze kekik kuzunun lezzetini tamamlar"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 182,
      protein: 25,
      fat: 9,
      iron: 1.6,
      zinc: 4.8
    },
    storageInfo: {
      fridgeDays: "3-4 gün",
      freezerDays: "6-9 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Patates püresi", "Haşlanmış bezelye", "Közlenmiş sebzeler", "Pirinç pilavı"],
      drinks: ["Kırmızı şarap (Pinot Noir, Merlot)", "Bira (Lager)", "Nar suyu"],
      occasions: ["Bayram yemekleri", "Özel akşam yemekleri", "Şölen sofraları"]
    }
  },
  "tavuk-gogsu": {
    name: "Tavuk Göğsü",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-gogsu",
    description: "Tavuğun en az yağlı ve en çok protein içeren bölgesi. Hızlı pişmesiyle bilinir.",
    locationDescription: "Tavuğun göğüs bölgesinde, kemik üzerinde veya kemiksiz olarak bulunur. Beyaz et olarak adlandırılır.",
    difficulty: "Kolay",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "150-400g",
    priceRange: "Düşük",
    bestMethods: ["Tava", "Izgara", "Fırın", "Sous Vide"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 22,
        instructions: [
          "Göğsü 2cm kalınlığında açın veya ikiye bölün",
          "Tuz ve karabiber ile tatlandırın",
          "Tavada orta ateşte her iki tarafı 6-7 dakika pişirin",
          "İç sıcaklık 74°C'ye ulaştığında alın",
          "5 dakika dinlendirin"
        ],
        tips: [
          "Göğüs eti çok çabuk kurur - fazla pişirmeyin",
          "Pişirmeden önce marine etmek lezzet ve nem sağlar",
          "İç sıcaklık termometresi kullanın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C", color: "#F59E0B", description: "Tamamen pişmiş, pembe yok" }
    ],
    nutritionalInfo: {
      servingSize: 100,
      calories: 165,
      protein: 31,
      fat: 3.6,
      iron: 1.0,
      zinc: 1.0
    },
    storageInfo: {
      fridgeDays: "1-2 gün",
      freezerDays: "9 ay",
      fridgeTemp: "0-4°C",
      freezerTemp: "-18°C veya daha soğuk",
      thawingMethod: "Buzdolabında yavaş çözdürme"
    },
    pairingSuggestions: {
      sideDishes: ["Pirinç pilavı", "Salata", "Haşlanmış sebze", "Makarna"],
      drinks: ["Beyaz şarap (Sauvignon Blanc)", "Bira (Pilsner)", "Meyve suyu"],
      occasions: ["Hafta içi yemekleri", "Sağlıklı beslenme", "Sporcular için"]
    }
  },
  "dana-riploin": {
    name: "Riploin (New York Strip)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-riploin",
    description: "Bel bölgesinin arka kısmından elde edilen, dengeli yağ oranına sahip değerli bir kesim.",
    locationDescription: "Dananın bel bölgesinde, antrikotun arkasında yer alan uzun ve sulu bir kas. Kemikli veya kemiksiz olarak satılır.",
    difficulty: "Kolay",
    fatContent: "Orta",
    boneIn: false,
    averageWeight: "300-700g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava", "Fırın"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 12,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Etinizi oda sıcaklığında 30 dakika bekletin",
          "Tuz, karabiber ile tatlandırın",
          "Her iki tarafı 4-5 dakika pişirin",
          "İç sıcaklık 55°C'de alın, 5 dakika dinlendirin"
        ],
        tips: [
          "Riploin antrikottan daha az yağlı, dikkatli pişirin",
          "Medium rare en iyi sonucu verir",
          "Etin kalınlığına göre süre ayarlayın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 195, protein: 26, fat: 9, iron: 1.7, zinc: 4.8 },
    storageInfo: { fridgeDays: "3-5 gün", freezerDays: "6-12 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates kızartması", "Sebzeler", "Mantar sote"], drinks: ["Kırmızı şarap (Cabernet)", "Bira (Stout)"], occasions: ["Steakhouse yemekleri", "Özel günler"] }
  },
  "dana-t-bone": {
    name: "T-Bone / Porterhouse",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-t-bone",
    description: "T şeklinde kemiğiyle iki farklı kası (bonfile ve kontrfile) birleştiren ikonik kesim.",
    locationDescription: "Dananın bel bölgesinde, omurganın her iki yanında yer alan kasların T kemiğiyle birleşimi. Sol taraf bonfile, sağ taraf kontrfile.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "400-1000g",
    priceRange: "Yüksek",
    bestMethods: ["Izgara", "Tava"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 15,
        instructions: [
          "Izgarayı yüksek sıcaklığa getirin",
          "Tuz ve karabiber ile tatlandırın",
          "Kemik tarafını 5 dakika, et tarafını 4 dakika pişirin",
          "Çevirin ve aynı süreyi diğer tarafa uygulayın",
          "İç sıcaklık 55°C'de alın, 7 dakika dinlendirin"
        ],
        tips: [
          "İki farklı kas farklı hızda pişer, kemik tarafına dikkat edin",
          "Kalın kesimler için iki zonlu pişirme kullanın",
          "Porterhouse T-Bone'dan daha büyüktür"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 210, protein: 26, fat: 11, iron: 2.0, zinc: 5.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-12 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Izgara sebzeler", "Bezelye"], drinks: ["Kırmızı şarap (Bordeaux)", "Bira (Lager)"], occasions: ["Klasik steak yemekleri", "Özel kutlamalar"] }
  },
  "dana-brisket": {
    name: "Brisket (Göğüs)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-brisket",
    description: "Göğüs bölgesinden elde edilen, uzun süreli pişirme gerektiren büyük ve lezzetli bir kesim.",
    locationDescription: "Dananın göğüs bölgesinde, ön bacakların arkasında yer alan büyük ve sert kas. Yavaş pişirmeyle yumuşar.",
    difficulty: "Zor",
    fatContent: "Yağlı",
    boneIn: false,
    averageWeight: "2-5kg",
    priceRange: "Orta",
    bestMethods: ["Smoking", "Braising"],
    cookingGuides: [
      {
        method: "Smoking",
        icon: "💨",
        difficulty: "Zor",
        tempMin: 100,
        tempMax: 120,
        timePerKg: 90,
        instructions: [
          "Brisketi tuz, karabiber ve sarımsak ile ovun (rub)",
          "Smoker'ı 110°C'ye ayarlayın",
          "Etin kalın tarafını termometre ile takip edin",
          "6-12 saat pişirin (kiloya göre)",
          "İç sıcaklık 90-95°C'ye ulaştığında alın",
          "30 dakika folyo ile sarıp dinlendirin"
        ],
        tips: [
          "Düşük ve yavaş pişirme kuralı: saat başına 1 saat pişirme",
          "Kemik gibi yumuşak olmalı - çatalla kontrol edin",
          "Marine/rub işlemi 12-24 saat önceden yapılmalı"
        ]
      },
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Orta",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 75,
        instructions: [
          "Eti büyük parçalara bölün ve tuzlayın",
          "Tavada her tarafını kızartın",
          "Soğan, havuç, sarımsak ekleyin",
          "Soya sosu, şarap, et suyu ekleyin",
          "160°C fırında 4-6 saat pişirin"
        ],
        tips: [
          "Folyoya sarıp fırın poşetinde de pişirebilirsiniz",
          "Sebzeleri pişmenin son 1 saatinde ekleyin",
          "Et çatalla dağılıyorsa hazırdır"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "90-95°C", color: "#78716C", description: "Çatalla dağılabilen, yumuşak" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 250, protein: 22, fat: 17, iron: 2.3, zinc: 5.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["BBQ sos", "Coleslaw", "Patates salatası", "Cornbread"], drinks: ["Bira (BBQ)", "Kırmızı şarap (Zinfandel)"], occasions: ["BBQ partileri", "Texas/Memphis usulü yemekler"] }
  },
  "dana-short-ribs": {
    name: "Short Ribs (Kaburga)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-short-ribs",
    description: "Kaburganın ön kısmından elde edilen, kemikli ve yağlı bir kesim. Yavaş pişirmeyle efsanevi lezzete ulaşır.",
    locationDescription: "Dananın ön kaburga bölgesinde, 1-5 kaburgalar arasında yer alan kalın ve yağlı kaslar.",
    difficulty: "Orta",
    fatContent: "Çok Yağlı",
    boneIn: true,
    averageWeight: "1-2kg",
    priceRange: "Orta",
    bestMethods: ["Braising", "Smoking", "Izgara"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Orta",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 60,
        instructions: [
          "Kemikli parçaları 5cm kalınlığında kesin",
          "Tuz, karabiber ile tatlandırın",
          "Tavada her tarafını kızartın",
          "Soğan, sarımsak, biber ekleyin",
          "Kırmızı şarap ve et suyu ekleyin",
          "160°C'de 3-4 saat pişirin"
        ],
        tips: [
          "Kemikten ayrılıyorsa hazırdır",
          "Kore usulü (galbi) kesimler daha ince olur",
          "Patates püresi veya polenta ile servis yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 295, protein: 24, fat: 22, iron: 2.5, zinc: 6.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Polenta", "Kızarmış sebzeler"], drinks: ["Kırmızı şarap (Syrah)", "Bira (Porter)"], occasions: ["Kış yemekleri", "Aile sofraları"] }
  },
  "dana-chuck": {
    name: "Chuck Roast (Kol)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-chuck",
    description: "Omuz bölgesinden elde edilen, yumuşak ve sulu bir kesim. Yavaş pişirme için mükemmel.",
    locationDescription: "Dananın omuz bölgesinde, boyun ve ön bacak arasında yer alan büyük kas. Yağ oranı yüksektir.",
    difficulty: "Orta",
    fatContent: "Yağlı",
    boneIn: false,
    averageWeight: "1-3kg",
    priceRange: "Düşük-Orta",
    bestMethods: ["Braising", "Smoking", "Fırın"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 140,
        tempMax: 160,
        timePerKg: 60,
        instructions: [
          "Eti oda sıcaklığına getirin",
          "Tuz, karabiber, sarımsak, biber ile ovun",
          "Tavada her tarafını kızartın",
          "Sebzeler (soğan, havuç, patates) ekleyin",
          "Et suyu veya bulyon ekleyin",
          "150°C'de 3-4 saat pişirin"
        ],
        tips: [
          "Folyo ile sararsanız daha sulu olur",
          "Sebzeleri son 1 saatte ekleyin",
          "Çatalla kontrol edin - dağılıyorsa hazırdır"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Çatalla dağılabilen" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 240, protein: 23, fat: 16, iron: 2.2, zinc: 5.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Sebze yemeği", "Pilav"], drinks: ["Kırmızı şarap", "Bira (Ale)"], occasions: ["Aile yemekleri", "Pazar yemekleri"] }
  },
  "dana-flank": {
    name: "Flank Steak (Karın)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-flank",
    description: "Karın bölgesinden elde edilen, ince ve uzun bir kesim. Yoğun lezzetiyle bilinir.",
    locationDescription: "Dananın karın bölgesinde, göğüs ve kalça arasında yer alan ince ve lifli kas.",
    difficulty: "Orta",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "500-1000g",
    priceRange: "Orta",
    bestMethods: ["Izgara", "Tava"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 8,
        instructions: [
          "Eti kalınlığını yarıya indirin (ortadan açın)",
          "Marine edin (soya sosu, zeytinyağı, sarımsak)",
          "Izgarayı yüksek ateşe getirin",
          "Her tarafı 3-4 dakika pişirin",
          "Tahmin edilen lif yönünün tersine 5mm dilimler halinde kesin"
        ],
        tips: [
          "Marine işlemi en az 2 saat olmalı",
          "Lif yönüne dikkat ederek kesin - aksi halde sert olur",
          "Fajita veya stir-fry için idealdir"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 160, protein: 27, fat: 5, iron: 1.8, zinc: 4.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Fajita sebzeleri", "Pirinç", "Guacamole"], drinks: ["Kırmızı şarap (Malbec)", "Margarita"], occasions: ["Meksika usulü yemekler", "BBQ"] }
  },
  "dana-sirloin": {
    name: "Sirloin (Kontrfile)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-sirloin",
    description: "Kalça bölgesinden elde edilen, lezzetli ve ekonomik bir kesim.",
    locationDescription: "Dananın kalça bölgesinde, omurganın arkasında yer alan orta yumuşaklıkta bir kas.",
    difficulty: "Kolay",
    fatContent: "Orta",
    boneIn: false,
    averageWeight: "400-800g",
    priceRange: "Orta",
    bestMethods: ["Izgara", "Tava", "Fırın"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 200,
        tempMax: 220,
        timePerKg: 12,
        instructions: [
          "Eti oda sıcaklığına getirin",
          "Tuz ve karabiber ile tatlandırın",
          "Tavayı çok kızdırın",
          "Her tarafı 4-5 dakika pişirin",
          "İç sıcaklık 55°C'de alın, 5 dakika dinlendirin"
        ],
        tips: [
          "Bonfile kadar yumuşak değildir, medium rare hedefleyin",
          "Marine sosu ile daha yumuşak olur",
          "Lif yönüne dik kesin"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 180, protein: 26, fat: 7, iron: 1.7, zinc: 4.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates", "Sebzeler", "Salata"], drinks: ["Kırmızı şarap (Merlot)", "Bira (Pilsner)"], occasions: ["Günlük yemekler", "Hafta sonu"] }
  },
  "dana-tritip": {
    name: "Tri-Tip (Üçgen)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-tritip",
    description: "Kalça bölgesinden elde edilen üçgen şeklindeki kesim. California'da çok popülerdir.",
    locationDescription: "Dananın kalça bölgesinde, sirloin alt kısmında yer alan üçgen şeklindeki kas.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: false,
    averageWeight: "600-1200g",
    priceRange: "Orta",
    bestMethods: ["Izgara", "Smoking"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 15,
        instructions: [
          "Tuz, karabiber, sarımsak tozu ile ovun",
          "Oda sıcaklığında 30-45 dakika bekletin",
          "İki zonlu pişirme: önce dolaylı 15-20 dakika",
          "İç sıcaklık 50°C'de dolaysız ateşe alın",
          "Her tarafı 2-3 dakika mühürleyin",
          "Lif yönüne dik 1cm dilimler halinde servis yapın"
        ],
        tips: [
          "Dinlendirme süresi 10 dakika olmalı",
          "Santa Maria usulü baharat karışımı deneyin",
          "Lif yönüne dikkatli kesin - en önemli adım"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 185, protein: 26, fat: 8, iron: 1.8, zinc: 4.7 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["BBQ sos", "Patates salatası", "Garlic bread"], drinks: ["Kırmızı şarap (Zinfandel)", "Bira (Pale Ale)"], occasions: ["California BBQ", "Yaz partileri"] }
  },
  "dana-kıyma": {
    name: "Kıyma (Ground Beef)",
    animalType: "Dana",
    animalIcon: "🐄",
    slug: "dana-kıyma",
    description: "Çeşitli kesimlerden elde edilen, en çok kullanılan et formu. Çok yönlü ve pratik.",
    locationDescription: "Bonfile, kontrfile ve diğer kesimlerden elde edilen, makineden geçirilmiş et karışımı.",
    difficulty: "Kolay",
    fatContent: "Değişken (%10-25)",
    boneIn: false,
    averageWeight: "250g-2kg paket",
    priceRange: "Düşük",
    bestMethods: ["Tava", "Izgara", "Fırın"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 12,
        instructions: [
          "Tavayı orta-yüksek ateşe alın",
          "Kıymayı ekleyin ve düzleştirin",
          "3-4 dakika pişirin, spatula ile parçalayın",
          "Tuz, karabiber ekleyin",
          "7-8 dakika daha pişirin",
          "İç sıcaklık 71°C'ye ulaştığında alın"
        ],
        tips: [
          "Yüzeyi düzleştirerek iyi bir Maillard reaksiyonu elde edin",
          "Hamburger köftesi için 4-5cm toplar yapın",
          "Sosis veya köfte için çeşitli baharatlarla karıştırın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Medium", temp: "65-68°C", color: "#E11D48", description: "Hafif pembe, sulu" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 215, protein: 26, fat: 12, iron: 2.5, zinc: 6.0 },
    storageInfo: { fridgeDays: "1-2 gün", freezerDays: "3-4 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında çözdürme veya doğrudan pişirme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Makarna", "Sebze yemeği", "Pilav"], drinks: ["Bira (Lager)", "Kola", "Süt"], occasions: ["Günlük yemekler", "Hamburger gecesi", "Aile yemekleri"] }
  },
  "kuzu-kol": {
    name: "Kuzu Kol (Lamb Shoulder)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-kol",
    description: "Omuz bölgesinden elde edilen, yumuşak ve lezzetli kesim. Yavaş pişirmeyle efsaneleşir.",
    locationDescription: "Kuzunun omuz bölgesinde, ön bacakla boyun arasında yer alan yağlı ve lezzetli kas.",
    difficulty: "Zor",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "1-2kg",
    priceRange: "Orta",
    bestMethods: ["Braising", "Smoking", "Fırın"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 75,
        instructions: [
          "Sarımsak, biberiye, kekik, limon kabuğu ile ovun",
          "Tuz, karabiber ekleyin",
          "Tavada her tarafını kızartın",
          "Sebzeler ekleyin (soğan, havuç, patates)",
          "150°C fırında 3-4 saat pişirin",
          "Kemikten ayrılınca hazırdır"
        ],
        tips: [
          "Marine işlemi 4-24 saat önceden yapın",
          "Folyo ile sararsanız daha sulu olur",
          "Pulled lamb (didilmiş kuzu) olarak servis yapabilirsiniz"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 250, protein: 24, fat: 16, iron: 2.0, zinc: 5.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Közlenmiş sebze", "Yogurt sosu"], drinks: ["Kırmızı şarap (Pinot Noir)", "Bira (Amber)"], occasions: ["Pazar yemeği", "Akdeniz mutfağı"] }
  },
  "kuzu-but": {
    name: "Kuzu But (Leg of Lamb)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-but",
    description: "Arka bacaktan elde edilen, büyük ve şenlikli bir kesim. Özel günler için idealdir.",
    locationDescription: "Kuzunun arka bacağında, kalça ekleminden ayağa kadar uzanan büyük ve sulu kas.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "1.5-3kg",
    priceRange: "Yüksek",
    bestMethods: ["Fırın", "Izgara", "Braising"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 160,
        tempMax: 180,
        timePerKg: 45,
        instructions: [
          "Sarımsak kesikler açıp sarımsak ve biberiye yerleştirin",
          "Zeytinyağı, limon, kekik ile marine edin (4-12 saat)",
          "Tuz, karabiber ile tatlandırın",
          "Fırını 180°C'ye ısıtın",
          "İlk 20 dakika 180°C, sonra 160°C'ye düşürün",
          "İç sıcaklık 60-65°C'de alın, 15 dakika dinlendirin"
        ],
        tips: [
          "Termometre kullanmadan pişirmeyin",
          "Marine sosu en az 4 saat etki etmeli",
          "Dilimler halinde sunum yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 200, protein: 25, fat: 10, iron: 1.8, zinc: 4.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates", "Sebzeler", "Yogurtlu soslar"], drinks: ["Kırmızı şarap (Cabernet)", "Bira (Stout)"], occasions: ["Bayram yemekleri", "Düğün sofraları"] }
  },
  "kuzu-kaburga": {
    name: "Kuzu Kaburga (Lamb Ribs)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-kaburga",
    description: "Kaburga bölgesinden elde edilen, kemikli ve lezzetli bir kesim.",
    locationDescription: "Kuzunun kaburga bölgesinde, yan tarafta yer alan kemikli ve yağlı parçalar.",
    difficulty: "Orta",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "500-1000g",
    priceRange: "Orta",
    bestMethods: ["Izgara", "Braising"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Orta",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 50,
        instructions: [
          "Kaburgaları 5cm parçalara bölün",
          "Tuz, karabiber, sarımsak ile ovun",
          "Tavada kızartın",
          "Soğan, biberiye, kekik ekleyin",
          "Şarap, et suyu ekleyin",
          "160°C'de 2-3 saat pişirin"
        ],
        tips: [
          "Marine sosu en az 2 saat etki etmeli",
          "Folyo ile sararsanız daha sulu olur",
          "BBQ sosu ile servis yapabilirsiniz"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "80-85°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 240, protein: 23, fat: 16, iron: 1.9, zinc: 5.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates püresi", "Izgara sebzeler", "Yogurt sosu"], drinks: ["Kırmızı şarap", "Bira (Ale)"], occasions: ["Aile yemekleri", "Kış sofraları"] }
  },
  "kuzu-incik": {
    name: "Kuzu İncik (Lamb Shank)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-incik",
    description: "Alt bacaktan elde edilen, uzun pişirmeyle yumuşayan, lezzetli bir kesim.",
    locationDescription: "Kuzunun alt bacağında, diz eklemi ile ayak arasında yer alan sert ama lezzetli kas.",
    difficulty: "Zor",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "300-600g (adet)",
    priceRange: "Orta",
    bestMethods: ["Braising", "Fırın"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Zor",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 90,
        instructions: [
          "İncikleri bağlayın veya folyo ile sarın",
          "Sarımsak, biberiye, kekik ile ovun",
          "Tavada her tarafını kızartın",
          "Soğan, havuç, kereviz ekleyin",
          "Kırmızı şarap, domates, et suyu ekleyin",
          "160°C'de 3-4 saat pişirin",
          "Kemikten kolayca ayrılmalı"
        ],
        tips: [
          "Osso buco usulü sebzelerle servis yapın",
          "Marine sosu en az 4 saat etki etmeli",
          "Gremolata (limon kabuğu + sarımsak + maydanoz) ile servis yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 220, protein: 25, fat: 12, iron: 2.0, zinc: 5.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Polenta", "Patates püresi", "Sebze yemeği"], drinks: ["Kırmızı şarap (Barolo)", "Bira (Porter)"], occasions: ["İtalyan mutfağı", "Kış yemekleri"] }
  },
  "kuzu-rack": {
    name: "Kuzu Rack (Rack of Lamb)",
    animalType: "Kuzu",
    animalIcon: "🐑",
    slug: "kuzu-rack",
    description: "8-13 kaburga kemiklerinin birleşiminden oluşan, en prestijli kuzu kesim.",
    locationDescription: "Kuzunun sırt bölgesinde, 8 kemik içeren özel kesim. Kemikleri temizlenmiş (frenched) olarak satılır.",
    difficulty: "Usta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "600-1000g",
    priceRange: "Çok Yüksek",
    bestMethods: ["Fırın", "Izgara"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Usta",
        tempMin: 200,
        tempMax: 220,
        timePerKg: 25,
        instructions: [
          "Rack'ı oda sıcaklığına getirin (1 saat)",
          "Sarımsak, biberiye, kekik, zeytinyağı marine edin",
          "Tuz, karabiber ile tatlandırın",
          "Fırını 220°C'ye ısıtın",
          "Kemikli tarafı yukarı gelecek şekilde 25-30 dakika pişirin",
          "İç sıcaklık 57°C'de alın, 10 dakika dinlendirin",
          "Kemik arası 2'şerli chop halinde kesin"
        ],
        tips: [
          "Şef yemeklerinin klasiğidir",
          "Kemikleri 'frenching' ile temizlemek görsel sunum sağlar",
          "Mint jelly veya redcurrant sos ile servis yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 220, protein: 24, fat: 13, iron: 1.8, zinc: 4.5 },
    storageInfo: { fridgeDays: "2-3 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates gratin", "Sebze sote", "Mint sosu"], drinks: ["Kırmızı şarap (Bordeaux)", "Port wine"], occasions: ["Özel davetler", "Romantik yemekler", "Şölen sofraları"] }
  },
  "tavuk-but": {
    name: "Tavuk But",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-but",
    description: "Tavuğun bacak bölgesi, kemikli ve lezzetli. Yağ oranı göğse göre daha yüksektir.",
    locationDescription: "Tavuğun üst ve alt bacak bölgesinde yer alan, kemikli ve koyu et parçaları.",
    difficulty: "Kolay",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "200-400g (adet)",
    priceRange: "Düşük",
    bestMethods: ["Fırın", "Izgara", "Braising"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Kolay",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 35,
        instructions: [
          "Butları yıkayıp kağıt havlu ile kurulayın",
          "Tuz, karabiber, sarımsak, kekik ile ovun",
          "Zeytinyağı sürün",
          "Fırını 190°C'ye ısıtın",
          "Tepsiye yerleştirip 35-40 dakika pişirin",
          "İç sıcaklık 74°C'de alın"
        ],
        tips: [
          "Cilt altına yağ sürerseniz çıtır olur",
          "Marine işlemi 2-4 saat lezzeti artırır",
          "Patates ile birlikte pişirebilirsiniz"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C", color: "#F59E0B", description: "Tamamen pişmiş, sulu" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 209, protein: 26, fat: 11, iron: 1.3, zinc: 2.5 },
    storageInfo: { fridgeDays: "1-2 gün", freezerDays: "9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Patates", "Sebze"], drinks: ["Beyaz şarap", "Bira (Lager)"], occasions: ["Günlük yemekler", "Aile sofraları"] }
  },
  "tavuk-kanat": {
    name: "Tavuk Kanat",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-kanat",
    description: "Tavuğun kanat bölgesi, küçük ama çok lezzetli. Atıştırmalık veya ana yemek olarak idealdir.",
    locationDescription: "Tavuğun kanat bölgesinde yer alan, üç parçadan oluşan (drummette, flat, tip) küçük et parçaları.",
    difficulty: "Kolay",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "100-200g (adet)",
    priceRange: "Düşük",
    bestMethods: ["Izgara", "Fırın", "Deep Fry"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Kolay",
        tempMin: 200,
        tempMax: 220,
        timePerKg: 25,
        instructions: [
          "Kanatları kurulayın",
          "Tuz, karabiber, sarımsak tozu, paprika ile ovun",
          "Marine sosu ile 1-2 saat marine edin",
          "200°C'de 25-30 dakika pişirin",
          "Son 5 dakika yüksek sıcaklıkta çıtırlaştırın"
        ],
        tips: [
          "Buffalo sos ile buffalo wings yapabilirsiniz",
          "Çıtır olması için tel ızgara üzerinde pişirin",
          "BBQ sosu ile de mükemmel olur"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C", color: "#F59E0B", description: "Çıtır dış, sulu iç" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 222, protein: 30, fat: 10, iron: 1.0, zinc: 1.8 },
    storageInfo: { fridgeDays: "1-2 gün", freezerDays: "6 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates kızartması", "Celery", "Mavi peynir sosu"], drinks: ["Bira (IPA)", "Cola", "Limonata"], occasions: ["Partiler", "Maç geceleri", "Atıştırmalık"] }
  },
  "tavuk-butun": {
    name: "Bütün Tavuk",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-butun",
    description: "Tavuğun tüm hali, hem beyaz hem koyu et sevenler için mükemmel.",
    locationDescription: "Tavuğun tüm hali - göğüs, but, kanat, sırt dahil tüm parçalar bir arada.",
    difficulty: "Orta",
    fatContent: "Orta",
    boneIn: true,
    averageWeight: "1-2kg",
    priceRange: "Düşük-Orta",
    bestMethods: ["Fırın", "Izgara", "Deep Fry"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 50,
        instructions: [
          "Tavuğu yıkayıp kurulayın",
          "İç ve dışına tuz, karabiber, limon sürün",
          "İçine sarımsak, biberiye, kekik, limon yerleştirin",
          "Kanatları arkaya bağlayın",
          "180°C'de 1-1.5 saat pişirin",
          "İç sıcaklık butta 74°C olunca alın",
          "15 dakika dinlendirin"
        ],
        tips: [
          "Cilt çıtır olması için zeytinyağı sürün",
          "Marine işlemi 4-12 saat lezzeti artırır",
          "Patates ve sebzelerle birlikte pişirebilirsiniz"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C (but)", color: "#F59E0B", description: "Tüm parçalar tam pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 190, protein: 28, fat: 8, iron: 1.0, zinc: 1.5 },
    storageInfo: { fridgeDays: "1-2 gün", freezerDays: "12 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme (24 saat)" },
    pairingSuggestions: { sideDishes: ["Patates", "Sebze", "Pilav", "Salata"], drinks: ["Beyaz şarap", "Bira (Lager)", "Limonata"], occasions: ["Pazar yemeği", "Aile sofraları", "Bayram"] }
  },
  "tavuk-bonfile": {
    name: "Tavuk Bonfile",
    animalType: "Tavuk",
    animalIcon: "🍗",
    slug: "tavuk-bonfile",
    description: "Göğsün iç kısmından elde edilen, en yumuşak ve yumuşak tavuk parçası.",
    locationDescription: "Tavuğun göğüs iç kısmında, göğüs kemiğinin yanında yer alan küçük ve yumuşak kas.",
    difficulty: "Kolay",
    fatContent: "Yağsız",
    boneIn: false,
    averageWeight: "100-200g (adet)",
    priceRange: "Orta",
    bestMethods: ["Tava", "Sous Vide"],
    cookingGuides: [
      {
        method: "Tava / Pan-Sear",
        icon: "🍳",
        difficulty: "Kolay",
        tempMin: 180,
        tempMax: 200,
        timePerKg: 18,
        instructions: [
          "Bonfileleri tuz, karabiber ile tatlandırın",
          "Tavada orta-yüksek ateşte 3-4 dakika",
          "Çevirin ve 3 dakika daha pişirin",
          "İç sıcaklık 74°C'de alın",
          "3-5 dakika dinlendirin"
        ],
        tips: [
          "Çok ince olduğu için çabuk pişer, dikkat edin",
          "Marine sosu ile yumuşak kalır",
          "Sebzelerle sote yapabilirsiniz"
        ]
      }
    ],
    donenessGuide: [
      { name: "Pişmiş (Güvenli)", temp: "74°C", color: "#F59E0B", description: "Sulu, yumuşak" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 120, protein: 25, fat: 2, iron: 0.8, zinc: 1.0 },
    storageInfo: { fridgeDays: "1-2 gün", freezerDays: "6 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında çözdürme" },
    pairingSuggestions: { sideDishes: ["Sebze sote", "Pilav", "Salata"], drinks: ["Beyaz şarap", "Hafif bira"], occasions: ["Hızlı yemekler", "Sağlıklı beslenme"] }
  },
  "sigr-antrikot": {
    name: "Sığır Antrikot",
    animalType: "Büyükbaş",
    animalIcon: "🐂",
    slug: "sigr-antrikot",
    description: "Sığır etinden elde edilen antrikot, dana antrikotdan daha yoğun lezzetlidir.",
    locationDescription: "Sığırın kaburga bölgesinde yer alan, dana etine göre daha koyu renkli ve lezzetli kas.",
    difficulty: "Orta",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "400-1000g",
    priceRange: "Orta-Yüksek",
    bestMethods: ["Izgara", "Tava"],
    cookingGuides: [
      {
        method: "Izgara / Grill",
        icon: "🔥",
        difficulty: "Orta",
        tempMin: 200,
        tempMax: 250,
        timePerKg: 12,
        instructions: [
          "Oda sıcaklığında 30-45 dakika bekletin",
          "Tuz, karabiber ile tatlandırın",
          "Izgarayı yüksek ateşe getirin",
          "Her tarafı 4-5 dakika pişirin",
          "İç sıcaklık 55°C'de alın, 7 dakika dinlendirin"
        ],
        tips: [
          "Dana etinden daha güçlü lezzetlidir",
          "Marine işlemi 2-4 saat önerilir",
          "Sarımsaklı tereyağı ile servis yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Rare", temp: "49-52°C", color: "#DC2626", description: "Soğuk kırmızı merkez" },
      { name: "Medium Rare", temp: "55-57°C", color: "#E11D48", description: "Sıcak kırmızı-pembe" },
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 220, protein: 24, fat: 13, iron: 2.0, zinc: 5.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-12 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Patates kızartması", "Sebze", "Mantar"], drinks: ["Kırmızı şarap (Cabernet)", "Bira (Stout)"], occasions: ["Özel yemekler", "Geleneksel sofralar"] }
  },
  "sigr-kaburga": {
    name: "Sığır Kaburga",
    animalType: "Büyükbaş",
    animalIcon: "🐂",
    slug: "sigr-kaburga",
    description: "Sığır kaburgası, yavaş pişirmeyle efsanevi lezzete ulaşan geleneksel bir kesim.",
    locationDescription: "Sığırın kaburga bölgesinde, 6-12 kaburgalar arasında yer alan büyük ve yağlı kaslar.",
    difficulty: "Orta",
    fatContent: "Çok Yağlı",
    boneIn: true,
    averageWeight: "1-2kg",
    priceRange: "Orta",
    bestMethods: ["Braising", "Smoking"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Orta",
        tempMin: 140,
        tempMax: 160,
        timePerKg: 50,
        instructions: [
          "Kaburgaları 5-7cm parçalara bölün",
          "Tuz, karabiber, sarımsak ile ovun",
          "Tavada kızartın",
          "Soğan, havuç, biber ekleyin",
          "Domates, biber salçası, et suyu ekleyin",
          "150°C'de 3-4 saat pişirin"
        ],
        tips: [
          "Sıcak sos ile servis yapın",
          "Pilav veya bulgur pilavı ile mükemmel",
          "Marine işlemi 4-8 saat önerilir"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 280, protein: 24, fat: 20, iron: 2.5, zinc: 6.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Bulgur", "Yoğurt"], drinks: ["Kırmızı şarap", "Bira"], occasions: ["Geleneksel Türk yemekleri", "Aile sofraları"] }
  },
  "koyun-but": {
    name: "Koyun But",
    animalType: "Küçükbaş",
    animalIcon: "🐐",
    slug: "koyun-but",
    description: "Koyunun arka bacağından elde edilen, kuzudan daha güçlü lezzetli bir kesim.",
    locationDescription: "Koyunun arka bacağında yer alan, kuzu etine göre daha koyu renkli ve yoğun lezzetli kas.",
    difficulty: "Orta",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "1.5-2.5kg",
    priceRange: "Orta",
    bestMethods: ["Fırın", "Braising"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 160,
        tempMax: 180,
        timePerKg: 50,
        instructions: [
          "Marine sosu hazırlayın (sarımsak, kekik, biberiye, limon, zeytinyağı)",
          "Marine işlemini 8-12 saat yapın",
          "Tuz, karabiber ekleyin",
          "Fırını 180°C'ye ısıtın",
          "İlk 20 dakika yüksek, sonra 160°C'ye düşürün",
          "İç sıcaklık 65-70°C'de alın, 15 dakika dinlendirin"
        ],
        tips: [
          "Koyun eti daha güçlü lezzetlidir",
          "Sarımsak ve kekik koyun etini tamamlar",
          "Sütle marine yumuşatır"
        ]
      }
    ],
    donenessGuide: [
      { name: "Medium", temp: "60-63°C", color: "#F472B6", description: "Pembe merkez" },
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 240, protein: 24, fat: 15, iron: 1.8, zinc: 4.5 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Bulgur", "Sebze yemeği"], drinks: ["Kırmızı şarap", "Ayran"], occasions: ["Köy sofraları", "Bayram yemekleri"] }
  },
  "koyun-kol": {
    name: "Koyun Kol",
    animalType: "Küçükbaş",
    animalIcon: "🐐",
    slug: "koyun-kol",
    description: "Koyunun omuz bölgesinden elde edilen, yavaş pişirmeyle yumuşayan geleneksel kesim.",
    locationDescription: "Koyunun omuz bölgesinde yer alan, yağlı ve lezzetli kas.",
    difficulty: "Zor",
    fatContent: "Yağlı",
    boneIn: true,
    averageWeight: "1-1.5kg",
    priceRange: "Orta",
    bestMethods: ["Braising", "Fırın"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Zor",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 75,
        instructions: [
          "Marine sosu hazırlayın (sarımsak, kekik, sumak)",
          "4-8 saat marine edin",
          "Tavada her tarafını kızartın",
          "Soğan, biber ekleyin",
          "Salça, et suyu ekleyin",
          "160°C'de 3-4 saat pişirin"
        ],
        tips: [
          "Koyun kuzu etine göre daha güçlü tada sahiptir",
          "Yüksek sıcaklıkta pişirmeyin",
          "Pilav ile mükemmel"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Kemikten kolayca ayrılan" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 250, protein: 23, fat: 17, iron: 1.9, zinc: 4.8 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Bulgur", "Yoğurt"], drinks: ["Ayran", "Kırmızı şarap"], occasions: ["Geleneksel yemekler", "Köy sofraları"] }
  },
  "keci-but": {
    name: "Keçi But",
    animalType: "Küçükbaş",
    animalIcon: "🐐",
    slug: "keci-but",
    description: "Keçinin arka bacağından elde edilen, koyun etinden daha hafif ve kendine özgü lezzetli bir kesim.",
    locationDescription: "Keçinin arka bacağında yer alan, düşük yağ oranlı ve özel lezzetli kas.",
    difficulty: "Orta",
    fatContent: "Az Yağlı",
    boneIn: true,
    averageWeight: "1-2kg",
    priceRange: "Orta",
    bestMethods: ["Fırın", "Braising"],
    cookingGuides: [
      {
        method: "Fırın / Roasting",
        icon: "🌡️",
        difficulty: "Orta",
        tempMin: 160,
        tempMax: 180,
        timePerKg: 55,
        instructions: [
          "Marine sosu hazırlayın (sarımsak, biberiye, kekik, limon)",
          "8-12 saat marine edin",
          "Tuz, karabiber ekleyin",
          "Fırını 180°C'ye ısıtın",
          "İlk 20 dakika yüksek, sonra 160°C'ye düşürün",
          "İç sıcaklık 70°C'de alın, 15 dakika dinlendirin"
        ],
        tips: [
          "Keçi eti koyun etinden daha hafiftir",
          "Marine işlemi uzun olmalı",
          "Sarımsak ve kekik mükemmel uyar"
        ]
      }
    ],
    donenessGuide: [
      { name: "Medium Well", temp: "65-68°C", color: "#A16207", description: "Hafif pembe" },
      { name: "Well Done", temp: "71°C+", color: "#78716C", description: "Tamamen pişmiş" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 165, protein: 26, fat: 6, iron: 3.0, zinc: 5.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Bulgur", "Sebze yemeği"], drinks: ["Beyaz şarap", "Bira (Lager)"], occasions: ["Ege mutfağı", "Akdeniz sofraları"] }
  },
  "keci-kol": {
    name: "Keçi Kol",
    animalType: "Küçükbaş",
    animalIcon: "🐐",
    slug: "keci-kol",
    description: "Keçinin omuz bölgesinden elde edilen, düşük yağlı ve lezzetli bir kesim.",
    locationDescription: "Keçinin omuz bölgesinde yer alan, sert ama lezzetli kas. Yavaş pişirmeyle yumuşar.",
    difficulty: "Zor",
    fatContent: "Az Yağlı",
    boneIn: true,
    averageWeight: "800-1500g",
    priceRange: "Orta",
    bestMethods: ["Braising", "Fırın"],
    cookingGuides: [
      {
        method: "Braising (Haşlama)",
        icon: "🫕",
        difficulty: "Zor",
        tempMin: 150,
        tempMax: 160,
        timePerKg: 80,
        instructions: [
          "Marine sosu hazırlayın (sarımsak, kekik, biberiye)",
          "6-12 saat marine edin",
          "Tavada kızartın",
          "Soğan, biber, havuç ekleyin",
          "Salça, et suyu ekleyin",
          "160°C'de 3-4 saat pişirin"
        ],
        tips: [
          "Keçi eti sert olduğu için uzun pişirme gerekli",
          "Marine işlemi çok önemli",
          "Baharatlı soslar ile servis yapın"
        ]
      }
    ],
    donenessGuide: [
      { name: "Tam Pişmiş", temp: "85-90°C", color: "#78716C", description: "Çatalla dağılabilen" }
    ],
    nutritionalInfo: { servingSize: 100, calories: 170, protein: 25, fat: 7, iron: 2.8, zinc: 5.0 },
    storageInfo: { fridgeDays: "3-4 gün", freezerDays: "6-9 ay", fridgeTemp: "0-4°C", freezerTemp: "-18°C", thawingMethod: "Buzdolabında yavaş çözdürme" },
    pairingSuggestions: { sideDishes: ["Pilav", "Bulgur pilavı", "Yoğurtlu cacık"], drinks: ["Ayran", "Beyaz şarap"], occasions: ["Ege mutfağı", "Köy yemekleri"] }
  }
};

export const allCutSlugs = Object.keys(cutsData);
