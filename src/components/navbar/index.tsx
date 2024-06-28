"use client";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import useTheme from "@/utils/hooks/useTheme";
import { Button } from "@/ui/button";
import ThemeToggle from "./themeToggle";
import navLogo from "public/logos/nard-logo-1.svg";
import { SheetUI } from "./sheetui";

function Logo() {
  return (
    <div className="mx-auto md:ml-0">
      <Link href={"/"}>
        <Image src={navLogo} width={navLogo} alt="navbar logo" />
        {/* <svg viewBox="0 0 27 27">
          <defs>
            <style>
              {` .cls-1 {
                fill: url(#linear-gradient);
            }

            .cls-2 {
                fill: url(#linear-gradient-2);
            }`}
            </style>
            <linearGradient
              id="linear-gradient"
              x1="12.09"
              y1="11.81"
              x2="11.41"
              y2="35.64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#333" stop-opacity="0.8" />
              <stop offset="0.14" stop-color="#222" stop-opacity="0.87" />
              <stop offset="0.36" stop-color="#0f0f0f" stop-opacity="0.94" />
              <stop offset="0.63" stop-color="#040404" stop-opacity="0.99" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="3.74"
              y1="8.98"
              x2="27"
              y2="8.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.18" stop-color="#ba9bc9" />
              <stop offset="1" stop-color="#29abe2" stop-opacity="0.7" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M23.85,22.16A13.5,13.5,0,0,1,.65,9.37a10.53,10.53,0,0,1,.46-1.22C2,8.54,2.94,9,3.85,9.38c-.13.29-.24.59-.35.91a10.5,10.5,0,0,0,18.06,9.94C22.34,20.87,23.11,21.52,23.85,22.16Z"
              />
              <path
                className="cls-2"
                d="M26.35,17.63a3.21,3.21,0,0,1-.12.33c-.83-.69-1.68-1.36-2.53-2a10.48,10.48,0,0,0-17-10.42c-1-.46-1.94-.91-2.94-1.33A13.49,13.49,0,0,1,26.35,17.63Z"
              />
              <path
                fill="#eefffb"
                d="M8.49,19c0-1,.07-3.26.07-4.62V13.11c0-1.21,0-1.67-.07-2.55l-1.34-.2V9.49L11.49,8l.37.24.21,2.44v3.67c0,1.36,0,3.63.06,4.62Zm4.64-1v1H7.34V18l2-.44h1.68Zm5.56-6.16v2.56c0,1.41,0,3.63.07,4.62H15.12c0-1,.06-3.21.06-4.62V12.07c0-1.41-.35-1.91-1.23-1.91a4,4,0,0,0-2.71,1.61h-.75V10.35H12l-.84.62C12.68,8.74,13.94,8,15.52,8,17.42,8,18.69,9.28,18.69,11.82Zm-1,5.72,2.15.44v1H14V18l2-.44Z"
              />
            </g>
          </g>
        </svg> */}
      </Link>
    </div>
  );
}

function Links() {
  return (
    <div className="space-x-3 dark:text-slate-50 hidden md:block">
      <div className="">
        {/* <Link href="/gallery">Gallery</Link>
        <Link href="/work">Work</Link>
        <Link href="/resources">Resources</Link> */}
      </div>
    </div>
  );
}

function MenuIcon() {
  return <div className="md:hidden">
    <SheetUI />
  </div>;
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
          className="text-accent bg-accent text-white px-2 py-[2px] hover:border-green-300"
        >
          CV
          <Download size={14} className="ml-1" />
        </Button>
      </a>
    </div>
  );
}

export default function NavBar() {
  useTheme();
  return (
    <div className="header-wrapper border-b border">
      <div className="container-4xl w-full h-[56px]">
        <div className="primary-nav flex gap-x-3 items-center p-2 pt-3 md:pt-4 px-4">
          <MenuIcon />
          <Logo />
          <Availability status="available" className="hidden md:flex mr-2" />
          <CV />
          <Links />
          <ThemeToggle />
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
