export type SauceCategory =
  | "klavik"
  | "akdeniz"
  | "asya"
  | "amerika"
  | "klasik"
  | "baharatli"
  | "sutlu"
  | "hafif";

export interface Sauce {
  slug: string;
  name: string;
  category: SauceCategory;
  icon: string;
  description: string;
  shortDescription: string;
  difficulty: "Kolay" | "Orta" | "Zor" | "Usta";
  prepTime: number;
  cookTime: number;
  servings: number;
  origin: string;
  ingredients: {
    item: string;
    amount: string;
    note?: string;
  }[];
  instructions: string[];
  tips: string[];
  pairings: {
    cuts: string[];
    methods: string[];
    occasions: string[];
  };
  storageInfo: {
    fridge: string;
    freezer?: string;
  };
  nutritionalInfo: {
    servingSize: number;
    calories: number;
    fat: number;
    sodium: number;
    carbs: number;
  };
  tags: string[];
}

export const sauces: Sauce[] = [
  {
    slug: "chimichurri",
    name: "Chimichurri",
    category: "akdeniz",
    icon: "🌿",
    shortDescription: "Arjantin usulü maydanoz bazlı sos, ızgara etler için klasik",
    description: "Arjantin'in milli sosu olan Chimichurri, taze maydanoz, sarımsak, sirke ve zeytinyağı ile hazırlanan, ızgara etlerin vazgeçilmezi olan canlı yeşil renkli bir sostur. Özellikle kırmızı etlerle mükemmel uyum sağlar.",
    difficulty: "Kolay",
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    origin: "Arjantin",
    ingredients: [
      { item: "Taze maydanoz", amount: "1 demet (50g)", note: "İnce doğranmış" },
      { item: "Taze kekik", amount: "1 yemek kaşığı", note: "Veya 1 tatlı kaşığı kuru" },
      { item: "Sarımsak", amount: "4-5 diş", note: "Ezilmiş" },
      { item: "Kırmızı şarap sirkesi", amount: "3 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "100 ml" },
      { item: "Limon suyu", amount: "1 yemek kaşığı" },
      { item: "Pul biber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm taze otları (maydanoz, kekik) iyice yıkayıp kurulayın",
      "Maydanozu ince ince doğrayın, kekik yapraklarını ayıklayın",
      "Sarımsakları ezin veya çok ince doğrayın",
      "Geniş bir kasede tüm malzemeleri birleştirin",
      "Zeytinyağı ve sirkeyi ekleyip iyice karıştırın",
      "Tuz, karabiber ve pul biberi ekleyin",
      "En az 30 dakika dinlendirin (tercihen 2-3 saat)"
    ],
    tips: [
      "Sosun lezzeti dinlendikçe artar, 1 gün önceden hazırlayabilirsiniz",
      "Daha güçlü tat için acı pul biber (arbol) ekleyin",
      "Kıyma ile karıştırıp hamburger sosu olarak da kullanabilirsiniz",
      "Kullanmadan önce oda sıcaklığına getirin"
    ],
    pairings: {
      cuts: ["dana-antrikot", "dana-riploin", "dana-sirloin", "kuzu-pirzola", "dana-t-bone", "dana-brisket"],
      methods: ["Izgara", "Tava", "Fırın", "Smoking"],
      occasions: ["BBQ partileri", "Arjantin usulü yemekler", "Yaz akşamları", "Steak yemekleri"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1-2 hafta",
      freezer: "Dondurucuda 3 ay"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 165,
      fat: 17,
      sodium: 280,
      carbs: 1
    },
    tags: ["vegan", "glutensiz", "akdeniz", "arjantin", "hızlı", "taze"]
  },
  {
    slug: "bbq-sos",
    name: "Klasik BBQ Sosu",
    category: "amerika",
    icon: "🔥",
    shortDescription: "Tatlı, dumanlı ve baharatlı - Amerika klasiği",
    description: "Klasik Amerikan BBQ sosu, ketçap bazlı, tatlı, dumanlı ve baharatlı lezzetiyle ızgara etlerin, kanatların ve brisket'in en iyi arkadaşı. Yavaş pişirilerek yoğunlaştırılan bu sos, etlerin üzerine sürüldüğünde karamelize olarak mükemmel bir kabuk oluşturur.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 25,
    servings: 8,
    origin: "Amerika",
    ingredients: [
      { item: "Ketçap", amount: "2 su bardağı (400g)" },
      { item: "Elma sirkesi", amount: "1/4 su bardağı" },
      { item: "Esmer şeker", amount: "1/3 su bardağı" },
      { item: "Worcestershire sosu", amount: "2 yemek kaşığı" },
      { item: "Sarımsak tozu", amount: "1 tatlı kaşığı" },
      { item: "Soğan tozu", amount: "1 tatlı kaşığı" },
      { item: "Paprika", amount: "1 tatlı kaşığı" },
      { item: "Likit smoke", amount: "1 tatlı kaşığı", note: "Opsiyonel, dumanlı tat için" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/2 tatlı kaşığı" },
      { item: "Hardal tozu", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Tüm malzemeleri orta boy bir tencereye koyun",
      "Orta ateşte kaynayana kadar karıştırarak ısıtın",
      "Ateşi kısın ve 20-25 dakika kısık ateşte pişirin",
      "Ara sıra karıştırarak sosun koyulaşmasını sağlayın",
      "Koyulaşınca ocaktan alın ve soğumaya bırakın",
      "Cam kavanozda buzdolabında saklayın"
    ],
    tips: [
      "Acılı versiyon için cayenne biberi ekleyin",
      "Memphis usulü için daha az tatlı, daha çok baharatlı yapın",
      "Kanat, brisket ve kaburga için idealdir",
      "Pişmiş etin üzerine son 10 dakikada sürün - yanmasın diye"
    ],
    pairings: {
      cuts: ["dana-brisket", "dana-short-ribs", "dana-chuck", "tavuk-kanat", "tavuk-but", "kuzu-kaburga"],
      methods: ["Smoking", "Izgara", "Fırın", "Braising"],
      occasions: ["BBQ partileri", "4 Temmuz", "Aile toplantıları", "Spor etkinlikleri"]
    },
    storageInfo: {
      fridge: "Buzdolabında 2-3 hafta",
      freezer: "Dondurucuda 6 ay"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 85,
      fat: 0.3,
      sodium: 480,
      carbs: 22
    },
    tags: ["amerika", "tatlı", "dumanlı", "klasik", "yaz"]
  },
  {
    slug: "sarimsakli-yogurt-sosu",
    name: "Sarımsaklı Yoğurt Sosu",
    category: "akdeniz",
    icon: "🥛",
    shortDescription: "Türk mutfağının klasiği - kebap ve ızgara etlerin yanında",
    description: "Türk mutfağının vazgeçilmezi olan sarımsaklı yoğurt sosu, kıvamlı yoğurt, taze sarımsak ve isteğe bağlı otlar ile hazırlanan ferahlatıcı bir sostur. Kebap, ızgara etler ve Adana usulü yemeklerle mükemmel uyum sağlar.",
    difficulty: "Kolay",
    prepTime: 5,
    cookTime: 0,
    servings: 4,
    origin: "Türkiye",
    ingredients: [
      { item: "Süzme yoğurt", amount: "2 su bardağı" },
      { item: "Sarımsak", amount: "2-3 diş", note: "Ezilmiş" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Limon suyu", amount: "1 tatlı kaşığı" },
      { item: "Zeytinyağı", amount: "1 yemek kaşığı" },
      { item: "Taze nane veya kuru nane", amount: "1 tatlı kaşığı" },
      { item: "Kırmızı pul biber", amount: "1/2 tatlı kaşığı", note: "Süslemek için" }
    ],
    instructions: [
      "Yoğurdu bir kaseye alın",
      "Sarımsakları ezin ve yoğurda ekleyin",
      "Tuz, limon suyu ve naneyi ekleyin",
      "İyice karıştırın",
      "Üzerine zeytinyağı gezdirin",
      "Pul biber ile süsleyip servis yapın"
    ],
    tips: [
      "Daha kremsi olması için süzme yoğurt kullanın",
      "Sarımsağı ezdikten sonra 10 dakika bekletin - allisin aktifleşir",
      "Bir gün önceden hazırlayın, lezzeti artar",
      "Adana, Urfa kebabı ve şiş ile mükemmel"
    ],
    pairings: {
      cuts: ["dana-antrikot", "kuzu-pirzola", "kuzu-but", "koyun-but", "dana-chuck", "dana-kıyma"],
      methods: ["Izgara", "Fırın", "Tava", "Braising"],
      occasions: ["Kebab sofraları", "Türk mutfağı", "Aile yemekleri", "Yaz akşamları"]
    },
    storageInfo: {
      fridge: "Buzdolabında 3-5 gün"
    },
    nutritionalInfo: {
      servingSize: 60,
      calories: 75,
      fat: 4,
      sodium: 180,
      carbs: 4
    },
    tags: ["türk", "akdeniz", "ferah", "hızlı", "sağlıklı"]
  },
  {
    slug: "hardal-sosu",
    name: "Hardal Kremalı Sos",
    category: "klasik",
    icon: "💛",
    shortDescription: "Fransız klasiği - kremalı hardal sosu, sığır eti için mükemmel",
    description: "Fransız mutfağının klasik soslarından biri olan hardal kremalı sos, Dijon hardalı, krema ve beyaz şarap ile hazırlanan, sığır etinin yanında servis edilen zarif ve lezzetli bir sostur.",
    difficulty: "Orta",
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    origin: "Fransa",
    ingredients: [
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Şalot veya küçük soğan", amount: "1 adet", note: "İnce doğranmış" },
      { item: "Beyaz şarap", amount: "1/4 su bardağı" },
      { item: "Et suyu", amount: "1/2 su bardağı" },
      { item: "Krema (krema şanti)", amount: "1 su bardağı" },
      { item: "Dijon hardalı", amount: "2 yemek kaşığı" },
      { item: "Tane hardal", amount: "1 yemek kaşığı", note: "Opsiyonel, kıtırlık için" },
      { item: "Tuz ve karabiber", amount: "Damak tadınıza göre" },
      { item: "Taze kekik veya biberiye", amount: "1 tatlı kaşığı" }
    ],
    instructions: [
      "Tereyağını orta ateşte eritin",
      "Şalotları ekleyip 2-3 dakika kavurun",
      "Beyaz şarabı ekleyin ve yarıya kadar çektirin",
      "Et suyunu ekleyin ve kaynama noktasına getirin",
      "Kremayı ekleyin ve kısık ateşte 5 dakika pişirin",
      "Hardalı ekleyip karıştırın",
      "Tuz, karabiber ve taze otları ekleyin",
      "Koyulaşana kadar 2-3 dakika daha pişirin"
    ],
    tips: [
      "Koyu bir sos için kremayı daha fazla çektirin",
      "Dana bonfile veya antrikot ile mükemmel",
      "Tane hardal ekstra doku ve lezzet katar",
      "Servis öncesi dinlendirin"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-riploin", "dana-sirloin", "dana-t-bone", "dana-flank", "tavuk-gogsu"],
      methods: ["Tava", "Izgara", "Sous Vide", "Fırın"],
      occasions: ["Romantik yemekler", "Şef yemekleri", "Özel davetler", "Steakhouse"]
    },
    storageInfo: {
      fridge: "Buzdolabında 3-4 gün"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 195,
      fat: 18,
      sodium: 220,
      carbs: 3
    },
    tags: ["fransa", "klasik", "krema", "zarif", "hızlı"]
  },
  {
    slug: "teriyaki",
    name: "Teriyaki Sosu",
    category: "asya",
    icon: "🥢",
    shortDescription: "Japon klasiği - tatlı, tuzlu ve parlak",
    description: "Japon mutfağının en sevilen soslarından biri olan Teriyaki, soya sosu, mirin, şeker ve susam yağı ile hazırlanan, tatlı ve tuzlu dengesiyle etlere parlak bir kaplama veren klasik bir sostur.",
    difficulty: "Kolay",
    prepTime: 5,
    cookTime: 10,
    servings: 6,
    origin: "Japonya",
    ingredients: [
      { item: "Soya sosu", amount: "1/2 su bardağı" },
      { item: "Mirin", amount: "1/4 su bardağı", note: "Veya 2 yemek kaşığı şeker + 1 yemek kaşığı sake" },
      { item: "Sake veya kuru beyaz şarap", amount: "2 yemek kaşığı" },
      { item: "Esmer şeker", amount: "2 yemek kaşığı" },
      { item: "Taze zencefil", amount: "1 tatlı kaşığı", note: "Rendelenmiş" },
      { item: "Sarımsak", amount: "2 diş", note: "Ezilmiş" },
      { item: "Susam yağı", amount: "1 tatlı kaşığı" },
      { item: "Mısır nişastası", amount: "1 tatlı kaşığı", note: "1 yemek kaşığı su ile karıştırılmış" },
      { item: "Susam", amount: "Süslemek için" },
      { item: "Yeşil soğan", amount: "2 dal", note: "İnce doğranmış, süslemek için" }
    ],
    instructions: [
      "Küçük bir tencerede soya sosu, mirin, sake, şeker, zencefil ve sarımsağı karıştırın",
      "Orta ateşte kaynayana kadar ısıtın",
      "Şeker eriyinceye kadar karıştırın",
      "Mısır nişastası karışımını ekleyin",
      "Sos koyulaşana kadar 2-3 dakika karıştırın",
      "Susam yağını ekleyip ocaktan alın",
      "Etin üzerine gezdirin, susam ve yeşil soğan ile süsleyin"
    ],
    tips: [
      "Marine sosu olarak da kullanabilirsiniz (30 dk - 4 saat)",
      "Marine edip pişirirken son 5 dakika sürün - şeker yanabilir",
      "Tavuk, somon ve dana eti için mükemmel",
      "Koyulaştırmak için daha fazla nişasta ekleyin"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "tavuk-kanat", "dana-riploin", "dana-sirloin", "dana-flank"],
      methods: ["Tava", "Izgara", "Fırın", "Wok"],
      occasions: ["Asya mutfağı", "Hızlı yemekler", "Hafta içi", "Sushi gecesi"]
    },
    storageInfo: {
      fridge: "Buzdolabında 2 hafta",
      freezer: "Dondurucuda 3 ay"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 45,
      fat: 1,
      sodium: 720,
      carbs: 6
    },
    tags: ["japonya", "asya", "tatlı", "hızlı", "parlak"]
  },
  {
    slug: "pesto",
    name: "Fesleğen Pesto",
    category: "akdeniz",
    icon: "🌱",
    shortDescription: "İtalyan klasiği - fesleğen, çam fıstığı ve parmesan",
    description: "İtalya'nın Ligurya bölgesinden gelen klasik pesto, taze fesleğen, çam fıstığı, sarımsak, parmesan peyniri ve zeytinyağı ile hazırlanan yeşil, aromatik ve çok yönlü bir sostur.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    origin: "İtalya",
    ingredients: [
      { item: "Taze fesleğen yaprağı", amount: "2 su bardağı (50g)", note: "Sıkıca paketlenmiş" },
      { item: "Çam fıstığı", amount: "1/4 su bardağı" },
      { item: "Parmesan peyniri", amount: "1/2 su bardağı", note: "Rendelenmiş" },
      { item: "Sarımsak", amount: "2 diş" },
      { item: "Zeytinyağı", amount: "1/2 su bardağı" },
      { item: "Limon suyu", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/4 tatlı kaşığı" }
    ],
    instructions: [
      "Çam fıstıklarını kuru tavada 2-3 dakika kavurun (altın rengi olana kadar)",
      "Fesleğen yapraklarını yıkayıp iyice kurulayın",
      "Mutfak robotuna fesleğen, çam fıstığı, sarımsak ve parmesanı koyun",
      "Kaba çekilene kadar birkaç kez çalıştırın",
      "Zeytinyağını yavaş yavaş ekleyerek karıştırın",
      "Limon suyu, tuz ve karabiberi ekleyin",
      "Pürüzsüz olana kadar çalıştırın (çok fazla değil - doku kalmalı)"
    ],
    tips: [
      "Ceviz veya badem ile çam fıstığı yerine",
      "Makarna, ızgara tavuk, kapama etler için mükemmel",
      "Üzerine zeytinyağı gezdirip buzdolabında saklayın - kararmaz",
      "Dondurucuda buz kalıplarında 6 aya kadar saklanabilir"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "dana-sirloin", "kuzu-pirzola", "tavuk-bonfile"],
      methods: ["Izgara", "Tava", "Fırın", "Haşlama"],
      occasions: ["İtalyan mutfağı", "Yaz yemekleri", "Hafif yemekler", "Akdeniz sofraları"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta (zeytinyağı ile kaplı)"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 195,
      fat: 19,
      sodium: 220,
      carbs: 2
    },
    tags: ["italya", "akdeniz", "vejetaryen", "hızlı", "çok yönlü"]
  },
  {
    slug: "demi-glace",
    name: "Demi-Glace (Koyu Et Sosu)",
    category: "klasik",
    icon: "🍷",
    shortDescription: "Fransız şeflerin klasiği - yoğun et lezzeti",
    description: "Fransız haute cuisine'in temel taşlarından biri olan demi-glace, koyu et suyu ve Espagnole sosunun yarıya indirilmesiyle elde edilen, yoğun et lezzetiyle premium et yemeklerine eşlik eden lüks bir sostur.",
    difficulty: "Zor",
    prepTime: 20,
    cookTime: 360,
    servings: 8,
    origin: "Fransa",
    ingredients: [
      { item: "Dana kemikli eti (shank)", amount: "1 kg", note: "Kemikleriyle birlikte" },
      { item: "Soğan", amount: "2 adet", note: "Dörde bölünmüş" },
      { item: "Havuç", amount: "2 adet", note: "Doğranmış" },
      { item: "Kereviz sapı", amount: "2 sap", note: "Doğranmış" },
      { item: "Domates püresi", amount: "2 yemek kaşığı" },
      { item: "Kırmızı şarap", amount: "1 su bardağı" },
      { item: "Su", amount: "3 litre" },
      { item: "Biberiye, kekik, defne yaprağı", amount: "1'er dal" },
      { item: "Tane karabiber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "Damak tadınıza göre" }
    ],
    instructions: [
      "Fırını 200°C'ye ısıtın",
      "Dana kemiklerini ve etlerini fırın tepsisine yerleştirin",
      "Üzerine domates püresi sürün",
      "Sebzeleri ekleyin ve 45 dakika kahverengi olana kadar kavurun",
      "Tencereye alın, kırmızı şarap ekleyin ve yarıya çektirin",
      "Suyumuzu ekleyin, kaynama noktasına getirin",
      "Köpüğünü alın, baharatları ekleyin",
      "Kısık ateşte 4-6 saat pişirin (süzgeçten geçirin)",
      "Tekrar tencereye alıp yarıya çektirin (1-2 saat)",
      "Tuz ve karabiberi ekleyin"
    ],
    tips: [
      "Dondurucuda buz kalıplarında 6 ay saklanabilir",
      "Bonfile, antrikot ve rack of lamb için mükemmel",
      "Son aşamada tereyağı ekleyerek parlatın (monte au beurre)",
      "Büyük parti öncesi toplu yapılabilir"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "kuzu-rack", "dana-brisket", "kuzu-but"],
      methods: ["Tava", "Fırın", "Sous Vide", "Izgara"],
      occasions: ["Şef yemekleri", "Özel davetler", "Romantik yemekler", "Restoran kalitesinde ev yemekleri"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta",
      freezer: "Dondurucuda 6 ay"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 65,
      fat: 4,
      sodium: 380,
      carbs: 2
    },
    tags: ["fransa", "klasik", "premium", "lüks", "yavaş pişirme"]
  },
  {
    slug: "sarimsakli-tereyagi",
    name: "Sarımsaklı Tereyağı (Steak Butter)",
    category: "klasik",
    icon: "🧈",
    shortDescription: "Steakhouse klasiği - sarımsak, kekik ve tereyağı",
    description: "Amerikan steakhouse'larının vazgeçilmezi olan sarımsaklı tereyağı, yumuşatılmış tereyağı, kavrulmuş sarımsak, taze kekik ve limon kabuğu ile hazırlanan, sıcak etin üzerinde eriyen lüks bir sostur.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 5,
    servings: 8,
    origin: "Amerika",
    ingredients: [
      { item: "Tereyağı", amount: "250g", note: "Oda sıcaklığında yumuşamış" },
      { item: "Sarımsak", amount: "4 diş", note: "Çok ince doğranmış" },
      { item: "Taze kekik", amount: "1 yemek kaşığı", note: "Doğranmış" },
      { item: "Taze biberiye", amount: "1 tatlı kaşığı", note: "Çok ince doğranmış" },
      { item: "Limon kabuğu", amount: "1 limon", note: "Rendelenmiş" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/4 tatlı kaşığı" },
      { item: "Kırmızı pul biber", amount: "1/4 tatlı kaşığı", note: "Opsiyonel" }
    ],
    instructions: [
      "Tereyağını oda sıcaklığında yumuşayana kadar bekletin",
      "Sarımsakları küçük bir tavada tereyağının 1 yemek kaşığı ile altın rengi olana kadar kavurun",
      "Soğumaya bırakın",
      "Yumuşamış tereyağına kavrulmuş sarımsağı ekleyin",
      "Taze otları, limon kabuğunu, tuz, karabiber ve pul biberi ekleyin",
      "İyice karıştırın",
      "Streç film üzerine koyup rulo haline getirin",
      "Buzdolabında 1-2 saat sertleştirin",
      "Etin üzerine 1-2 cm dilimler halinde yerleştirin"
    ],
    tips: [
      "Marine sosu olarak da kullanılabilir",
      "Steak'in üzerine 1-2 dakika pişmesine yakın ekleyin",
      "Folyo veya streç filme sarıp dondurucuda 3 ay saklanabilir",
      "Bezelye, patates püresi ile de mükemmel"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "dana-t-bone", "dana-sirloin", "kuzu-pirzola"],
      methods: ["Tava", "Izgara", "Sous Vide", "Fırın"],
      occasions: ["Steakhouse", "Özel yemekler", "Romantik akşam", "BBQ"]
    },
    storageInfo: {
      fridge: "Buzdolabında 2 hafta",
      freezer: "Dondurucuda 3 ay"
    },
    nutritionalInfo: {
      servingSize: 20,
      calories: 140,
      fat: 16,
      sodium: 130,
      carbs: 0.5
    },
    tags: ["amerika", "klasik", "hızlı", "lüks", "steakhouse"]
  },
  {
    slug: "mantar-sosu",
    name: "Kremalı Mantar Sosu",
    category: "klasik",
    icon: "🍄",
    shortDescription: "Fransız klasiği - mantar, krema ve beyaz şarap",
    description: "Fransız mutfağının klasik soslarından biri olan kremalı mantar sosu, sote mantarlar, krema, beyaz şarap ve taze kekik ile hazırlanan, et yemeklerine zengin ve topraksı lezzet katan zarif bir sostur.",
    difficulty: "Orta",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    origin: "Fransa",
    ingredients: [
      { item: "Tereyağı", amount: "3 yemek kaşığı" },
      { item: "Soğan veya şalot", amount: "1 adet", note: "İnce doğranmış" },
      { item: "Karışık mantar", amount: "400g", note: "Dilimlenmiş (kültür, istiridye, chanterelle)" },
      { item: "Sarımsak", amount: "2 diş", note: "Ezilmiş" },
      { item: "Beyaz şarap", amount: "1/4 su bardağı" },
      { item: "Et suyu", amount: "1/2 su bardağı" },
      { item: "Krema", amount: "1/2 su bardağı" },
      { item: "Taze kekik", amount: "1 tatlı kaşığı" },
      { item: "Tuz ve karabiber", amount: "Damak tadınıza göre" },
      { item: "Maydanoz", amount: "Süslemek için" }
    ],
    instructions: [
      "Tereyağını geniş bir tavada orta-yüksek ateşte eritin",
      "Soğanları ekleyip 3-4 dakika yumuşayana kadar kavurun",
      "Mantarları ekleyin (parti halinde ekleyin - suyunu bırakmasınlar)",
      "Yüksek ateşte 5-7 dakika kızartın - suyu buharlaşana kadar",
      "Sarımsakları ekleyin, 1 dakika kavurun",
      "Beyaz şarabı ekleyin ve yarıya çektirin",
      "Et suyunu ekleyin ve 3-4 dakika pişirin",
      "Kremayı ekleyin, kısık ateşte 5 dakika koyulaştırın",
      "Taze kekik, tuz ve karabiberi ekleyin",
      "Maydanoz ile süsleyip servis yapın"
    ],
    tips: [
      "Kuru mantar (porcini) de ekleyebilirsiniz - daha derin lezzet",
      "Dana bonfile, antrikot ve tavuk göğsü ile mükemmel",
      "Servis öncesi taze limon suyu damlatın",
      "Yanında patates püresi veya pilav ile servis yapın"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-riploin", "dana-sirloin", "dana-flank", "tavuk-gogsu", "kuzu-pirzola"],
      methods: ["Tava", "Fırın", "Sous Vide"],
      occasions: ["Klasik Avrupa mutfağı", "Sonbahar yemekleri", "Kış sofraları", "Aile yemekleri"]
    },
    storageInfo: {
      fridge: "Buzdolabında 3-4 gün"
    },
    nutritionalInfo: {
      servingSize: 80,
      calories: 185,
      fat: 16,
      sodium: 320,
      carbs: 6
    },
    tags: ["fransa", "klasik", "krema", "mantarlı", "zarif"]
  },
  {
    slug: "kozlenmis-biber-sosu",
    name: "Közlenmiş Biber Sosu",
    category: "akdeniz",
    icon: "🌶️",
    shortDescription: "Türk mutfağından - közlenmiş kırmızı biber salçası",
    description: "Türk mutfağının eşsiz lezzetlerinden biri olan közlenmiş biber sosu, közlenmiş kırmızı biber, salça, sarımsak ve baharatlarla hazırlanan, ızgara etlerin yanında mükemmel olan tatlımsı ve dumanlı bir sostur.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    origin: "Türkiye",
    ingredients: [
      { item: "Közlenmiş kırmızı biber", amount: "4 adet (400g)" },
      { item: "Biber salçası", amount: "2 yemek kaşığı" },
      { item: "Domates salçası", amount: "1 yemek kaşığı" },
      { item: "Sarımsak", amount: "3 diş", note: "Ezilmiş" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "Limon suyu", amount: "1 yemek kaşığı" },
      { item: "Sumak", amount: "1 tatlı kaşığı" },
      { item: "Pul biber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Maydanoz", amount: "1/4 demet", note: "Doğranmış" }
    ],
    instructions: [
      "Közlenmiş biberlerin kabuklarını soyun",
      "Çekirdeklerini çıkarın",
      "Mutfak robotuna biberleri koyun",
      "Sarımsak, salça, zeytinyağı, limon suyu ekleyin",
      "Pürüzsüz olana kadar çekin",
      "Tavada orta ateşte 5-7 dakika kavurun",
      "Sumak, pul biber, tuz ekleyin",
      "Maydanoz ile süsleyin"
    ],
    tips: [
      "Közleme yapamıyorsanız konserve közlenmiş biber kullanabilirsiniz",
      "Daha acılı versiyon için sivri biber ekleyin",
      "Kahvaltıda, ızgara etlerin yanında, sandviçlerde kullanılabilir",
      "Folyo veya streç film ile kaplı buzdolabında 1 hafta"
    ],
    pairings: {
      cuts: ["dana-antrikot", "kuzu-pirzola", "kuzu-but", "koyun-but", "dana-kıyma", "tavuk-kanat"],
      methods: ["Izgara", "Fırın", "Tava"],
      occasions: ["Kahvaltı", "Türk mutfağı", "Mezeler", "Yaz yemekleri"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 65,
      fat: 4,
      sodium: 280,
      carbs: 6
    },
    tags: ["türk", "akdeniz", "vegan", "hızlı", "baharatlı"]
  },
  {
    slug: "salsa-verde",
    name: "Salsa Verde (İtalyan)",
    category: "akdeniz",
    icon: "🌿",
    shortDescription: "İtalyan yeşil sosu - kapari, ançüez ve maydanoz",
    description: "İtalyan mutfağının klasik yeşil sosu olan Salsa Verde, maydanoz, kapari, ançüez, sarımsak ve zeytinyağı ile hazırlanan, et ve balık yemeklerine parlak ve tuzlu lezzet katan çok yönlü bir sostur.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    origin: "İtalya",
    ingredients: [
      { item: "Maydanoz", amount: "1 demet (40g)", note: "Saplarıyla birlikte" },
      { item: "Frenk soğanı", amount: "1/2 demet" },
      { item: "Kapari", amount: "2 yemek kaşığı", note: "Duranmış" },
      { item: "Ançüez filetoları", amount: "4-5 adet", note: "Yağında" },
      { item: "Sarımsak", amount: "1-2 diş" },
      { item: "Hardal", amount: "1 tatlı kaşığı" },
      { item: "Limon suyu", amount: "1 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "100 ml" },
      { item: "Sirke (kırmızı şarap)", amount: "1 yemek kaşığı" },
      { item: "Tuz ve karabiber", amount: "Damak tadınıza göre" }
    ],
    instructions: [
      "Tüm otları yıkayıp iyice kurulayın",
      "Maydanoz ve frenk soğanını doğrayın",
      "Ançüezleri kabaca doğrayın",
      "Mutfak robotuna tüm malzemeleri koyun",
      "Kaba çekilene kadar çalıştırın",
      "Tuz, karabiberi ekleyip karıştırın",
      "Servis yapmadan önce en az 30 dakika dinlendirin"
    ],
    tips: [
      "Marine sosu olarak da kullanılabilir",
      "Marine edip pişirirken son 5 dakika sürün",
      "Tavuk, dana eti ve kuzu için mükemmel",
      "Marine sosu olarak 30 dk - 4 saat kullanılabilir"
    ],
    pairings: {
      cuts: ["dana-sirloin", "dana-flank", "tavuk-gogsu", "tavuk-but", "kuzu-pirzola", "dana-riploin"],
      methods: ["Izgara", "Tava", "Fırın", "Haşlama"],
      occasions: ["İtalyan mutfağı", "Akdeniz sofraları", "Hafif yemekler"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 175,
      fat: 18,
      sodium: 480,
      carbs: 1
    },
    tags: ["italya", "akdeniz", "hızlı", "tuzlu", "çok yönlü"]
  },
  {
    slug: "tzatziki",
    name: "Tzatziki (Yunan Cacığı)",
    category: "akdeniz",
    icon: "🥒",
    shortDescription: "Yunan klasiği - salatalık ve sarımsaklı yoğurt",
    description: "Yunan mutfağının vazgeçilmezi olan Tzatziki, süzme yoğurt, rendelenmiş salatalık, sarımsak ve dereotu ile hazırlanan, ferahlatıcı ve kremalı bir sostur. Özellikle ızgara etlerle mükemmel uyum sağlar.",
    difficulty: "Kolay",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    origin: "Yunanistan",
    ingredients: [
      { item: "Süzme yoğurt", amount: "2 su bardağı" },
      { item: "Salatalık", amount: "1 orta boy", note: "Rendelenmiş, suyu sıkılmış" },
      { item: "Sarımsak", amount: "2-3 diş", note: "Ezilmiş" },
      { item: "Taze dereotu", amount: "2 yemek kaşığı", note: "Doğranmış" },
      { item: "Zeytinyağı", amount: "1 yemek kaşığı" },
      { item: "Limon suyu", amount: "1 tatlı kaşığı" },
      { item: "Beyaz şarap sirkesi", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Karabiber", amount: "1/4 tatlı kaşığı" },
      { item: "Nane", amount: "1 tatlı kaşığı", note: "Opsiyonel" }
    ],
    instructions: [
      "Salatalığı rendeleyin ve suyunu iyice sıkın (en önemli adım)",
      "Sarımsakları ezin",
      "Geniş bir kasede tüm malzemeleri karıştırın",
      "Tuz, karabiberi ekleyip tatlandırın",
      "Üzerini streç film ile kapatın",
      "En az 1 saat (tercihen gece boyunca) buzdolabında dinlendirin"
    ],
    tips: [
      "Salatalığın suyunu iyice sıkın - sosu sulandırmasın",
      "Süzme yoğurt veya süzme peynir kullanın",
      "Daha kremsi olması için bir miktar krema ekleyin",
      "Bir gün önceden hazırlayın, lezzeti artar"
    ],
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-but", "dana-kıyma", "tavuk-kanat", "kuzu-rack", "koyun-but"],
      methods: ["Izgara", "Fırın", "Tava", "Souvla"],
      occasions: ["Yunan mutfağı", "Akdeniz sofraları", "Yaz yemekleri", "Mezeler"]
    },
    storageInfo: {
      fridge: "Buzdolabında 4-5 gün"
    },
    nutritionalInfo: {
      servingSize: 60,
      calories: 65,
      fat: 4,
      sodium: 180,
      carbs: 3
    },
    tags: ["yunanistan", "akdeniz", "ferah", "sağlıklı", "hızlı"]
  },
  {
    slug: "kirmizi-sarap-sosu",
    name: "Kırmızı Şarap Sosu",
    category: "klasik",
    icon: "🍷",
    shortDescription: "Fransız klasiği - kırmızı şarap ve et suyu",
    description: "Fransız mutfağının en zarif soslarından biri olan kırmızı şarap sosu, kırmızı şarap, et suyu, şalot ve tereyağı ile hazırlanan, kırmızı etler için mükemmel olan derin ve sofistike bir sostur.",
    difficulty: "Orta",
    prepTime: 5,
    cookTime: 25,
    servings: 4,
    origin: "Fransa",
    ingredients: [
      { item: "Şalot", amount: "3 adet", note: "İnce doğranmış" },
      { item: "Kırmızı şarap", amount: "2 su bardağı (kuru, dolgun)" },
      { item: "Et suyu", amount: "1 su bardağı" },
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Biberiye, kekik", amount: "1 küçük dal" },
      { item: "Tane karabiber", amount: "5-6 adet" },
      { item: "Tuz", amount: "1/4 tatlı kaşığı" },
      { item: "Şeker", amount: "1 çay kaşığı", note: "Şarabın asidini dengeler" }
    ],
    instructions: [
      "Tereyağının 1 yemek kaşığını orta ateşte eritin",
      "Şalotları ekleyip 3-4 dakika yumuşayana kadar kavurun",
      "Kırmızı şarabı ekleyin",
      "Yarıya çekene kadar 5-7 dakika kaynatın",
      "Et suyunu, biberiyeyi, tane karabiberi ekleyin",
      "Kısık ateşte 10-15 dakika daha pişirin (yarıya çekilene kadar)",
      "Baharatları çıkarın",
      "Kalan tereyağını ekleyip çırpın (parlatma)",
      "Tuz ve şekeri ekleyip karıştırın"
    ],
    tips: [
      "Kaliteli bir kırmızı şarap kullanın (Cabernet, Merlot, Pinot Noir)",
      "Bonfile, antrikot ve kuzu rack için mükemmel",
      "Servis öncesi süzgeçten geçirebilirsiniz",
      "Tereyağı ile parlatma (monter au beurre) parlaklık verir"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "dana-t-bone", "kuzu-rack", "dana-sirloin"],
      methods: ["Tava", "Izgara", "Fırın", "Sous Vide"],
      occasions: ["Romantik yemekler", "Özel davetler", "Şef yemekleri", "Yıldönümü"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 85,
      fat: 5,
      sodium: 320,
      carbs: 3
    },
    tags: ["fransa", "klasik", "zarif", "şarap", "lüks"]
  },
  {
    slug: "sriracha-mayo",
    name: "Sriracha Mayonez",
    category: "baharatli",
    icon: "🌶️",
    shortDescription: "Hızlı baharatlı sos - sriracha ve mayonez",
    description: "Hızlı ve kolay bir baharatlı sos olan Sriracha Mayonez, kremalı mayonez ve acılı sriracha sosu ile hazırlanan, et ve deniz ürünlerine baharatlı bir lezzet katan modern bir sostur.",
    difficulty: "Kolay",
    prepTime: 3,
    cookTime: 0,
    servings: 4,
    origin: "Asya-Batı füzyon",
    ingredients: [
      { item: "Mayonez", amount: "1/2 su bardağı" },
      { item: "Sriracha sosu", amount: "2-3 yemek kaşığı", note: "Acı seviyesine göre" },
      { item: "Limon suyu", amount: "1 tatlı kaşığı" },
      { item: "Sarımsak tozu", amount: "1/4 tatlı kaşığı" },
      { item: "Tuz", amount: "Bir tutam" }
    ],
    instructions: [
      "Tüm malzemeleri küçük bir kasede birleştirin",
      "İyice karıştırın",
      "Tadına bakın, gerekirse daha fazla sriracha ekleyin",
      "Hemen servis yapın veya buzdolabında saklayın"
    ],
    tips: [
      "Acı seviyesini ayarlamak için sriracha miktarını değiştirin",
      "Bal ekleyerek tatlı-acı denge sağlayın",
      "Hamburger, kanat ve deniz ürünleri için mükemmel",
      "Haftalarca buzdolabında saklanabilir"
    ],
    pairings: {
      cuts: ["tavuk-kanat", "tavuk-but", "dana-kıyma", "dana-brisket", "tavuk-gogsu", "dana-flank"],
      methods: ["Izgara", "Fırın", "Deep Fry", "Tava"],
      occasions: ["Hızlı yemekler", "Hafta içi", "Atıştırmalık", "Modern mutfak"]
    },
    storageInfo: {
      fridge: "Buzdolabında 2 hafta"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 145,
      fat: 16,
      sodium: 240,
      carbs: 1
    },
    tags: ["füzyon", "baharatlı", "hızlı", "modern", "kolay"]
  },
  {
    slug: "satay-sosu",
    name: "Satay (Fıstık) Sosu",
    category: "asya",
    icon: "🥜",
    shortDescription: "Endonezya klasiği - yer fıstığı, hindistancevizi ve baharatlar",
    description: "Güneydoğu Asya'nın sevilen soslarından biri olan Satay, kavrulmuş yer fıstığı, hindistancevizi sütü, baharatlar ve tatlı bir karamelize sos ile hazırlanan, et şişler için mükemmel olan zengin ve kremsi bir sostur.",
    difficulty: "Orta",
    prepTime: 10,
    cookTime: 15,
    servings: 6,
    origin: "Endonezya",
    ingredients: [
      { item: "Yer fıstığı (kavrulmuş, tuzsuz)", amount: "1 su bardağı" },
      { item: "Hindistancevizi sütü", amount: "1 su bardağı" },
      { item: "Kırmızı köri pastası", amount: "2 yemek kaşığı" },
      { item: "Soya sosu", amount: "2 yemek kaşığı" },
      { item: "Esmer şeker", amount: "2 yemek kaşığı" },
      { item: "Limon suyu", amount: "2 yemek kaşığı" },
      { item: "Taze zencefil", amount: "1 yemek kaşığı", note: "Rendelenmiş" },
      { item: "Sarımsak", amount: "3 diş", note: "Ezilmiş" },
      { item: "Sriracha", amount: "1 tatlı kaşığı", note: "Opsiyonel, acı için" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" }
    ],
    instructions: [
      "Yer fıstığını mutfak robotunda kaba çekin",
      "Tavada 1 yemek kaşığı hindistancevizi sütü ile kırmızı köri pastasını 1 dakika kavurun",
      "Sarımsak ve zencefili ekleyin, 30 saniye kavurun",
      "Hindistancevizi sütünü, soya sosunu, esmer şekeri ekleyin",
      "Kaynayana kadar ısıtın",
      "Çekilmiş fıstığı ve limon suyunu ekleyin",
      "Kısık ateşte 10 dakika koyulaşana kadar pişirin",
      "Sriracha ve tuzu ekleyin",
      "Süzgeçten geçirerek pürüzsüz hale getirebilirsiniz"
    ],
    tips: [
      "Marine sosu olarak da kullanılabilir",
      "Marine edip pişirirken son 5 dakika sürün",
      "Tavuk, sığır, kuzu şişlerle mükemmel",
      "Marine sosu olarak 1-4 saat kullanılabilir"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "tavuk-kanat", "dana-sirloin", "kuzu-pirzola", "dana-flank"],
      methods: ["Izgara", "Şiş", "Tava", "Wok"],
      occasions: ["Asya mutfağı", "Yaz partileri", "BBQ", "Tropik temalı yemekler"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta",
      freezer: "Dondurucuda 3 ay"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 195,
      fat: 14,
      sodium: 380,
      carbs: 10
    },
    tags: ["asya", "endonezya", "fıstık", "kremsi", "baharatlı"]
  },
  {
    slug: "kajun-sosu",
    name: "Cajun Baharatlı Sos",
    category: "baharatli",
    icon: "🌶️",
    shortDescription: "Louisiana klasiği - baharatlı ve dumanlı",
    description: "Amerika'nın Louisiana eyaletinden gelen Cajun baharat sosu, paprika, cayenne, sarımsak, kekik ve biber ile hazırlanan, güçlü lezzetiyle et ve deniz ürünlerine karakter katan baharatlı bir sostur.",
    difficulty: "Kolay",
    prepTime: 5,
    cookTime: 10,
    servings: 6,
    origin: "Amerika (Louisiana)",
    ingredients: [
      { item: "Paprika", amount: "2 yemek kaşığı" },
      { item: "Cayenne biberi", amount: "1-2 tatlı kaşığı", note: "Acı seviyesine göre" },
      { item: "Sarımsak tozu", amount: "1 yemek kaşığı" },
      { item: "Soğan tozu", amount: "1 yemek kaşığı" },
      { item: "Kekik (kuru)", amount: "1 yemek kaşığı" },
      { item: "Frenk kimyonu", amount: "1 tatlı kaşığı" },
      { item: "Karabiber", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1 tatlı kaşığı" },
      { item: "Kırmızı biber", amount: "1 tatlı kaşığı", note: "Kıyılmış" }
    ],
    instructions: [
      "Tüm baharatları bir kasede karıştırın",
      "İyice harmanlayın",
      "Hava geçirmez bir kavanozda saklayın"
    ],
    tips: [
      "Marine sosu olarak da kullanılabilir",
      "Marine edip pişirirken son 5 dakika sürün",
      "Tavuk, deniz ürünleri, kuzu şişlerle mükemmel",
      "Marine sosu olarak 30 dk - 4 saat kullanılabilir",
      "Acı seviyesini cayenne miktarıyla ayarlayın"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-kanat", "tavuk-but", "kuzu-pirzola", "dana-sirloin", "dana-flank"],
      methods: ["Izgara", "Fırın", "Tava", "Blackening"],
      occasions: ["Cajun mutfağı", "BBQ", "Güney Amerika", "Parti yemekleri"]
    },
    storageInfo: {
      fridge: "Kuru yerde 6 ay"
    },
    nutritionalInfo: {
      servingSize: 5,
      calories: 15,
      fat: 0.5,
      sodium: 380,
      carbs: 3
    },
    tags: ["amerika", "baharatlı", "kuru rub", "hızlı", "louisiana"]
  },
  {
    slug: "pepper-sosu",
    name: "Karabiber Sosu (Pepper Sauce)",
    category: "klasik",
    icon: "⚫",
    shortDescription: "Fransız klasiği - kremalı karabiber sosu, steak klasik",
    description: "Fransız bistro mutfağının klasiği olan karabiber sosu, taze çekilmiş karabiber, krema, brendi ve et suyu ile hazırlanan, steak'in üzerine dökülen koyu ve baharatlı bir sostur.",
    difficulty: "Orta",
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    origin: "Fransa",
    ingredients: [
      { item: "Tereyağı", amount: "2 yemek kaşığı" },
      { item: "Şalot", amount: "2 adet", note: "İnce doğranmış" },
      { item: "Taze karabiber", amount: "2 yemek kaşığı", note: "Kaba çekilmiş" },
      { item: "Brendi veya konyak", amount: "2 yemek kaşığı" },
      { item: "Et suyu", amount: "1/2 su bardağı" },
      { item: "Krema", amount: "1/2 su bardağı" },
      { item: "Worcestershire sosu", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "Bir tutam" }
    ],
    instructions: [
      "Tereyağını orta ateşte eritin",
      "Şalotları ekleyip 2-3 dakika yumuşayana kadar kavurun",
      "Karabiberi ekleyin, 1 dakika kavurun (kokusu çıksın)",
      "Brendiyi ekleyin, 30 saniye pişirin (ateş alabilir)",
      "Et suyunu ekleyin, yarıya çektirin",
      "Kremayı ekleyin, kısık ateşte 5-7 dakika koyulaştırın",
      "Worcestershire sosunu ekleyin",
      "Tuz ile tatlandırın",
      "Süzgeçten geçirin veya olduğu gibi servis yapın"
    ],
    tips: [
      "Taze çekilmiş karabiber çok önemli - önceden çekilmiş kullanmayın",
      "Bonfile, antrikot, tavuk göğsü ile mükemmel",
      "Patates kızartması veya püresi ile servis yapın",
      "Brendi yerine konyak veya kırmızı şarap kullanabilirsiniz"
    ],
    pairings: {
      cuts: ["dana-bonfile", "dana-antrikot", "dana-riploin", "dana-sirloin", "dana-t-bone", "tavuk-gogsu"],
      methods: ["Tava", "Izgara", "Sous Vide"],
      occasions: ["Bistro yemekleri", "Steakhouse", "Fransız mutfağı", "Özel yemekler"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 195,
      fat: 18,
      sodium: 280,
      carbs: 3
    },
    tags: ["fransa", "klasik", "karabiber", "krema", "bistro"]
  },
  {
    slug: "ahududu-sosu",
    name: "Ahududu (Frambuaz) Sosu",
    category: "hafif",
    icon: "🍇",
    shortDescription: "Tatlı ve meyveli - kuzu eti için klasik",
    description: "Fransız mutfağının klasik soslarından biri olan ahududu sosu, taze veya dondurulmuş ahududu, şeker, kırmızı şarap veya portakal likörü ile hazırlanan, özellikle kuzu etiyle mükemmel olan tatlı ve asidik dengeli bir sostur.",
    difficulty: "Kolay",
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    origin: "Fransa",
    ingredients: [
      { item: "Ahududu (taze veya dondurulmuş)", amount: "2 su bardağı (200g)" },
      { item: "Şeker", amount: "1/3 su bardağı" },
      { item: "Kırmızı şarap veya portakal suyu", amount: "1/4 su bardağı" },
      { item: "Limon suyu", amount: "1 yemek kaşığı" },
      { item: "Tereyağı", amount: "1 yemek kaşığı" },
      { item: "Mısır nişastası", amount: "1 tatlı kaşığı", note: "1 yemek kaşığı su ile" }
    ],
    instructions: [
      "Küçük bir tencerede ahududu, şeker ve şarap/portakal suyunu karıştırın",
      "Orta ateşte 5 dakika pişirin, hafifçe ezin",
      "Limon suyunu ekleyin",
      "Mısır nişastası karışımını ekleyin",
      "Sos koyulaşana kadar 2-3 dakika karıştırın",
      "Tereyağını ekleyip karıştırın (parlatma)",
      "Süzgeçten geçirerek çekirdekleri ayırabilirsiniz"
    ],
    tips: [
      "Dondurulmuş ahududu yıl boyu kullanılabilir",
      "Grand Marnier veya Cointreau ekleyebilirsiniz",
      "Kuzu rack, kuzu pirzola ve kuzu but için mükemmel",
      "Kek veya dondurma için de kullanılabilir"
    ],
    pairings: {
      cuts: ["kuzu-rack", "kuzu-pirzola", "kuzu-but", "kuzu-incik", "dana-bonfile", "tavuk-gogsu"],
      methods: ["Fırın", "Izgara", "Tava", "Sous Vide"],
      occasions: ["Romantik yemekler", "Özel davetler", "Bahar yemekleri", "Fransız mutfağı"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 50,
      calories: 95,
      fat: 1.5,
      sodium: 5,
      carbs: 18
    },
    tags: ["fransa", "tatlı", "meyveli", "kuzu", "zarif"]
  },
  {
    slug: "bal-hardal-sosu",
    name: "Bal Hardal Sosu",
    category: "klasik",
    icon: "🍯",
    shortDescription: "Tatlı ve baharatlı dengesi - tavuk ve kuzuya mükemmel",
    description: "Klasik bal hardal sosu, balla hardalın tatlı-baharatlı dengesini birleştiren, sarımsak ve sirke ile zenginleştirilen, özellikle tavuk, kuzu ve domuz etine mükemmel uyum sağayan basit ama etkili bir sostur.",
    difficulty: "Kolay",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    origin: "Amerika",
    ingredients: [
      { item: "Dijon hardalı", amount: "3 yemek kaşığı" },
      { item: "Tane hardal", amount: "1 yemek kaşığı" },
      { item: "Bal", amount: "3 yemek kaşığı" },
      { item: "Elma sirkesi", amount: "1 yemek kaşığı" },
      { item: "Zeytinyağı", amount: "1 yemek kaşığı" },
      { item: "Sarımsak", amount: "1 diş", note: "Ezilmiş" },
      { item: "Tuz ve karabiber", amount: "Damak tadınıza göre" },
      { item: "Taze kekik", amount: "1 tatlı kaşığı", note: "Opsiyonel" }
    ],
    instructions: [
      "Küçük bir kasede hardal, bal, sirke ve zeytinyağını karıştırın",
      "Sarımsak ve kekiği ekleyin",
      "Tuz ve karabiberi ekleyin",
      "İyice çırpın",
      "Marine sosu olarak kullanacaksanız 30 dk - 4 saat marine edin",
      "Pişmiş etin üzerine gezdirin"
    ],
    tips: [
      "Marine sosu olarak da mükemmel",
      "Marine edip pişirirken son 5 dakika sürün",
      "Tavuk, kuzu ve domuz eti ile mükemmel",
      "Marine sosu olarak 30 dk - 4 saat kullanılabilir",
      "Daha tatlı olması için daha fazla bal ekleyin"
    ],
    pairings: {
      cuts: ["tavuk-gogsu", "tavuk-but", "tavuk-kanat", "kuzu-pirzola", "kuzu-but", "dana-sirloin"],
      methods: ["Fırın", "Izgara", "Tava", "Sous Vide"],
      occasions: ["Günlük yemekler", "Aile sofraları", "Hızlı yemekler", "BBQ"]
    },
    storageInfo: {
      fridge: "Buzdolabında 2 hafta"
    },
    nutritionalInfo: {
      servingSize: 30,
      calories: 85,
      fat: 3,
      sodium: 220,
      carbs: 13
    },
    tags: ["hızlı", "tatlı", "tavuk", "kolay", "çok yönlü"]
  },
  {
    slug: "hummus",
    name: "Hummus",
    category: "akdeniz",
    icon: "🫘",
    shortDescription: "Nohut bazlı kremalı Akdeniz sosu",
    description: "Akdeniz mutfağının vazgeçilmezi olan hummus, nohut, tahin, limon suyu ve sarımsak ile hazırlanan, kremalı ve besleyici bir sostur. Izgara etlerin yanında mükemmel bir meze veya sos olarak servis edilir.",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    origin: "Orta Doğu",
    ingredients: [
      { item: "Haşlanmış nohut", amount: "2 su bardağı (400g)" },
      { item: "Tahin", amount: "3 yemek kaşığı" },
      { item: "Limon suyu", amount: "3 yemek kaşığı" },
      { item: "Sarımsak", amount: "1-2 diş", note: "Ezilmiş" },
      { item: "Zeytinyağı", amount: "3 yemek kaşığı" },
      { item: "Kimyon", amount: "1 tatlı kaşığı" },
      { item: "Tuz", amount: "1/2 tatlı kaşığı" },
      { item: "Soğuk su", amount: "2-4 yemek kaşığı", note: "Kıvam ayarlamak için" },
      { item: "Paprika ve zeytinyağı", amount: "Süslemek için" }
    ],
    instructions: [
      "Nohutları süzün ve yıkayın (bir kısmının kabuğunu soyabilirsiniz - daha pürüzsüz olur)",
      "Mutfak robotuna nohut, tahin, limon suyu, sarımsağı koyun",
      "Pürüzsüz olana kadar çekin",
      "Zeytinyağını ve soğuk suyu yavaş yavaş ekleyin",
      "Kimyon ve tuzu ekleyin",
      "Kremalı kıvama gelene kadar çalıştırın",
      "Tadına bakın, limon veya tuz ekleyin",
      "Servis tabağına alın, ortasını oyun",
      "Zeytinyağı ve paprika ile süsleyin"
    ],
    tips: [
      "Daha pürüzsüz olması için nohut kabuklarını soyun",
      "Tahin iyi kalitede olmalı - kuru, eski tahin kullanmayın",
      "Üzerini zeytinyağı ile kaplayın - kurumasın",
      "Kıvam ayarlamak için soğuk su kullanın - sıcak değil"
    ],
    pairings: {
      cuts: ["kuzu-pirzola", "kuzu-kol", "dana-kıyma", "tavuk-kanat", "kuzu-but", "koyun-but"],
      methods: ["Izgara", "Fırın", "Şiş", "Tava"],
      occasions: ["Mezeler", "Akdeniz sofraları", "Vejetaryen", "Atıştırmalık"]
    },
    storageInfo: {
      fridge: "Buzdolabında 1 hafta"
    },
    nutritionalInfo: {
      servingSize: 60,
      calories: 110,
      fat: 7,
      sodium: 220,
      carbs: 10
    },
    tags: ["orta doğu", "akdeniz", "vegan", "sağlıklı", "kremsi"]
  }
];

export const categoryLabels: Record<SauceCategory, string> = {
  klavik: "Klâsik",
  akdeniz: "Akdeniz",
  asya: "Asya",
  amerika: "Amerika",
  klasik: "Fransız Klâsikleri",
  baharatli: "Baharatlı",
  sutlu: "Sütlü / Kremalı",
  hafif: "Hafif & Meyveli"
};

export const difficultyColor: Record<string, string> = {
  "Kolay": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  "Orta": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  "Zor": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  "Usta": "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
};
