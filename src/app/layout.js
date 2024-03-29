import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
