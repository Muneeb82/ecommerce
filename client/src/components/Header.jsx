"use client";

import { useState } from "react";
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
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
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

  return (
    <header className="bg-white">
      <div className="relative py-4 overflow-hidden bg-[#f5f5f5]">
        <div className="px-36 py-0">
          <div className="flex flex-wrap">
            <div className="grow">
              <ul className="flex items-center justify-between">
                <li>
                  <p className="text-[#696969] text-base font-medium leading-none">
                    Delivery on next day from 10:00 am to 09:00 pm
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-[#696969]" />
                  <p className="text-[#696969] text-base font-medium leading-none">
                    Need help
                  </p>
                  <a href="tel:+01 888 999 7766" className="font-semibold text-black">
                    +01 888 999 7766
                  </a>
                </li>
                <li className="text-right">
                  <p className="text-[#696969] text-base font-medium leading-none space-x-4">
                    <a href="/" title="Contact">Contact</a>
                    <a href="/" title="Blog">Blog</a>
                    <a href="/" title="Order Tracking">Order Tracking</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo + Search */}
        <div className="flex flex-wrap w-full items-center justify-between">
          <div className="w-1/3">
            <SearchBar />
          </div>
          <div className="w-1/3 text-center">
            <a href="#" className="inline-block max-w-[160px]">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="w-1/3 flex justify-end gap-3">
            <IconButton icon={<UserIcon className="h-5 w-5" />} link="/account" />
            <IconButton
              icon={<HeartIcon className="h-5 w-5" />}
              badge="0"
              link="/account"
            />
            <IconButton
              icon={<ShoppingCartIcon className="h-5 w-5" />}
              badge="0"
              link="/account"
            />
          </div>
        </div>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex max-w-7xl mx-auto justify-between px-6 py-4">
        <PopoverGroup className="flex gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 text-sm font-semibold text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute z-10 mt-3 w-96 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-lg ring-1 ring-gray-900/5 p-4">
              {products.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg"
                >
                  <item.icon className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </a>
              ))}
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold text-gray-900">Features</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Marketplace</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Company</a>
        </PopoverGroup>
        <a href="#" className="text-sm font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="mt-6">
            <Disclosure>
              <DisclosureButton className="flex w-full justify-between text-base font-semibold text-gray-900 py-2">
                Product
                <ChevronDownIcon className="h-5 w-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {[...products, ...callsToAction].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg py-2 px-4 text-sm text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <a href="#" className="block py-2 text-base font-semibold text-gray-900">
              Features
            </a>
            <a href="#" className="block py-2 text-base font-semibold text-gray-900">
              Marketplace
            </a>
            <a href="#" className="block py-2 text-base font-semibold text-gray-900">
              Company
            </a>
          </div>
          <div className="pt-6">
            <a href="#" className="block py-2 text-base font-semibold text-gray-900">
              Log in
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// Reusable icon button component
function IconButton({ icon, badge, link }) {
  return (
    <a href={link} className="relative flex items-center justify-center w-10 h-10 bg-[#f1f1f1] border border-[#2222221a] rounded-full">
      {icon}
      {badge && (
        <span className="absolute -top-1.5 -right-1.5 text-xs w-[25px] h-[25px] rounded-full bg-[#ff8a5c] text-white flex items-center justify-center">
          {badge}
        </span>
      )}
    </a>
  );
}
