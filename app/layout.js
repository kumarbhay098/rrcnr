import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRCNR",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#B6EBFA] min-h-screen flex flex-col justify-between mx-auto w-[1100px] p-4` }
      >
        <div>
          <Image
            src={"/logo.jpg"}
            width={1000}
            height={1000}
            className="w-full"
          />
          <Navbar />
        </div>
        {children}
        <div className="text-center p-8">© Copyright 2011-21 RRC NR</div>
      </body>
    </html>
  );
}
