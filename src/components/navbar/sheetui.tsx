import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { Building2, GalleryVertical, Home } from "lucide-react";
import "./navbar.css";
import nardLogo from "public/logos/nard-logo-1.svg";
import Image from "next/image";
import SocialLinkIcons from "./social-icons";

export function SheetUI() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="pl-0 px-2 py-[6px] shadow-none bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-500/10">
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
          className="w-full md:hidden absolute top-[0px] h-screen md:max-w-full flex flex-col bg-white/[.88] dark:bg-black/[.84] backdrop-blur-[20px] p-5 pt-3 pl-3"
        >
          <div className="links gap-3 flex flex-col text-[13px] max-w-[450px] w-[90%] mx-auto mb-auto">
            <div className="icons pb-2 flex justify-end">
              <div className="absolute right-[25px]">
                <SocialLinkIcons GitHub X />
              </div>
            </div>
            <div className="w-full line-wrapper absolute left-0 mt-8 h-1  ">
              <div className="line w-[100%] mx-auto border-b border-border" />
            </div>
            <div onClick={handleClick} className="mt-8 space-y-3">
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

          <SheetFooter className="bg-gray-50 dark:bg-black/30 p-8 absolute bottom-0 left-0 w-full border-t border-border">
            <div className="flex gap-1 w-full items-center ring ring-accent/50 p-2 px-3 rounded-md bg-gradient-to-r from-accent to-purple-900 ">
              <Image
                src={nardLogo}
                className="mr-1"
                width={20}
                alt="nard logo"
              />
              <p className="text-white">Nard Designs</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
