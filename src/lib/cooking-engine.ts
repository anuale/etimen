// Pişirme hesaplama motoru
export interface CookingCalculationInput {
  cutSlug: string;
  methodSlug: string;
  weightGrams: number;
  startTemp: "fridge" | "room" | "frozen";
  targetDoneness: string;
  boneIn: boolean;
}

export interface CookingCalculationResult {
  estimatedTimeMin: number;
  estimatedTimeMax: number;
  targetTempMin: number;
  targetTempMax: number;
  pullTempMin: number;
  pullTempMax: number;
  restTimeMin: number;
  restTimeMax: number;
  instructions: CookingStep[];
  tips: string[];
  internalTempGuide: DonenessGuide[];
}

export interface CookingStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  temperature?: string;
  image?: string;
}

export interface DonenessGuide {
  name: string;
  tempMin: number;
  tempMax: number;
  description: string;
  color: string;
}

// Pişirme çarpanları
const METHOD_MULTIPLIERS: Record<string, number> = {
  grill: 1.0,
  oven: 1.2,
  "sous-vide": 1.5,
  smoking: 2.5,
  pan: 0.7,
  braising: 1.8,
  "deep-fry": 0.5,
  "reverse-sear": 1.3,
};

const START_TEMP_MULTIPLIERS: Record<string, number> = {
  fridge: 1.0,
  room: 0.85,
  frozen: 1.5,
};

const DONENESS_PULL_OFFSET: Record<string, number> = {
  RARE: -3,
  MEDIUM_RARE: -3,
  MEDIUM: -2,
  MEDIUM_WELL: -1,
  WELL_DONE: 0,
};

export function calculateCookingTime(
  minutesPerKg: number,
  weightGrams: number,
  methodSlug: string,
  startTemp: string,
  boneIn: boolean
): { min: number; max: number } {
  const weightKg = weightGrams / 1000;
  const methodMultiplier = METHOD_MULTIPLIERS[methodSlug] || 1.0;
  const startMultiplier = START_TEMP_MULTIPLIERS[startTemp] || 1.0;
  const boneMultiplier = boneIn ? 0.9 : 1.0;

  const baseMin = weightKg * minutesPerKg * methodMultiplier * startMultiplier * boneMultiplier * 0.85;
  const baseMax = weightKg * minutesPerKg * methodMultiplier * startMultiplier * boneMultiplier * 1.15;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
  };
}

export function calculatePullTemp(
  targetTempMin: number,
  targetTempMax: number,
  doneness: string
): { min: number; max: number } {
  const offset = DONENESS_PULL_OFFSET[doneness] || -3;
  return {
    min: targetTempMin + offset,
    max: targetTempMax + offset,
  };
}

export function calculateRestTime(
  weightGrams: number,
  methodSlug: string
): { min: number; max: number } {
  const weightKg = weightGrams / 1000;
  
  // Temel dinlenme süresi (dakika)
  let baseRestMin = 5;
  let baseRestMax = 10;
  
  if (methodSlug === "smoking" || methodSlug === "braising") {
    baseRestMin = 30;
    baseRestMax = 60;
  } else if (weightKg > 2) {
    baseRestMin = 15;
    baseRestMax = 30;
  }
  
  return {
    min: baseRestMin,
    max: baseRestMax,
  };
}

export function generateInstructions(
  cutName: string,
  methodName: string,
  weightGrams: number,
  targetTemp: { min: number; max: number },
  pullTemp: { min: number; max: number }
): CookingStep[] {
  const weightKg = weightGrams / 1000;
  
  const steps: CookingStep[] = [
    {
      step: 1,
      title: "Hazırlık",
      description: `${cutName} oda sıcaklığına gelene kadar buzdolabından çıkarın. Yaklaşık ${Math.round(weightKg * 30)} dakika dinlendirin.`,
      duration: `${Math.round(weightKg * 30)} dakika`,
    },
    {
      step: 2,
      title: "Baharatlama",
      description: "Etin her iki tarafını tuz ve karabiber ile tatlandırın. İsteğe göre diğer baharatları ekleyin.",
    },
    {
      step: 3,
      title: "Pişirme",
      description: `${methodName} kullanarak eti pişirin. İç sıcaklık ${targetTemp.min}°C - ${targetTemp.max}°C aralığına ulaşana kadar pişirin.`,
      temperature: `${targetTemp.min}-${targetTemp.max}°C`,
    },
    {
      step: 4,
      title: "Kontrol",
      description: `Termometreyi etin en kalın kısmına yerleştirin. ${pullTemp.min}°C - ${pullTemp.max}°C'ye ulaştığında ocaktan alın.`,
    },
    {
      step: 5,
      title: "Dinlenme",
      description: "Etin 5-10 dakika dinlenmesini sağlayın. Bu, suların ete geri dağılmasını sağlar.",
      duration: "5-10 dakika",
    },
    {
      step: 6,
      title: "Servis",
      description: "Dinlenen eti dilimleyin ve servis yapın. Afiyet olsun!",
    },
  ];
  
  return steps;
}

export const DONENESS_GUIDES: DonenessGuide[] = [
  {
    name: "Mavili Rare",
    tempMin: 49,
    tempMax: 52,
    description: "Soğuk kırmızı merkez, çok yumuşak",
    color: "#DC2626",
  },
  {
    name: "Rare (Çiğ)",
    tempMin: 52,
    tempMax: 55,
    description: "Soğuk kırmızı merkez",
    color: "#E11D48",
  },
  {
    name: "Medium Rare",
    tempMin: 57,
    tempMax: 60,
    description: "Sıcak kırmızı-pembe merkez, sulu",
    color: "#F472B6",
  },
  {
    name: "Medium",
    tempMin: 63,
    tempMax: 68,
    description: "Pembe merkez, daha sıkı doku",
    color: "#FB923C",
  },
  {
    name: "Medium Well",
    tempMin: 71,
    tempMax: 74,
    description: "Hafif pembe, ağırlıklı olarak gri",
    color: "#A16207",
  },
  {
    name: "Well Done (İyi Pişmiş)",
    tempMin: 77,
    tempMax: 999,
    description: "Pembe yok, tamamen pişmiş",
    color: "#78716C",
  },
];
