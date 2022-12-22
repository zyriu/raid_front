import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGameItem } from "../app/marketplace/core/port/marketplace.port";
import { setSelectedMarketplaceItem } from "../app/marketplace/core/use-cases/select-item.use-case";
import { RootState } from "../app/shared/store/store";
import Header from "../ui/components/homepage/header";
import Meta from "../ui/components/homepage/meta";
import CategoryDetails from "../ui/components/marketplace/category-details";
import SearchListings from "../ui/components/marketplace/search-listings";

const Marketplace: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const characters = useSelector((state: RootState) => state.marketplace.characters);
  const [category, setCategory] = useState("Characters");

  const onItemClick = (item: IGameItem) => {
    dispatch(setSelectedMarketplaceItem(item));
    router.push("/item");
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0">
      <Meta />
      <Header />
      <CategoryDetails name={category} />
      <Tab.Group>
        <Tab.List className={"flex w-1/2 justify-around mx-auto text-white text-xl"}>
          <Tab className={"border-r border-1 border-solid border-white text-center"}>Characters</Tab>
          <Tab className={"text-center"}>Items</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SearchListings items={characters} onItemClick={onItemClick} />
          </Tab.Panel>
          <Tab.Panel>
            <SearchListings items={characters} onItemClick={onItemClick} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Marketplace;
