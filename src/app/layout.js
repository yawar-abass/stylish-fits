import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import TopBar from "@/components/Layout/TopBar";
import { ContextProvider } from "@/store/context";
import StoreProvider from "@/components/Providers/StoreProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Stylish Fits",
  description: "We are dealing with Clothing fashion for Mens and Womens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <ContextProvider> */}
        <StoreProvider>
          <TopBar />
          <Navbar />

          {children}
        </StoreProvider>
        {/* </ContextProvider> */}
      </body>
    </html>
  );
}
