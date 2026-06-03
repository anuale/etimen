import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seed verileri yükleniyor...");

  // ============================================
  // HAYVAN TÜRLERİ
  // ============================================
  
  const animalTypes = await Promise.all([
    prisma.animalType.create({
      data: {
        name: "Dana",
        slug: "dana",
        description: "Sığır eti, en çok tüketilen kırmızı et türü. Farklı kesim yöntemleriyle çok çeşitli pişirme yöntemlerine uygundur.",
        icon: "🐄",
        sortOrder: 1,
      },
    }),
    prisma.animalType.create({
      data: {
        name: "Kuzu",
        slug: "kuzu",
        description: "Kuzu eti, yağlı ve sulu yapısıyla bilinir. Özellikle ızgara ve fırında pişirme için idealdir.",
        icon: "🐑",
        sortOrder: 2,
      },
    }),
    prisma.animalType.create({
      data: {
        name: "Tavuk",
        slug: "tavuk",
        description: "En çok tüketilen beyaz et. Hızlı pişmesi ve çok yönlülüğü ile bilinir.",
        icon: "🍗",
        sortOrder: 3,
      },
    }),
    prisma.animalType.create({
      data: {
        name: "Büyükbaş",
        slug: "buyukbas",
        description: "Sığır ve dana dışı büyükbaş hayvan etleri. Güçlü tada sahip, yavaş pişirme için ideal.",
        icon: "🐂",
        sortOrder: 4,
      },
    }),
    prisma.animalType.create({
      data: {
        name: "Küçükbaş",
        slug: "kucukbas",
        description: "Koyun ve keçi eti. Geleneksel Türk mutfağının vazgeçilmezi.",
        icon: "🐐",
        sortOrder: 5,
      },
    }),
  ]);

  const [dana, kuzu, tavuk, buyukbas, kucukbas] = animalTypes;

  // ============================================
  // DANA KESİMLERİ
  // ============================================

  const danaKesimleri = await Promise.all([
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Bonfile (Tenderloin)",
        slug: "dana-bonfile",
        description: "Dananın en yumuşak ve en değerli parçası. Az yağlı, çok hassas bir lezzete sahiptir. Kısa ve yoğun pişirme yöntemleri için idealdir.",
        locationDescription: "Dananın bel bölgesinde, omurga boyunca uzanan ince ve uzun bir kas. Vücudun en az çalışan kası olduğu için çok yumuşaktır.",
        difficultyLevel: "MEDIUM",
        fatContent: "LEAN",
        boneIn: false,
        averageWeightMin: 300,
        averageWeightMax: 800,
        priceRange: "Yüksek",
        bestFor: ["pan", "grill", "oven", "sous-vide"],
        image: "/cuts/dana-bonfile.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Antrikot (Ribeye)",
        slug: "dana-antrikot",
        description: "Kaburgabölgesinden elde edilen, yağlı yapısıyla ünlü bir kesim. Zengin lezzeti ve sulu yapısıyla bilinir.",
        locationDescription: "Dananın kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kas. Yüksek yağ oranı (marbling) onu çok lezzetli yapar.",
        difficultyLevel: "EASY",
        fatContent: "HIGH",
        boneIn: true,
        averageWeightMin: 400,
        averageWeightMax: 1200,
        priceRange: "Yüksek",
        bestFor: ["grill", "pan", "oven"],
        image: "/cuts/dana-antrikot.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Riploin (New York Strip)",
        slug: "dana-riploin",
        description: "Sırt bölgesinden elde edilen, dengeli yağlılığı ve sert olmayan yapısıyla bilinir.",
        locationDescription: "Dananın sırt bölgesinde, bonfileye komşu olan kısım. Orta düzeyde yağlılığa sahiptir.",
        difficultyLevel: "EASY",
        fatContent: "MEDIUM",
        boneIn: false,
        averageWeightMin: 350,
        averageWeightMax: 900,
        priceRange: "Yüksek",
        bestFor: ["grill", "pan", "oven"],
        image: "/cuts/dana-riploin.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "T-Bone / Porterhouse",
        slug: "dana-t-bone",
        description: "T şeklindeki kemiği ile tanınır. İki farklı et parçasını bir arada sunar: bonfile ve riploin.",
        locationDescription: "Dananın sırt bölgesinde, T şeklindeki bel kemiğinin her iki tarafında bulunan et parçaları.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 500,
        averageWeightMax: 1000,
        priceRange: "Çok Yüksek",
        bestFor: ["grill", "pan"],
        image: "/cuts/dana-tbone.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Brisket (Göğüs)",
        slug: "dana-brisket",
        description: "Dananın göğüs bölgesinden elde edilen, bağlantı dokusu fazla olan bir kesim. Yavaş pişirme (smoking) için idealdir.",
        locationDescription: "Dananın göğüs ve ön bacak bölgesi arasında yer alan büyük ve sert bir kas. Bağlantı dokusu (collagen) bakımından zengindir.",
        difficultyLevel: "HARD",
        fatContent: "HIGH",
        boneIn: false,
        averageWeightMin: 2000,
        averageWeightMax: 6000,
        priceRange: "Orta",
        bestFor: ["smoking", "braising"],
        image: "/cuts/dana-brisket.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Short Ribs (Kaburga)",
        slug: "dana-short-ribs",
        description: "Kaburga kemikleri üzerindeki etli parça. Yağlı ve lezzetli yapısıyla bilinir.",
        locationDescription: "Dananın kaburga bölgesinde, kemik üzerinde bulunan etli parça. Yüksek yağ ve kemik iliği lezzet katar.",
        difficultyLevel: "MEDIUM",
        fatContent: "VERY_HIGH",
        boneIn: true,
        averageWeightMin: 500,
        averageWeightMax: 1500,
        priceRange: "Yüksek",
        bestFor: ["braising", "smoking", "grill"],
        image: "/cuts/dana-short-ribs.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Chuck Roast (Kol)",
        slug: "dana-chuck",
        description: "Dananın kol bölgesinden elde edilen, sert ama lezzetli bir kesim. Yavaş pişirme için mükemmeldir.",
        locationDescription: "Dananın omuz ve kol bölgesinde yer alan büyük kas grubu. Bağlantı dokusu fazla olduğu için yavaş pişirme gerektirir.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: false,
        averageWeightMin: 1500,
        averageWeightMax: 4000,
        priceRange: "Düşük",
        bestFor: ["braising", "smoking", "oven"],
        image: "/cuts/dana-chuck.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Flank Steak (Karın)",
        slug: "dana-flank",
        description: "Dananın karın bölgesinden elde edilen, uzun lifli yapısıyla bilinen ince bir kesim.",
        locationDescription: "Dananın karın bölgesinde yer alan düz ve uzun bir kas. Lifli yapısı nedeniyle doğru dilimleme çok önemlidir.",
        difficultyLevel: "MEDIUM",
        fatContent: "LOW",
        boneIn: false,
        averageWeightMin: 400,
        averageWeightMax: 800,
        priceRange: "Orta",
        bestFor: ["grill", "pan"],
        image: "/cuts/dana-flank.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Skirt Steak (Diyafram)",
        slug: "dana-skirt",
        description: "Diyafram kasından elde edilen, çok lezzetli ama lifli bir kesim. Fajita için mükemmeldir.",
        locationDescription: "Dananın göğüs boşluğunu ayıran diyafram kasından elde edilen uzun ve ince bir parça.",
        difficultyLevel: "MEDIUM",
        fatContent: "LOW",
        boneIn: false,
        averageWeightMin: 300,
        averageWeightMax: 600,
        priceRange: "Orta",
        bestFor: ["grill", "pan"],
        image: "/cuts/dana-skirt.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Sirloin (Kontrfile)",
        slug: "dana-sirloin",
        description: "Sırt bölgesinde yer alan, dengeli lezzet ve fiyat oranı sunan bir kesim.",
        locationDescription: "Dananın sırt bölgesinde, bonfileye yakın bir konumda yer alır. Orta düzeyde yağlılığa sahiptir.",
        difficultyLevel: "EASY",
        fatContent: "MEDIUM",
        boneIn: false,
        averageWeightMin: 400,
        averageWeightMax: 1000,
        priceRange: "Orta",
        bestFor: ["grill", "pan", "oven"],
        image: "/cuts/dana-sirloin.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Tri-Tip (Üçgen)",
        slug: "dana-tritip",
        description: "Sırt bölgesinde yer alan üçgen şekilli bir kesim. California menşeli BBQ için mükemmeldir.",
        locationDescription: "Dananın sırt bölgesinde, sirloin靠近部分的三块三角形肌肉。Orta düzeyde yağlılığa sahiptir.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: false,
        averageWeightMin: 500,
        averageWeightMax: 1200,
        priceRange: "Orta",
        bestFor: ["grill", "smoking"],
        image: "/cuts/dana-tritip.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: dana.id,
        name: "Kıyma (Ground Beef)",
        slug: "dana-kıyma",
        description: "Çeşitli kesimlerden elde edilen kıyma. Burger, köfte ve soslarda kullanılır.",
        locationDescription: "Farklı kesimlerin öğütülmesiyle elde edilir. Yağ oranı kullanım amacına göre değişir.",
        difficultyLevel: "EASY",
        fatContent: "MEDIUM",
        boneIn: false,
        averageWeightMin: 250,
        averageWeightMax: 2000,
        priceRange: "Düşük",
        bestFor: ["pan", "grill", "oven"],
        image: "/cuts/dana-kıyma.jpg",
      },
    }),
  ]);

  // ============================================
  // KUZU KESİMLERİ
  // ============================================

  const kuzuKesimleri = await Promise.all([
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu Pirzola (Lamb Chops)",
        slug: "kuzu-pirzola",
        description: "Kuzunun kaburga bölgesinden elde edilen, kemikli ve lezzetli pirzola.",
        locationDescription: "Kuzunun kaburga bölgesinde, 1-13 kaburga kemikleri arasında yer alan kısa ve kemikli pirzolalar.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 150,
        averageWeightMax: 400,
        priceRange: "Yüksek",
        bestFor: ["grill", "pan"],
        image: "/cuts/kuzu-pirzola.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu Kol (Lamb Shoulder)",
        slug: "kuzu-kol",
        description: "Kuzunun kol bölgesinden elde edilen, bağlantı dokusu fazla olan bir kesim. Yavaş pişirme için mükemmeldir.",
        locationDescription: "Kuzunun omuz ve kol bölgesinde yer alan büyük ve sert bir kas. Bağlantı dokusu (collagen) bakımından zengindir.",
        difficultyLevel: "HARD",
        fatContent: "HIGH",
        boneIn: true,
        averageWeightMin: 1500,
        averageWeightMax: 3000,
        priceRange: "Orta",
        bestFor: ["braising", "smoking", "oven"],
        image: "/cuts/kuzu-kol.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu But (Leg of Lamb)",
        slug: "kuzu-but",
        description: "Kuzunun arka bacak bölgesinden elde edilen, büyük ve lezzetli bir parça.",
        locationDescription: "Kuzunun arka bacak bölgesinde yer alan büyük kas. Kemikli veya kemiksiz olarak bulunabilir.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 2000,
        averageWeightMax: 4000,
        priceRange: "Orta",
        bestFor: ["oven", "grill", "braising"],
        image: "/cuts/kuzu-but.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu Kaburga (Lamb Ribs)",
        slug: "kuzu-kaburga",
        description: "Kuzunun kaburga bölgesindeki kemikli et parçası.",
        locationDescription: "Kuzunun kaburga bölgesinde, kemik üzerinde bulunan ince et tabakası.",
        difficultyLevel: "MEDIUM",
        fatContent: "HIGH",
        boneIn: true,
        averageWeightMin: 400,
        averageWeightMax: 800,
        priceRange: "Orta",
        bestFor: ["grill", "braising"],
        image: "/cuts/kuzu-kaburga.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu İncik (Lamb Shank)",
        slug: "kuzu-incik",
        description: "Kuzunun bacak bölgesindeki incik kemiği üzerindeki et. Yavaş pişirme için mükemmeldir.",
        locationDescription: "Kuzunun alt bacak bölgesinde, incik kemiği üzerinde bulunan sert ama lezzetli et.",
        difficultyLevel: "HARD",
        fatContent: "LOW",
        boneIn: true,
        averageWeightMin: 300,
        averageWeightMax: 600,
        priceRange: "Orta",
        bestFor: ["braising", "oven"],
        image: "/cuts/kuzu-incik.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kuzu.id,
        name: "Kuzu Kaburga Etli (Rack of Lamb)",
        slug: "kuzu-rack",
        description: "Kuzunun kaburga bölgesindeki en değerli kesim. 8 kemikli sunum mükemmeldir.",
        locationDescription: "Kuzunun kaburga bölgesinde, 8 kaburga kemiği üzerinde bulunan lezzetli et.",
        difficultyLevel: "EXPERT",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 400,
        averageWeightMax: 800,
        priceRange: "Çok Yüksek",
        bestFor: ["oven", "grill"],
        image: "/cuts/kuzu-rack.jpg",
      },
    }),
  ]);

  // ============================================
  // TAVUK KESİMLERİ
  // ============================================

  const tavukKesimleri = await Promise.all([
    prisma.cut.create({
      data: {
        animalTypeId: tavuk.id,
        name: "Tavuk Göğsü",
        slug: "tavuk-gogsu",
        description: "Tavuğun en az yağlı ve en çok protein içeren bölgesi. Hızlı pişmesiyle bilinir.",
        locationDescription: "Tavuğun göğüs bölgesinde, kemik üzerinde veya kemiksiz olarak bulunur. Beyaz et olarak adlandırılır.",
        difficultyLevel: "EASY",
        fatContent: "LEAN",
        boneIn: false,
        averageWeightMin: 150,
        averageWeightMax: 400,
        priceRange: "Düşük",
        bestFor: ["pan", "grill", "oven", "sous-vide"],
        image: "/cuts/tavuk-gogsu.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: tavuk.id,
        name: "Tavuk But",
        slug: "tavuk-but",
        description: "Tavuğun arka bacak bölgesi. Göğse göre daha yağlı ve lezzetlidir.",
        locationDescription: "Tavuğun arka bacak bölgesinde, kemik üzerinde bulunan et. Koyu et olarak adlandırılır.",
        difficultyLevel: "EASY",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 100,
        averageWeightMax: 250,
        priceRange: "Düşük",
        bestFor: ["oven", "grill", "braising"],
        image: "/cuts/tavuk-but.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: tavuk.id,
        name: "Tavuk Kanat",
        slug: "tavuk-kanat",
        description: "Tavuğun kanat bölgesi. Fırında veya ızgarada kızartmak için mükemmeldir.",
        locationDescription: "Tavuğun kanat eklemlerinden kesilen parça. Derisiyle birlikte pişirilir.",
        difficultyLevel: "EASY",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 30,
        averageWeightMax: 80,
        priceRange: "Düşük",
        bestFor: ["grill", "oven", "deep-fry"],
        image: "/cuts/tavuk-kanat.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: tavuk.id,
        name: "Bütün Tavuk",
        slug: "tavuk-butun",
        description: "Tüm tavuk. Fırında kızartmak için mükemmeldir. En ekonomik seçimdir.",
        locationDescription: "Tüm tavuk, göğüs, but, kanat ve bacak bölgelerini kapsar.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 1200,
        averageWeightMax: 2500,
        priceRange: "Düşük",
        bestFor: ["oven", "grill", "deep-fry"],
        image: "/cuts/tavuk-butun.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: tavuk.id,
        name: "Tavuk Bonfile",
        slug: "tavuk-bonfile",
        description: "Tavuğun göğüs etinin en hassas kısmı. Kemiksiz ve çok yumuşaktır.",
        locationDescription: "Tavuğun göğüs bölgesinde, kemik üzerinde bulunan küçük ve hassas et parçası.",
        difficultyLevel: "EASY",
        fatContent: "LEAN",
        boneIn: false,
        averageWeightMin: 80,
        averageWeightMax: 200,
        priceRange: "Orta",
        bestFor: ["pan", "grill", "sous-vide"],
        image: "/cuts/tavuk-bonfile.jpg",
      },
    }),
  ]);

  // ============================================
  // BÜYÜKBAŞ KESİMLERİ
  // ============================================

  const buyukbasKesimleri = await Promise.all([
    prisma.cut.create({
      data: {
        animalTypeId: buyukbas.id,
        name: "Sığır Antrikot",
        slug: "sigr-antrikot",
        description: "Sığır etinin en değerli kesimlerinden biri. Yağlı ve lezzetlidir.",
        locationDescription: "Sığırın kaburga bölgesinde yer alan, yüksek yağ oranına sahip lezzetli bir kesim.",
        difficultyLevel: "MEDIUM",
        fatContent: "HIGH",
        boneIn: true,
        averageWeightMin: 400,
        averageWeightMax: 1200,
        priceRange: "Yüksek",
        bestFor: ["grill", "pan", "oven"],
        image: "/cuts/sigr-antrikot.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: buyukbas.id,
        name: "Sığır Kaburga",
        slug: "sigr-kaburga",
        description: "Sığırın kaburga bölgesindeki etli parça. Yavaş pişirme için mükemmeldir.",
        locationDescription: "Sığırın kaburga bölgesinde, kemik üzerinde bulunan lezzetli et parçası.",
        difficultyLevel: "MEDIUM",
        fatContent: "HIGH",
        boneIn: true,
        averageWeightMin: 500,
        averageWeightMax: 1500,
        priceRange: "Orta",
        bestFor: ["braising", "smoking"],
        image: "/cuts/sigr-kaburga.jpg",
      },
    }),
  ]);

  // ============================================
  // KÜÇÜKBAŞ KESİMLERİ
  // ============================================

  const kucukbasKesimleri = await Promise.all([
    prisma.cut.create({
      data: {
        animalTypeId: kucukbas.id,
        name: "Koyun But",
        slug: "koyun-but",
        description: "Koyunun arka bacak bölgesi. Lezzetli ve çok yönlüdür.",
        locationDescription: "Koyunun arka bacak bölgesinde yer alan büyük kas. Kemikli veya kemiksiz olarak bulunabilir.",
        difficultyLevel: "MEDIUM",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 2000,
        averageWeightMax: 4000,
        priceRange: "Orta",
        bestFor: ["oven", "braising"],
        image: "/cuts/koyun-but.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kucukbas.id,
        name: "Koyun Kol",
        slug: "koyun-kol",
        description: "Koyunun kol bölgesi. Yavaş pişirme için mükemmeldir.",
        locationDescription: "Koyunun omuz ve kol bölgesinde yer alan sert ama lezzetli et.",
        difficultyLevel: "HARD",
        fatContent: "MEDIUM",
        boneIn: true,
        averageWeightMin: 1500,
        averageWeightMax: 3000,
        priceRange: "Düşük",
        bestFor: ["braising", "smoking"],
        image: "/cuts/koyun-kol.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kucukbas.id,
        name: "Keçi But",
        slug: "keci-but",
        description: "Keçinin arka bacak bölgesi. Koyun etine göre daha yağsızdır.",
        locationDescription: "Keçinin arka bacak bölgesinde yer alan kas. Yağsız ve lezzetlidir.",
        difficultyLevel: "MEDIUM",
        fatContent: "LOW",
        boneIn: true,
        averageWeightMin: 1500,
        averageWeightMax: 3000,
        priceRange: "Orta",
        bestFor: ["oven", "braising"],
        image: "/cuts/keci-but.jpg",
      },
    }),
    prisma.cut.create({
      data: {
        animalTypeId: kucukbas.id,
        name: "Keçi Kol",
        slug: "keci-kol",
        description: "Keçinin kol bölgesi. Geleneksel Türk mutfağında sık kullanılır.",
        locationDescription: "Keçinin omuz ve kol bölgesinde yer alan et. Yavaş pişirme için idealdir.",
        difficultyLevel: "HARD",
        fatContent: "LOW",
        boneIn: true,
        averageWeightMin: 1200,
        averageWeightMax: 2500,
        priceRange: "Düşük",
        bestFor: ["braising", "smoking"],
        image: "/cuts/keci-kol.jpg",
      },
    }),
  ]);

  // ============================================
  // PİŞİRME YÖNTEMLERİ
  // ============================================

  const cookingMethods = await Promise.all([
    prisma.cookingMethod.create({
      data: {
        name: "Izgara / Grill",
        slug: "grill",
        description: "Dolaylı veya dolaysız ateş ile pişirme. Dumanlı lezzet ve kızartılmış dış yüzey sağlar.",
        icon: "🔥",
        tempRange: "170-250°C",
        difficulty: "MEDIUM",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Fırın / Roasting",
        slug: "oven",
        description: "Sıcak hava ile均匀 pişirme. Büyük kesimler için idealdir.",
        icon: "🌡️",
        tempRange: "160-220°C",
        difficulty: "EASY",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Sous Vide",
        slug: "sous-vide",
        description: "Vakumda, düşük sıcaklıkta uzun pişirme. Mükemmel iç sıcaklık kontrolü sağlar.",
        icon: "🫧",
        tempRange: "45-85°C",
        difficulty: "HARD",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Smoking (Dumanlama)",
        slug: "smoking",
        description: "Düşük sıcaklıkta, duman ile uzun pişirme. Derin lezzet ve yumuşak doku sağlar.",
        icon: "💨",
        tempRange: "107-135°C",
        difficulty: "EXPERT",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Tava / Pan-Sear",
        slug: "pan",
        description: "Yüksek ateşte tavada hızlı pişirme. Mükemmel dış kabuk (crust) sağlar.",
        icon: "🍳",
        tempRange: "200-250°C",
        difficulty: "EASY",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Braising (Haşlama)",
        slug: "braising",
        description: "Sıvı ile düşük sıcaklıkta yavaş pişirme. Sert kesimleri yumuşatır.",
        icon: "🫕",
        tempRange: "150-170°C",
        difficulty: "MEDIUM",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Deep Fry (Kızartma)",
        slug: "deep-fry",
        description: "Derin yağda kızartma. Dış yüzeyi çıtır yapar.",
        icon: "🍟",
        tempRange: "175-190°C",
        difficulty: "MEDIUM",
      },
    }),
    prisma.cookingMethod.create({
      data: {
        name: "Sous Vide + Reverse Sear",
        slug: "reverse-sear",
        description: "Sous vide sonrası yüksek ateşte mühürleme. En hassas pişirme sonucunu verir.",
        icon: "✨",
        tempRange: "45-250°C",
        difficulty: "EXPERT",
      },
    }),
  ]);

  const [grill, oven, sousVide, smoking, pan, braising, deepFry, reverseSear] = cookingMethods;

  // ============================================
  // PİŞİRME DERECELERİ
  // ============================================

  await Promise.all([
    prisma.donenessLevel.create({
      data: {
        name: "Mavili Rare",
        slug: "blue-rare",
        tempMin: 46,
        tempMax: 49,
        description: "Dışarıdan hafifçe kızartılmış, içerisi tamamen çiğ. Soğuk kırmızı merkez.",
        colorDescription: "Parlak kırmızı, dışarıda ince bir kahverengi kabuk",
        textureDescription: "Çok yumuşak, neredeyse jöle kıvamında",
        safetyNote: "Sadece çok taze ve güvenilir kaynaklardan gelen etler için önerilir.",
        sortOrder: 1,
      },
    }),
    prisma.donenessLevel.create({
      data: {
        name: "Rare (Çiğ)",
        slug: "rare",
        tempMin: 49,
        tempMax: 52,
        description: "Dışarıdan kızartılmış, içerisi %75 kırmızı. Soğuk kırmızı merkez.",
        colorDescription: "Parlak kırmızı merkez, dışarıda ince kahverengi kabuk",
        textureDescription: "Çok yumuşak, sulu",
        sortOrder: 2,
      },
    }),
    prisma.donenessLevel.create({
      data: {
        name: "Medium Rare",
        slug: "medium-rare",
        tempMin: 55,
        tempMax: 57,
        description: "En popüler pişirme derecesi. Sıcak kırmızı-pembe merkez, mükemmel sulu lezzet.",
        colorDescription: "Sıcak kırmızı-pembe merkez, dışarıda kahverengi kabuk",
        textureDescription: "Yumuşak, sulu, mükemmel lezzet dengesi",
        sortOrder: 3,
      },
    }),
    prisma.donenessLevel.create({
      data: {
        name: "Medium",
        slug: "medium",
        tempMin: 60,
        tempMax: 63,
        description: "Pembe merkez, daha sıkı doku. Hala sulu ama daha az kırmızı.",
        colorDescription: "Pembe merkez, dışarıda kahverengi kabuk",
        textureDescription: "Orta yumuşaklık, hala sulu",
        sortOrder: 4,
      },
    }),
    prisma.donenessLevel.create({
      data: {
        name: "Medium Well",
        slug: "medium-well",
        tempMin: 65,
        tempMax: 68,
        description: "Hafif pembe, ağırlıklı olarak gri. Daha kuru bir doku.",
        colorDescription: "Hafif pembe, çoğunlukla gri",
        textureDescription: "Daha sıkı, daha az sulu",
        sortOrder: 5,
      },
    }),
    prisma.donenessLevel.create({
      data: {
        name: "Well Done (İyi Pişmiş)",
        slug: "well-done",
        tempMin: 71,
        tempMax: 77,
        description: "Tamamen pişmiş, pembe yok. En kuru pişirme derecesi.",
        colorDescription: "Tamamen gri/kahverengi, pembe yok",
        textureDescription: "Sıkı, kuru",
        safetyNote: "USDA önerilen minimum sıcaklık budur.",
        sortOrder: 6,
      },
    }),
  ]);

  console.log("Seed verileri başarıyla yüklendi!");
  console.log(`- ${animalTypes.length} hayvan türü`);
  console.log(`- ${danaKesimleri.length + kuzuKesimleri.length + tavukKesimleri.length + buyukbasKesimleri.length + kucukbasKesimleri.length} kesim`);
  console.log(`- ${cookingMethods.length} pişirme yöntemi`);
  console.log(`- 6 pişirme derecesi`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
