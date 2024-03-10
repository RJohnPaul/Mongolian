import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mongolian",
  description: "Just as the Mongols traversed diverse terrains with ease, MongoDB seamlessly navigates through your data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrelineScript />
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
