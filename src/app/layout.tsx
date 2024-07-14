import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer-section";
import { AppProvider } from "./store";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nard Portfolio",
  description:
    "Crafting stunning and performant user interfaces, one pixel at a time",
  icons: {
    icon: "favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en" className="dark">
        <body
          className={` bg-background text-13px text-foreground min-h-screen`}
        >
          <header>
            <NavBar />
          </header>
          <>{children}</>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </AppProvider>
  );
}
