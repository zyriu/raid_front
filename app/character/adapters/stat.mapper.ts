import { Stat } from "../core/domain/stat";

export default {
  toDomain(stats: number[]): Stat[] {
    const statsList: Stat[] = Stat.createStats();
    return statsList.map((stat, index) => stat.update(stats[index]));
  },
};
