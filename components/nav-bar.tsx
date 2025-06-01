"use client";

import { useState } from "react"; // Import useState
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Merafocoins", href: "/merafocoins" },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to control sheet

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close sheet on link click
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={"/cb-logo.jpg"}
                width={35}
                height={35}
                alt={"Code Burst Logo"}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href && "underline underline-offset-5 text-blue-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            
           {/*<Link href="/contact">
              <Button className="bg-[#3b82f6] hover:bg-blue-700 rounded-full">
                Contact US
              </Button>
            </Link>*/
            }
          </div>

          {/* Mobile menu sheet */}
          <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>CodeBurst</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick} // Close sheet on click
                      className={cn(
                        "text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors",
                        pathname === item.href && "underline underline-offset-5 text-blue-600"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="mt-4 bg-[#3b82f6] hover:bg-blue-700 rounded-full"
                    onClick={handleLinkClick} 
                  >
                    Contact US
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}