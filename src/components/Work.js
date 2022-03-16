import React, { useState, Fragment } from "react";
import Loading from "./Loading";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Switch } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Azoozpic from "../azooz-images/azoozpic.jpg";
import Fintech1 from "../azooz-images/Fintech1.webp";
import Ecommerce from "../azooz-images/E-commerce.png";
import Sport from "../azooz-images/fitness-sport2.webp";
import VR from "../azooz-images/azooz-2.jpg";

const navigation = [
  { name: "About", to: "/about", current: false },
  { name: "Works", to: "/works", current: false },
  { name: "Contact", to: "#contact", current: false },
];

const footer = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },

  {
    name: "Dribbble",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Work = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [enabled, setEnabled] = useState(false);

  const date = new Date().getUTCFullYear();

  AOS.init();
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={enabled ? "blackBG" : "whiteBG"}>
          <Disclosure as="nav" className="">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between  h-16">
                    <div className="flex-shrink-0 flex items-center">
                      <h1 className="text-lg font-medium text-center">
                        <a href="/">
                          <div className="logo"></div>
                        </a>
                      </h1>
                    </div>
                    <div className="flex ">
                      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.to}
                            className={classNames(
                              item.current
                                ? "border-transparent text-gray-900"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                              "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? "bg-gray-200" : "bg-indigo-600",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Switch Mode</span>
                        <span
                          className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none relative inline-block h-5 w-5 rounded-full  shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        >
                          <span
                            className={classNames(
                              enabled
                                ? "opacity-100 ease-in duration-200"
                                : "opacity-0 ease-out duration-100",
                              "absolute inset-0 h-full w-full flex bg-white rounded-xl items-center justify-center transition-opacity"
                            )}
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 main-clr bg-white rounded-xl"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </span>
                          <span
                            className={classNames(
                              enabled
                                ? "opacity-0 ease-out duration-100"
                                : "opacity-100 ease-in duration-200",
                              "absolute inset-0 h-full w-full flex bg-indigo-200 rounded-xl text-white items-center justify-center transition-opacity"
                            )}
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-white bg-indigo-600 rounded-xl"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>
                          </span>
                        </span>
                      </Switch>

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
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? "bg-gray-200" : "bg-indigo-600",
                          "relative inline-flex mx-4 flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Switch Mode</span>
                        <span
                          className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none relative inline-block h-5 w-5 rounded-full  shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        >
                          <span
                            className={classNames(
                              enabled
                                ? "opacity-100 ease-in duration-200"
                                : "opacity-0 ease-out duration-100",
                              "absolute inset-0 h-full w-full flex bg-white rounded-xl items-center justify-center transition-opacity"
                            )}
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 main-clr bg-white rounded-xl"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </span>
                          <span
                            className={classNames(
                              enabled
                                ? "opacity-0 ease-out duration-100"
                                : "opacity-100 ease-in duration-200",
                              "absolute inset-0 h-full w-full flex bg-indigo-200 rounded-xl text-white items-center justify-center transition-opacity"
                            )}
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-white bg-indigo-600 rounded-xl"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>
                          </span>
                        </span>
                      </Switch>
                      <Disclosure.Button
                        className={
                          enabled
                            ? " inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2"
                            : "bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        }
                      >
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
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
                        href={item.to}
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

          <div className="main-content container px-2 ">
            <section id="#works" className="py-8 container">
              <div className="text-gray-600 ">
                <p className="text-4xl font-bold main-clr">My Projects</p>
                <div>
                  Over the past few years I’ve had the chance to work on
                  multiple projects with a human <br /> centered approach and
                  empathy driven mindset. Projects range from a simple redesign
                  to a complete user experience revamp.
                </div>
              </div>
            </section>

            <section className="py-6">
              <div className="mt-20">
                <div className="">
                  <div className="mb-10 flex flex-row  flex-wrap justify-evenly items-center">
                    {/* Project card*/}

                    <div
                      className=" mb-5 rounded-2xl overflow-hidden"
                      data-aos="zoom-in-left"
                    >
                      <div className="tags">
                        <p>Fintech</p>
                      </div>
                      <img
                        className=" works1 object-cover"
                        src={Fintech1}
                        alt="azooz"
                      />
                    </div>

                    {/* Project card*/}

                    <div
                      className="mb-5 rounded-2xl overflow-hidden"
                      data-aos="zoom-in-right"
                    >
                      <div className="tags">
                        <p>VR|AR</p>
                      </div>

                      <img
                        className="works1  h-full w-full object-cover"
                        src={VR}
                        alt="azooz"
                      />
                    </div>
                  </div>

                  <div className="mb-10 flex flex-row  flex-wrap justify-evenly items-center">
                    {/* Project card*/}

                    <div
                      className="mb-5 rounded-2xl overflow-hidden"
                      data-aos="zoom-in-left"
                    >
                      <div className="tags">
                        <p>Ecommerce</p>
                      </div>

                      <img
                        className="works1  h-full w-full object-cover"
                        src={Ecommerce}
                        alt="azooz"
                      />
                    </div>

                    {/* Project card*/}

                    <div
                      className=" mb-5 rounded-2xl overflow-hidden"
                      data-aos="zoom-in-right"
                    >
                      <div className="tags">
                        <p>Sport|Health</p>
                      </div>

                      <img
                        className="works1  h-full w-full object-cover"
                        src={Sport}
                        alt="azooz"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="contact">
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 " />
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={Azoozpic}
                      alt="azooz"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Azooz</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                      A product designer from Ilorin, Nigeria. with a strong
                      passion for design solutions in their simplest and most
                      usable form while serving both Users and Business Goals.
                    </p>

                    <div>
                      {" "}
                      <div className=" mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                        <div className="text-center"></div>
                        <a
                          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqsPsGRpBWNHQRJJwhhKgBFffXVxLBJzSJCQFhkHCwlsghBCXRmwPCPRZRckMLvTnsbQq"
                          className=" font-medium text-center text-3xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contact Azooz <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
              <div className="flex justify-center space-x-6 md:order-2">
                {footer.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center text-base text-gray-400">
                  &copy; {date} All rights reserved, Designed by{" "}
                  <a
                    href="https://www.instagram.com/azooz_graphics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold main-clr"
                  >
                    Azooz.
                  </a>
                  . Built with ❤ by{" "}
                  <a
                    href="https://twitter.com/ficazzoS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold main-clr"
                  >
                    Femi Obadimu.
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Work;
