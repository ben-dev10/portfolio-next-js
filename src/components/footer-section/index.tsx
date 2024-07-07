import Image from "next/image";
import nardLogo from "public/logos/nard-logo-2b.svg";
import SocialLinkIcons from "../navbar/social-icons";

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
    <div className={`${className} divide-y divide-border max-w-[300px]`}>
      <div className="mb-2">
        <p className="flex items-center">
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
      <div className="mt-2 translate-y-[10px]">
        <SocialLinkIcons GitHub X  />
      </div>
    </div>
  );
};

export const MobileFooter = () => {
  return (
    <div className="md:hidden mt-3 pb-10">
      <FooterHeader />
      <FooterData className="mt-4" />

      <div className="footer-links mt-3">Links</div>
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
