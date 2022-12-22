import { ChevronLeftIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../../../app/character/core/domain/character";
import Meta from "../../../ui/components/homepage/meta";
import ProgressBar from "../../../ui/components/commons/progress-bar";
import { setSelectedCityItem } from "../../../app/character/core/use-cases/select-item.use-case";
import Link from "next/link";

const Item: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const item = useSelector((state: any) => state.city.selectedItem) as Character;
  if (!item) return <div></div>;

  const goBack = () => {
    dispatch(setSelectedCityItem(null));
    router.back();
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0">
      <Meta />
      <div className="p-20">
        <div className="text-white flex flex-row cursor-pointer" onClick={goBack}>
          <ChevronLeftIcon
            className="flex-shrink-0 ml-1 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-100"
            aria-hidden="true"
          />
          Go back to my characters
        </div>
        <div className="p-20 flex w-full">
          <div className="w-full  mr-20 relative flex flex-col">
            <div className="flex flex-row relative">
              <div className="text-white text-3xl absolute -top-5 pr-4 font-bold bg-primary-dark">Personal file:</div>
              <div className="w-full border-b border-solid border-white"></div>
            </div>
            <div className="flex flex-col w-full  py-8 item-stat">
              <div className="flex flex-row justify-around">
                <div className=" transform-gpu -skew-x-2 -translate-x-6 flex flex-col relative">
                  <span className="text-white text-sm text-left font-extralight px-4 uppercase">Name</span>
                  <span className="text-white text-6xl font-extrabold px-4 uppercase">{item.name}</span>
                  <span className="text-white text-sm text-left font-extralight px-4 uppercase">Rarity</span>
                  <div className="text-white text-xl font-extrabold px-4 uppercase mx-auto bg-purple-900 mt-2">
                    {" "}
                    {item.rarity}{" "}
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <span className="text-white text-sm text-left font-extralight px-4 uppercase">Class</span>
                  <div className="text-white text-6xl font-bold uppercase text-right">{item.class.name}</div>
                  <span className="text-white text-sm text-left font-extralight px-4 uppercase">Discipline</span>
                  <div className="text-white text-xl font-extrabold px-4 uppercase mx-auto bg-orange-500 mt-2">
                    {" "}
                    {item.class.potential.name}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row relative mt-4">
              <div className="text-white text-3xl absolute -top-5 pr-4 font-bold bg-primary-dark">Stats:</div>
              <div className="w-full border-b border-solid border-white"></div>
            </div>
            <div className="flex flex-col w-full border-b border-solid border-white py-6 item-stat">
              {item.stats.map((stat, index) => (
                <div className="flex flex-row justify-between" key={index}>
                  <span className="text-2xl font-bold text-white w-1/3 uppercase">{stat.name}</span>
                  <ProgressBar color={stat.color} completed={stat.value} />
                </div>
              ))}
            </div>
            <div className="flex flex-no-wrap mt-4">
              <Link href="/city/inventory">
                <div className="bg-orange-600 p-4 text-white cursor-pointer">Assign equipment</div>
              </Link>
              <Link href="/marketplace">
                <div className="bg-red-600 p-4 text-white ml-4 cursor-pointer">Sell the character</div>
              </Link>
            </div>
          </div>
          <div className="flex align-middle w-4/12 items-center">
            <img src={item.image} className="w-full rounded border-4 border-white border-solid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
