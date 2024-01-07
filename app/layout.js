import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Couply",
  description: "Shopping with coupons, applied automatically!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(nunito.className, "mx-5 sm:mx-14 md:mx-32")}>
        {children}
      </body>
    </html>
  );
}
