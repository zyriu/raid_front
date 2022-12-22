import {
  PlasmaGeneticPotential,
  NanoTechGeneticPotential,
  GeneticPotential,
  QuantumGeneticPotential,
  RadioActivityGeneticPotential,
  PsionicGeneticPotential,
  PhysicalGeneticPotential,
} from "./genetic-potential";
import { Psionic } from "./character-class";

export type StatType =
  | "health" // HP of characters - neutral
  | "initiative" // Team with the highest initiative gets first turn - neutral
  | "ap" // the amount of actions one can use per turn - neutral
  | "mastery" // increases experience points acquired from all activities and protection against AP reduction
  | "dexterity" // for the hacker element
  | "intelligence" // for the nano-techs element
  | "luck" // for the quantum element
  | "mutation" // for the radio activity element
  | "psy" // for the radio activity element
  | "strength";

interface IStatProps {
  name: StatType;
  type: "neutral" | "potential";
  potential: GeneticPotential | null;
  value: number; // over 100
}

export class Stat {
  constructor(private props: IStatProps) {}

  get name() {
    return this.props.name;
  }
  get value() {
    return this.props.value;
  }
  get color() {
    return this.props.potential?.color || "#d15b6b";
  }
  get type() {
    return this.props.type;
  }

  update(value: number) {
    this.props.value = value;
    return this;
  }

  public static createStats() {
    return [
      new HealthStat(),
      new InitiativeStat(),
      new ApStat(),
      new MasteryStat(),
      new StrengthStat(),
      new DexterityStat(),
      new IntelligenceStat(),
      new LuckStat(),
      new MutationStat(),
      new PsyStat(),
    ];
  }

  public randomize() {
    this.props.value = Math.ceil(Math.random() * 100);
    return this;
  }
}

export class HealthStat extends Stat {
  constructor() {
    super({ name: "health", type: "neutral", value: 0, potential: null });
  }
}

export class InitiativeStat extends Stat {
  constructor() {
    super({ name: "initiative", type: "neutral", value: 0, potential: null });
  }
}

export class ApStat extends Stat {
  constructor() {
    super({ name: "ap", type: "neutral", value: 0, potential: null });
  }
}

export class MasteryStat extends Stat {
  constructor() {
    super({ name: "mastery", type: "neutral", value: 0, potential: null });
  }
}

export class StrengthStat extends Stat {
  constructor() {
    super({ name: "strength", type: "potential", value: 0, potential: new PhysicalGeneticPotential() });
  }
}
export class DexterityStat extends Stat {
  constructor() {
    super({ name: "dexterity", type: "potential", value: 0, potential: new PlasmaGeneticPotential() });
  }
}

export class IntelligenceStat extends Stat {
  constructor() {
    super({ name: "intelligence", type: "potential", value: 0, potential: new NanoTechGeneticPotential() });
  }
}

export class LuckStat extends Stat {
  constructor() {
    super({ name: "luck", type: "potential", value: 0, potential: new QuantumGeneticPotential() });
  }
}

export class MutationStat extends Stat {
  constructor() {
    super({ name: "mutation", type: "potential", value: 0, potential: new RadioActivityGeneticPotential() });
  }
}

export class PsyStat extends Stat {
  constructor() {
    super({ name: "psy", type: "potential", value: 0, potential: new PsionicGeneticPotential() });
  }
}

export const stats = [
  new HealthStat(),
  new InitiativeStat(),
  new ApStat(),
  new MasteryStat(),
  new StrengthStat(),
  new DexterityStat(),
  new IntelligenceStat(),
  new LuckStat(),
  new MutationStat(),
  new PsyStat(),
];
