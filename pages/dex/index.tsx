import { Tab } from '@headlessui/react';
import type { NextPage } from "next";
import Header from "../../ui/components/homepage/header";
import Meta from "../../ui/components/homepage/meta";
import { Router } from "./router";

const DEX: NextPage = () => {

  return (
    <div className="w-screen h-full mt-0">
      <div id="background-radial-gradient"></div>
      <Meta />
      <Header />
      <Tab.Group>
        <Tab.List className="mx-auto w-fit rounded-3xl" style={{padding: "2px", background: "rgb(16, 17, 20)"}}>
          <Tab>
            {({selected}) => (
              <div  style={{background: selected ? "rgb(33, 36, 41)" : "transparent"}} className="px-4 py-2 rounded-3xl cursor-pointer mr-2 text-white text-base font-bold">
                Swap
              </div>
            )}
          </Tab>
          <Tab>
            {({selected}) => (
              <div  style={{background: selected ? "rgb(33, 36, 41)" : "transparent"}} className="px-4 py-2 rounded-3xl cursor-pointer text-white text-base font-bold">
                Pool
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Router></Router>
          </Tab.Panel>
          <Tab.Panel>
            <Router></Router>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default DEX;
