import { geneticPotential } from "../../../app/character/core/domain/genetic-potential";
import { classes } from "../../../app/character/core/domain/character-class";
import { stats } from "../../../app/character/core/domain/stat";
import FilterPopOver from "./filter-pop-over";

const Filters = () => {
  return (
    <div className="w-2/12 h-full py-8 flex flex-col text-white mt-4">
      <FilterPopOver name="genetic potential" items={geneticPotential} />
      <FilterPopOver name="classes" items={classes} />
      <FilterPopOver name="skills" items={[]} />
      <FilterPopOver name="stats" items={stats} />
    </div>
  );
};

export default Filters;
