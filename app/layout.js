import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tesla",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
