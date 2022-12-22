export type GeneticPotentialType =
  | "physical" // close-range attacks, resilient
  | "plasma" // long-range attacks, best accuracy
  | "nano-tech" // increase heals, best buffers / debuffers
  | "quantum" // luck related, increase/decrease drop rate
  | "radioactivity" // best durability, resist debuffs
  | "psionic"; // some characters

export interface IGeneticPotentialProps {
  name: GeneticPotentialType;
  color: string;
  value: number;
}

export enum EGeneticPotential {
  Physical,
  Plasma,
  NanoTech,
  Quantum,
  Radioactivity,
  Psionic,
}

export class GeneticPotential {
  constructor(private props: IGeneticPotentialProps) {}

  public get name() {
    return this.props.name;
  }
  public get color() {
    return this.props.color;
  }
  public get value() {
    return this.props.value;
  }

  public updateValue(value: number) {
    this.props.value = value;
    return this;
  }
}
export class PhysicalGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "physical", value: 0, color: "blue" });
  }
}

export class PlasmaGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "plasma", value: 0, color: "red" });
  }
}

export class NanoTechGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "nano-tech", value: 0, color: "rebeccapurple" });
  }
}

export class QuantumGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "quantum", value: 0, color: "orange" });
  }
}

export class RadioActivityGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "radioactivity", value: 0, color: "green" });
  }
}

export class PsionicGeneticPotential extends GeneticPotential {
  constructor() {
    super({ name: "psionic", value: 0, color: "black" });
  }
}

export const geneticPotential = [
  new PhysicalGeneticPotential(),
  new PlasmaGeneticPotential(),
  new NanoTechGeneticPotential(),
  new QuantumGeneticPotential(),
  new RadioActivityGeneticPotential(),
  new PsionicGeneticPotential(),
];
