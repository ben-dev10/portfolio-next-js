import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import {
  Bookmark,
  Building2,
  GalleryHorizontalEnd,
  GalleryVertical,
  Home,
  Layers,
} from "lucide-react";
import "./navbar.css";
import nardLogo from "public/logos/nard-logo-1.svg";

import Image from "next/image";

export function SheetUI() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="pl-0 shadow-none bg-transparent hover:bg-transparent">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="scale-[1.2]"
            >
              <path
                d="M3 9H10.2188"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 4.5H15"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.5H12.75"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full md:hidden absolute top-0 h-screen md:max-w-full flex flex-col bg-white/40 dark:bg-black/40 backdrop-blur-[20px] p-5 pt-3 pl-3"
        >
          <div className="links gap-3 flex flex-col mt-10 text-[13px] border-slate-600  pb-2 max-w-[350px] w-[70%] mx-auto mb-auto">
            <div onClick={handleClick} className="space-y-3">
              <Link href="/" className="sheet-link">
                <Home size={16} />
                Home
              </Link>
              <Link href="/gallery" className="sheet-link">
                <GalleryVertical size={16} />
                Gallery
              </Link>
              <Link href="/work" className="sheet-link">
                <Building2 size={16} />
                Work
              </Link>
            </div>
          </div>

          <SheetFooter>
            <div className="flex gap-1 w-full items-center ring ring-accent/50 p-2 px-3 rounded-md bg-gradient-to-r from-accent to-purple-900 ">
              <Image src={nardLogo} className="mr-1" width={20} alt="nard logo" />
              <p className="text-white">Nard Designs</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
