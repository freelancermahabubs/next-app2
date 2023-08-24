"use client";
import Menu from "@/components/Menu";
// import {Hind_Siliguri} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import Script from "next/script";
// const Siliguri = Hind_Siliguri({
//   subsets: ["bengali"],
//   weight: ["300", "400", "700"],
//   variable: "--font-siliguri",
// });
const Siliguri = localFont({
  src: "./fonts/my.ttf",
  variable: "--font-siliguri",
});
export default function RootLayout({children}) {
  return (
    <html lang="en" className={Siliguri.variable}>
      <body>
        <Menu />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" />
        <ProgressBar
          height="4px"
          color="#ff22cc"
          opitons={{showSpinner: false}}
        />
      </body>
    </html>
  );
}
