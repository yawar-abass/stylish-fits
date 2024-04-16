import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import TopBar from "@/components/Layout/TopBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Stylish Fits",
  description: "We are dealing with Clothing fashion for Mens and Womens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
