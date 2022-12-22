import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { FilterItem } from "../../../app/marketplace/core/port/marketplace.port";

interface IFilterPopOverProps {
  items: FilterItem[];
  name: string;
}

const FilterPopOver = ({ name, items }: IFilterPopOverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FilterItem[]>(items);
  const [deleted, setDeleted] = useState<FilterItem[]>([]);

  const addItem = (item: FilterItem) => {
    setSelected([...selected, item]);
    setDeleted(deleted.filter(i => i.name !== item.name));
  };

  const deleteItem = (item: FilterItem) => {
    setDeleted([...deleted, item]);
    setSelected(selected.filter(i => i.name !== item.name));
  };

  return (
    <div className="p-4 w-full">
      <div
        className="bg-orange-600 cursor-pointer w-full flex flex-row font-bold p-4 text-white uppercase justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{name}</span>
        <ChevronDownIcon className={`transform-gpu w-6 h-6 transition-all ${isOpen ? "" : "-rotate-90"}`} />
      </div>
      {isOpen && (
        <>
          <div className="my-4 p-4 flex w-full flex-wrap gap-2 bg-indigo-400">
            <span className="w-full">Selected: </span>
            {selected.map((item: FilterItem, index: number) => (
              <div
                key={index}
                className="p-2 text white bg-black uppercase cursor-pointer"
                onClick={() => deleteItem(item)}
              >
                {item.name} x
              </div>
            ))}
          </div>
          <div className="my-4 p-4 flex w-full flex-wrap gap-2 bg-indigo-800">
            {deleted.map((item: FilterItem, index: number) => (
              <div
                key={index}
                className="p-2 text white bg-black uppercase cursor-pointer"
                onClick={() => addItem(item)}
              >
                {item.name} +
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPopOver;
