import { Text } from "@/ui/text/text";
import Image from "next/image";
import hero1 from "public/hero-images/hero-1.png";
import hero2 from "public/hero-images/hero-2.png";
import hero3 from "public/hero-images/hero-3.png";

export const HeroSection = () => {
  return (
    <div className="hero">
      <Text as="h1" size="h1" className="text-3xl text-foreground-secondary">
        Crafting stunning and performant UIs, One pixel at a time.
      </Text>
      <p className="">
        My name is Ben, and I love to design and build stunning, performant and
        secure UIs for various platforms, but primarily for websites.
      </p>
      <div className="ctas"></div>
      <div className="hero-images overflow-y-hidden relative mt-5">
        <div className="mx-auto overflow-y-hidden min-h-[350px] w-[300px]">
          <Image
            src={hero2}
            width={406}
            alt="hero-image-2"
            className="absolute "
          />
          <Image
            src={hero1}
            width={318}
            alt="hero-image-1"
            className="absolute top-10 mx-auto"
          />
          <Image
            src={hero3}
            width={321}
            alt="hero-image-3"
            className="absolute top-20 "
          />
        </div>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return <div>Hero</div>;
};

export default function Home() {
  return (
    <main>
      <div className="wrapper container-4xl p-5">
        <HeroSection />
      </div>
    </main>
  );
}
