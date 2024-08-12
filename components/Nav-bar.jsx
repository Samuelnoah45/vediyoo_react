import Link from "next/link";
import { Icon } from "@iconify/react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Examples", href: "#", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavBar = () => {
  return (
    <div className="flex  gap-4 lg:items-center   justify-between  2xl:px-[200px] lg:px-[80px] px-4 lg:flex-row flex-col   2xl:py-8">
      <Disclosure as="nav" className="w-full">
        <div className="mx-auto w-full ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Icon
                  aria-hidden="true"
                  className="block text-3xl group-data-[open]:hidden"
                  icon="uil:bars"
                />
                <Icon
                  aria-hidden="true"
                  className="hidden text-3xl group-data-[open]:block"
                  icon="material-symbols:close"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1   items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  src="/assets/images/Logo.png"
                  alt="videyoo Logo"
                  className="h-8 lg:h-auto w-auto"
                />
              </div>
              <div className="hidden  w-full  sm:ml-6 sm:flex justify-end">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? " text-xl font-poppins text-primary-400"
                          : "text-gray-500 hover:text-primary-400 text-xl font-poppins",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-primary-400"
                    : "text-gray-500  hover:text-primary-400",
                  "block rounded-md px-3 py-2 text-lg font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default NavBar;

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";

// const navigation = [
//   { name: "Home", href: "#", current: true },
//   { name: "Examples", href: "#", current: false },
//   { name: "Reviews", href: "#", current: false },
//   { name: "FAQ", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function NavBar() {
//   return (

//   );
// }
