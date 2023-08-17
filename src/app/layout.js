"use client";
import Menu from "@/components/Menu";
import "./globals.css";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <ProgressBar
          height="4px"
          color="#ff22cc"
          opitons={{showSpinner: false}}
        />
      </body>
    </html>
  );


}
