import {
  EGeneticPotential,
  GeneticPotential,
  NanoTechGeneticPotential,
  PhysicalGeneticPotential,
  PlasmaGeneticPotential,
  PsionicGeneticPotential,
  QuantumGeneticPotential,
  RadioActivityGeneticPotential,
} from "../core/domain/genetic-potential";

export default {
  toDomain(potential: number[]): GeneticPotential[] {
    return [
      new PhysicalGeneticPotential().updateValue(potential[EGeneticPotential.Physical]),
      new PlasmaGeneticPotential().updateValue(potential[EGeneticPotential.Plasma]),
      new NanoTechGeneticPotential().updateValue(potential[EGeneticPotential.NanoTech]),
      new RadioActivityGeneticPotential().updateValue(potential[EGeneticPotential.Quantum]),
      new QuantumGeneticPotential().updateValue(potential[EGeneticPotential.Radioactivity]),
      new PsionicGeneticPotential().updateValue(potential[EGeneticPotential.Psionic]),
    ];
  },
};
