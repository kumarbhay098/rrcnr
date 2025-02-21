import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "South Central Railway",
  description: "South Central Railway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#B0C4DE] min-h-screen flex flex-col justify-between mx-auto w-[1100px] p-4`}
      >
        <div className="bg-white p-5">
         <div className="flex flex-row">
         <Image src={"/main_logo.jpg"} alt="logo" width={100} height={100} />
            <div className="flex flex-row">
              <Image src={"/south.jpg"} alt="logo" width={600} height={100} />
              <Image src={"/voters.png"} alt="logo" width={120} height={100} />  
            </div>
          </div>
          <Navbar />
        </div>
        {children}
        {/* <div className="text-center p-8">© Copyright 2011-21 RRC NR</div> */}
      </body>
    </html>
  );
}
