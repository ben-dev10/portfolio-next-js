"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import useTheme from "@/utils/hooks/useTheme";
import { Button } from "@/ui/button";
import { SheetUI } from "./sheetui";
import { usePathname } from "next/navigation";
import "./navbar.css";
import ThemeToggle from "./themeToggle";
import navLogo from "public/logos/nard-logo-1.svg";
import navLogoDark from "public/logos/nard-logo-1-darkmode.svg";

function Logo({ theme }: { theme: string | null }) {
  const isDarkMode = theme === "dark";
  return (
    <div className="mx-auto md:ml-0">
      <Link href={"/"}>
        <Image
          src={isDarkMode ? navLogoDark : navLogo}
          width={navLogo}
          alt="navbar logo"
        />
      </Link>
    </div>
  );
}

function Links() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const NavLinks = [
    { id: 1, name: "Gallery", path: "/gallery" },
    { id: 2, name: "Work", path: "/work" },
    { id: 3, name: "Resources", path: "/resources" },
  ];

  return (
    <div className="space-x-3 dark:text-slate-50 hidden md:block">
      <ul className="list-none text-foreground flex gap-2">
        {NavLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              id="navLink"
              className={` relative ${
                isActive(link.path) ? "text-accent font-bold active" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="md:hidden">
      <SheetUI />
    </div>
  );
}

type work = { status: "away" | "available"; className?: string };

function Availability({ className, status }: work) {
  return (
    <div className={`available-for-work flex items-center gap-1 ${className}`}>
      <div
        className={`size-[8px] rounded-[100%] ${
          status == "available" ? "bg-green-500" : "bg-red-500"
        } `}
      >
        <p
          className={`indicator size-[8px] rounded-[100%] ${
            status == "available" ? "bg-green-500" : "bg-red-500"
          }  animate-ping`}
        ></p>
      </div>
      {status == "available" ? <p>Available for work</p> : <p>Away</p>}
    </div>
  );
}

function CV() {
  return (
    <div>
      <a href="resume-v1.pdf">
        <Button
          variant="pill"
          size="pill"
          className="text-accent bg-accent flex text-white px-2 py-[2px] hover:border-[hsla(var(--accent)_9)]"
        >
          CV
          <Download size={14} className="ml-1" />
        </Button>
      </a>
    </div>
  );
}

export default function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));

  useTheme();
  return (
    <div className="header-wrapper border-b border-border">
      <div className="container-4xl w-full h-[60px]">
        <div className="primary-nav flex gap-x-3 items-center p-2 pt-3 md:pt-4 px-4">
          <MenuIcon />
          <Logo theme={theme} />
          <Availability status="available" className="hidden md:flex mr-2" />
          <CV />
          <Links />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
      <div className="secondary-nav bg-slate-300/[.15] dark:bg-slate-700/[.15] md:hidden">
        <div className="wrapper container-4xl  p-2 px-4">
          <Availability status="available" />
        </div>
      </div>
    </div>
  );
}
