import { Rarity } from "../../../shared/port/rarity";

export interface LibCharacter {
  actionPoints: number;
  experiencePoints: number;
  expertise: number;
  healthPoints: number;
  id: number;
  level: number;
  movementPoints: number;
  mutation: number;
  potential: number[];
  profession: number;
  rarity: Rarity;
  scavenging: number;
  speed: number;
  statistics: number[];
}
