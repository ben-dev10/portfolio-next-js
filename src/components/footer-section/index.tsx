"use client"
import Image from "next/image";
import nardLogo from "public/logos/nard-logo-2b.svg";
import SocialLinkIcons from "../navbar/social-icons";

interface LinksType {}


export const FooterLinks = () => {
  const footerLinksData = [
    {
      id: 1,
      header: "Gallery",
      links: [
        {
          id: "1i",
          text: "2D",
          link: "https://3d",
        },
        {
          id: "1ii",
          text: "2D",
          link: "https://3d",
        },
      ],
    },
  ];
  return (
    <div className="footer-links flex gap-5">
      {footerLinksData.map((dataMain) => (
        <div key={dataMain.id}>
          <p className="font-bold text-13px">{dataMain.header}</p>
          <ul className="flex flex-col">
            {dataMain["links"].map((data) => (
              <a href={data.link} key={data.id}>
                {data.text}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const FooterHeader = () => {
  return (
    <div>
      <div className="">
        <Image src={nardLogo} width={nardLogo} alt="Brand Logo" />
        <p className="mt-3">
          Crafting stunning and performant digital experiences, One Pixel at a
          time.
        </p>
      </div>
    </div>
  );
};

export const FooterData = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} max-w-[300px]`}>
      <div className="mb-2">
        <p className="flex items-center mb-2">
          Built by{" "}
          <a href="#" className="text-accent underline px-1">
            nard
          </a>{" "}
          from
          <Image
            src="/public/gh-flag.png"
            width={13}
            height={13}
            alt="Ghana Flag"
            className="rounded-full border border-blue-100 ml-1"
          />
        </p>
        <p>&copy; 2024 - 2024. All rights reserved. </p>
      </div>
      <div className="border-[1px] border-b border-border"></div>
      <div className="mt-2 ">
        <SocialLinkIcons GitHub X />
      </div>
    </div>
  );
};

export const MobileFooter = () => {
  return (
    <div className="md:hidden mt-3 pb-10">
      <FooterHeader />
      <FooterData className="mt-4" />

      <div className="footer-links mt-5">
        <FooterLinks />
      </div>
    </div>
  );
};

export const DesktopFooter = () => {
  return (
    <div className="hidden md:flex gap-10">
      <div className="flex flex-col gap-5">
        <FooterHeader />
        <FooterData />
      </div>
      <div className="footer-links">Links</div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="wrapper bg-white border-t border-border">
      <div className="container-4xl p-5 mt-4">
        <MobileFooter />
        <DesktopFooter />
      </div>
    </div>
  );
}
