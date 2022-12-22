import {
  PlasmaGeneticPotential,
  NanoTechGeneticPotential,
  GeneticPotential,
  QuantumGeneticPotential,
  RadioActivityGeneticPotential,
  PsionicGeneticPotential,
} from "./genetic-potential";
import { DexterityStat, IntelligenceStat, LuckStat, MutationStat, PsyStat, Stat } from "./stat";

export type CharacterClassType =
  | "Nano-Technician"
  | "Doctor"
  | "Engineer"
  | "Fixer"
  | "Netrunner"
  | "Meta-Physicist"
  | "Enutrof"
  | "Chemist"
  | "Gamma"
  | "Psionic";

export interface IECharacterClassProps {
  name: CharacterClassType;
  potentials: GeneticPotential[];
  stats: Stat[];
}

export class CharacterClass {
  constructor(private props: IECharacterClassProps) {}

  public get name() {
    return this.props.name;
  }
  public get potentials() {
    return this.props.potentials.sort((a, b) => b.value - a.value);
  }
  public get stats() {
    return this.props.stats;
  }

  public updateStats(stats: Stat[]) {
    this.props.stats = stats;
  }

  public updatePotentials(potentials: GeneticPotential[]) {
    this.props.potentials = potentials;
    return this;
  }
}

export class NanoTechnician extends CharacterClass {
  constructor() {
    super({ name: "Nano-Technician", potentials: [], stats: Stat.createStats() });
  }
}
export class Doctor extends CharacterClass {
  constructor() {
    super({ name: "Doctor", potentials: [], stats: Stat.createStats() });
  }
}
export class Engineer extends CharacterClass {
  constructor() {
    super({ name: "Engineer", potentials: [], stats: Stat.createStats() });
  }
}
export class Fixer extends CharacterClass {
  constructor() {
    super({ name: "Fixer", potentials: [], stats: Stat.createStats() });
  }
}
export class Netrunner extends CharacterClass {
  constructor() {
    super({ name: "Netrunner", potentials: [], stats: Stat.createStats() });
  }
}
export class MetaPhysicist extends CharacterClass {
  constructor() {
    super({ name: "Meta-Physicist", potentials: [], stats: Stat.createStats() });
  }
}
export class Enutrof extends CharacterClass {
  constructor() {
    super({ name: "Enutrof", potentials: [], stats: Stat.createStats() });
  }
}
export class Chemist extends CharacterClass {
  constructor() {
    super({ name: "Chemist", potentials: [], stats: Stat.createStats() });
  }
}
export class Gamma extends CharacterClass {
  constructor() {
    super({ name: "Gamma", potentials: [], stats: Stat.createStats() });
  }
}

export class Psionic extends CharacterClass {
  constructor() {
    super({ name: "Psionic", potentials: [], stats: Stat.createStats() });
  }
}

export const classes = [
  new NanoTechnician(),
  new Doctor(),
  new Engineer(),
  new Fixer(),
  new Netrunner(),
  new MetaPhysicist(),
  new Enutrof(),
  new Chemist(),
  new Gamma(),
  new Psionic(),
];
