import SocialLinkIcons from "@/components/navbar/social-icons";

export default function Home() {
  return (
    <main>
      <div className="wrapper container-4xl">
        <div className="p-4">
          <p className="">Home</p>
          <SocialLinkIcons GitHub IG Discord />
        </div>
      </div>
    </main>
  );
}
