"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 w-full border-b bg-white z-50">
      <div className="container flex h-16 p-5 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="https://www.koinx.com/" className="flex items-center">
            <Image
              src="https://www.koinx.com/guides/_next/static/media/Logo.cdf70f30.svg"
              width={100}
              height={100}
              alt="Koinx-Logo"
            />
          </Link>
        </div>

        {/* Navigation and button on the right */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors hover:text-primary"
                >
                  Crypto Taxes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors hover:text-primary"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors hover:text-primary"
                >
                  Resource Center
                </Link>
              </li>
            </ul>
          </nav>

          <Button className="hidden md:block bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Crypto Taxes
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Free Tools
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Resource Center
                </Link>
                <div className="mt-4">
                  <Button className="w-full md:block bg-blue-600 text-white hover:bg-blue-700 transition-colors" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
