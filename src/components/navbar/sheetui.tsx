import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { Bookmark, GalleryHorizontalEnd, Home, Layers } from "lucide-react";

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
              xmlns="http://www.w3.org/2000/svg"
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
          className="w-full md:max-w-full flex flex-col"
        >
          <div className="links gap-3 flex flex-col mt-5 text-[13px] border-slate-600  pb-2 max-w-[350px] w-[70%] mx-auto mb-auto">
            <div onClick={handleClick} className="space-y-3">
              <Link href="/" className="sheet-link">
                <Home size={16} />
                Home
              </Link>
              <Link href="/about" className="sheet-link">
                <Bookmark size={16} />
                About
              </Link>
              <Link href="/projects" className="sheet-link">
                <GalleryHorizontalEnd size={16} />
                Projects
              </Link>
            </div>
          </div>

          <SheetFooter>
            <div className="flex gap-1 w-full items-center border border-accent p-2 px-3 rounded-md bg-[rgba(64,195,53,.9)] ">
              <Layers size={16} className="text-green-50" />
              <p className="text-white">Nard Designs</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
