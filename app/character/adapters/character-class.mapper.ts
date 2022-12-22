import { GeneticPotential } from "../core/domain/genetic-potential";
import { NanoTechnician, CharacterClass } from "../core/domain/character-class";

export default {
  fromPotential(potential: GeneticPotential[]): CharacterClass {
    const potentials = potential.sort((a, b) => b.value - a.value);
    // TODO : Class is the of type inferred from the genetic potential
    return new NanoTechnician().updatePotentials(potentials);
  },
};
