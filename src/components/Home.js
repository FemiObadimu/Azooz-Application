import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About", to: "/about", current: false },
  { name: "Works", to: "/works", current: false },
  { name: "Contact", to: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [loading, setLloading] = useState(true);

  setTimeout(() => {
    setLloading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div>
            <>
              <div className="min-h-full">
                <Disclosure as="nav" className="">
                  {({ open }) => (
                    <>
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between  h-16">
                          <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-lg font-medium text-center">
                              Azooz
                            </h1>
                          </div>
                          <div className="flex ">
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "border-transparent text-gray-900"
                                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button
                              type="button"
                              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                              <div></div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"></Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                          <div className="-mr-2 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
                              <span className="sr-only">Open main menu</span>
                              {open ? (
                                <XIcon
                                  className="block h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MenuIcon
                                  className="block h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </Disclosure.Button>
                          </div>
                        </div>
                      </div>

                      <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "border-transparent "
                                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                                "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                          <div className="flex items-center px-4"></div>
                          <div className="mt-3 space-y-1"></div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <div className="py-10">
                  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row">
                      <div className="text-gray-600">
                        <h1 className="main-head special text-start font-bold">
                          .. The Azooz ..
                        </h1>
                        <p className="py-4">
                          A product designer from Ilorin, Nigeria. with a strong
                          passion for design solutions in their simplest and
                          most usable form while serving both Users and Business
                          Goals.
                        </p>
                      </div>
                      <div className="head-image"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
