<<<<<<< HEAD
<<<<<<< HEAD
'use client'

import { useState } from 'react'
=======
"use client";

import { useState } from "react";
>>>>>>> 78cea10 (Night commit)
=======
"use client";

import { useState } from "react";
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
<<<<<<< HEAD
<<<<<<< HEAD
} from '@headlessui/react'
=======
} from "@headlessui/react";
>>>>>>> 78cea10 (Night commit)
=======
} from "@headlessui/react";
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
<<<<<<< HEAD
<<<<<<< HEAD
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
=======
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
<<<<<<< HEAD
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
=======
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
>>>>>>> 78cea10 (Night commit)
=======
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32

  return (
    <header className="bg-white">
      <div className="relative py-4 overflow-hidden bg-[#f5f5f5]">
        <div className="px-36 py-0">
          <div className="flex flex-wrap">
            <div className="grow shrink-0 basis-0">
<<<<<<< HEAD
<<<<<<< HEAD
            <div>
              <ul className="flex items-center justify-between">
                <li>
                  <div>
                    <p className="text-[#696969] text-base font-medium leading-none">Delivery on next day from 10:00 am to 09:00 pm</p>
                  </div>
                </li>
                <li className="text-center">
                  <div className="flex text-center justify-center">
                    <div className="icon"><PhoneIcon /></div>
                    <p className="text-[#696969] text-base font-medium leading-none">Need help</p>
                    <a href="tel:+01 888 999 7766" title="tel:+01 888 999 7766">
                      <strong>tel:+01 888 999 7766</strong>
                    </a>
                  </div>
                </li>
                <li className="text-right">
                  <div>
                    <p className="text-[#696969] text-base font-medium leading-none">
                      <a href="/" title="Keep in Touch">Contact</a>
                      <a href="/" title="Organic">Blog</a>
                      <a href="/" title="/account">Order Tracking</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
              <div>
                <ul className="flex items-center justify-between">
                  <li>
                    <div>
                      <p className="text-[#696969] text-base font-medium leading-none">
                        Delivery on next day from 10:00 am to 09:00 pm
                      </p>
                    </div>
                  </li>
                  <li className="text-center">
                    <div className="flex text-center justify-center">
                      <div className="icon">
                        <PhoneIcon />
                      </div>
                      <p className="text-[#696969] text-base font-medium leading-none">
                        Need help
                      </p>
                      <a
                        href="tel:+01 888 999 7766"
                        title="tel:+01 888 999 7766"
                      >
                        <strong>tel:+01 888 999 7766</strong>
                      </a>
                    </div>
                  </li>
                  <li className="text-right">
                    <div>
                      <p className="text-[#696969] text-base font-medium leading-none">
                        <a href="/" title="Keep in Touch">
                          Contact
                        </a>
                        <a href="/" title="Organic">
                          Blog
                        </a>
                        <a href="/" title="/account">
                          Order Tracking
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
      <div className="relative bg-white">
        <div className="px-8">
          <div className="flex flex-wrap">
            <div className="grow shrink-0 basis-0">
              <div className="flex items-center justify-between flex-wrap py-5">
                <div className="w-[33.33%]">
                  <SearchBar />
                </div>
                <div className="w-[33.33%] order-[-1]">
                  <a href="#" className="block max-w-[160px]">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="w-[33.33%] flex justify-end">
                 <ul className="flex items-center justify-end w-[100%]">
                  <li className="block relative px-[7px] leading-none">
                    <a href="/account" className="text-[#2a0808] flex items-center justify-center relative">
                    <span className="relative size-5 h-14 w-14 flex items-center justify-center border border-solid border-[#2222221a] rounded-[50%] bg-[#f1f1f1]">
                      <UserIcon className="size-5 not-italic normal leading-none" />
                    </span>
                    </a>
                  </li>
                  <li className="block relative px-[7px] leading-none">
                    <a href="/account" className="text-[#2a0808] flex items-center justify-center relative">
                    <span className="relative size-5 h-14 w-14 flex items-center justify-center border border-solid border-[#2222221a] rounded-[50%] bg-[#f1f1f1]">
                      <HeartIcon className="size-5 not-italic normal leading-none" />
                      <span className="size-3.5 text-white rounded-[50px] h-[25px] w-[25px] absolute top-[-5px] right-[-5px] m-0 flex bg-[#ff8a5c] items-center justify-center">0</span>
                    </span>
                    </a>
                  </li>
                  <li className="block relative px-[7px] leading-none">
                    <a href="/account" className="text-[#2a0808] flex items-center justify-center relative">
                    <span className="relative size-5 h-14 w-14 flex items-center justify-center border border-solid border-[#2222221a] rounded-[50%] bg-[#f1f1f1]">
                      <ShoppingCartIcon className="size-5 not-italic normal leading-none" />
                      <span className="size-3.5 text-white rounded-[50px] h-[25px] w-[25px] absolute top-[-5px] right-[-5px] m-0 flex bg-[#ff8a5c] items-center justify-center">0</span>
                    </span>
                    </a>
                  </li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
<<<<<<< HEAD
<<<<<<< HEAD
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
<<<<<<< HEAD
<<<<<<< HEAD
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
=======
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
=======
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
<<<<<<< HEAD
<<<<<<< HEAD
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
<<<<<<< HEAD
<<<<<<< HEAD
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
=======
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
<<<<<<< HEAD
>>>>>>> 78cea10 (Night commit)
=======
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 78cea10 (Night commit)
=======
  );
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
}
