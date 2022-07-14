import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import fs from "fs";
import path from "path";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

var pagesArray = [];


Nav.getInitialProps = async (ctx) => {
  let dirname = path.dirname(
    `M:\\Creative\\Coding\\Fullstack\\nextjs\\personal-website\\pages\\pages`
  );

  let files = fs.readdirSync(dirname);

  files.forEach((file) => {
    file.replace(/\.js$/, "");
    if (file === "_app.js" || file === "index.js") {
      return;
    } else {
      pagesArray.push(file);
    }
  });



  return {
  };
}

let navigation = [
  { name: "Home", href: "/", current: true },
  { name: "test", href: "/projects", current: false },
  { name: "About Me", href: "#", current: false },
];


function Nav({ files }) {
  return (
    <Disclosure as="nav" className={utilStyles.navColor}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={42}
                        width={42}
                        alt="Website logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.current
                              ? "text-white hover:text-yellow-300 transition-all duration-200"
                              : "text-gray-300 hover:text-white transition-all duration-200",
                            "px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white hover:text-yellow-300 transition-all duration-200"
                      : "text-gray-300 hover:text-white transition-all duration-200",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
