import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import React, { Fragment, useState } from "react";
import Link from "next/link";

function QueryLink(props: any) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

const SearchBar: NextPage = () => {
  const [searchToken, setSearchToken] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const sortOptions = [
    { name: "Price: Low to High", value: "asc" },
    { name: "Price: High to Low", value: "desc" },
    { name: "Latest", value: "latest" },
  ];
  return (
    <div className="flex items-center py-2">
      <div className="mr-2 w-full">
        <input
          type="text"
          className="p-4 form-input focus:ring-red-500 focus:border-red-500 dark:focus:ring-gray-300 dark:focus:border-gray-300 block w-full pr-16 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:disabled:bg-gray-500 dark:placeholder-gray-400 rounded-md disabled:placeholder-gray-300 disabled:text-gray-300 transition-placeholder transition-text ease-linear duration-300 disabled:cursor-not-allowed"
          placeholder="Search Name... (Enter to search)"
          value={searchToken}
          onChange={e => setSearchToken(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              setSearchParams(searchToken);
            }
          }}
        />
      </div>
      <Menu as="div" className="relative z-20 inline-block text-left">
        <div className="flex items-center space-x-2">
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200">
            Sort
            <ChevronDownIcon
              className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-left absolute right-0 z-10 mt-2 w-48 rounded-md shadow-2xl bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map(option => {
                return (
                  <Menu.Item key={option.name}>
                    <QueryLink href={{}} passHref className={"block px-4 py-2 text-sm font-medium text-white"}>
                      <span>{option.name}</span>
                    </QueryLink>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SearchBar;
