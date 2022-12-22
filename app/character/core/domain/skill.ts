import { Rarity } from "../../../shared/port/rarity";
import { GeneticPotential } from "./genetic-potential";

export type SkillName = "a" | "b" | "c" | "d" | "e" | "f" | "g";

interface ISkillProps {
  name: SkillName;
  type: "neutral" | "elemental";
  value: number;
  potential: GeneticPotential | null;
  minimumGeneration: number;
  target: "self" | "enemy";
  usage: "battle" | "profession";
  rarity: Rarity;
}

export class Skill {
  constructor(private props: ISkillProps) {}

  get name() {
    return this.props.name;
  }
  get value() {
    return this.props.value;
  }
  get element() {
    return this.props.potential;
  }
  get minimumGeneration() {
    return this.props.minimumGeneration;
  }
  get target() {
    return this.props.target;
  }
  get usage() {
    return this.props.usage;
  }
  get rarity() {
    return this.props.rarity;
  }
}

// TODO:  Define the skills' names and values.( see dofus )
