import { marinades } from "./marinades";
import { rubs } from "./rubs";
import { sauces } from "./sauces";

export interface CutRecommendation {
  slug: string;
  name: string;
  icon: string;
  type: string;
}

function buildCutRecommendations(): Record<string, CutRecommendation[]> {
  const map: Record<string, CutRecommendation[]> = {};

  for (const m of marinades) {
    for (const cut of m.pairings.cuts) {
      if (!map[cut]) map[cut] = [];
      map[cut].push({ slug: m.slug, name: m.name, icon: m.icon, type: "marine" });
    }
  }
  for (const r of rubs) {
    for (const cut of r.pairings.cuts) {
      if (!map[cut]) map[cut] = [];
      map[cut].push({ slug: r.slug, name: r.name, icon: r.icon, type: "rub" });
    }
  }
  for (const s of sauces) {
    for (const cut of s.pairings.cuts) {
      if (!map[cut]) map[cut] = [];
      map[cut].push({ slug: s.slug, name: s.name, icon: s.icon, type: "sos" });
    }
  }

  return map;
}

export const cutRecommendations = buildCutRecommendations();
