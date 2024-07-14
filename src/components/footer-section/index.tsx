"use client";
import Image from "next/image";
import nardLogo from "public/logos/nard-logo-2b.svg";
import SocialLinkIcons from "../navbar/social-icons";
import { ExternalLink } from "lucide-react";
import { footerLinksData } from "./footerLinksData";
import nardLogoLarge from "public/logos/nard-logo-1.svg";
import { useContext } from "react";
import { AppContext } from "../../app/store";
import nardLogoDark from "public/logos/nard-logo-1-darkmode.svg";

export const FooterLinks = () => {
  return (
    <div className="footer-links flex flex-wrap md:flex-nowrap gap-8 gap-x-10 md:gap-x-8">
      {footerLinksData.map((dataMain) => (
        <div key={dataMain.id}>
          <p className="font-bold text-14px mb-[6px]">{dataMain.header}</p>
          <ul className="flex flex-col gap-1">
            {dataMain["links"].map((data) => (
              <a
                href={data.link}
                key={data.id}
                className={`flex items-center hover:underline ${
                  data.special ? "text-accent" : ""
                }`}
              >
                {data.text}
                {data.externalink ? (
                  <ExternalLink size={12} className="ml-[3px]" />
                ) : (
                  ""
                )}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const FooterHeader = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within an AppProvider");
  }
  const { theme } = context;

  return (
    <div>
      <div className="">
        <Image src={nardLogo} width={nardLogo} alt="Brand Logo" />
        <p className="mt-3">
          Crafting stunning and performant digital experiences, One Pixel at a
          time. Built by
          <span className="">
            <a href="#" className="text-accent underline pl-1">
              nard
            </a>{" "}
            from
            <Image
              src="/gh-flag.png"
              width={13}
              height={13}
              alt="Ghana Flag"
              className=" ml-1 inline"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export const FooterData = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} max-w-[300px]`}>
      <div className="mb-2">
        <p>&copy; 2024 - 2024. All rights reserved. </p>
      </div>
      <div className="mt-3 ">
        <SocialLinkIcons GitHub X />
      </div>
    </div>
  );
};

export const MobileFooter = () => {
  return (
    <div className="md:hidden mt-3 pb-10">
      <FooterHeader />
      <FooterData className="mt-8" />

      <div className="footer-links mt-[50px]">
        <FooterLinks />
      </div>
    </div>
  );
};

export const DesktopFooter = () => {
  return (
    <div className="hidden md:flex gap-[55px]">
      <div className="flex flex-col justify-between">
        <div className="max-w-[355px]">
          <FooterHeader />
        </div>
        <div className="">
          <FooterData />
        </div>
      </div>
      <div className="footer-links pb-[50px]">
        <FooterLinks />
      </div>
    </div>
  );
};

// TODO: dark theme optimize
export default function Footer() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useContext must be used within an AppProvider");
  }

  const { theme } = context;

  return (
    <div className="wrapper bg-white dark:bg-zinc-900 border-t border-border">
      <div className=" group container-4xl p-5 mt-4 relative overflow-hidden pb-[120px] md:pb-[160px]">
        <div className="absolute  bottom-[-70px] md:bottom-[-100px] right-[5%]">
          <Image
            src={theme === "light" ? nardLogoLarge : nardLogoDark}
            className="w-[150px] md:w-[200px] grayscale group-hover:grayscale-0 transition duration-400"
            width={nardLogoLarge}
            alt="large nard brand logo"
          />
        </div>
        <MobileFooter />
        <DesktopFooter />
      </div>
    </div>
  );
}
