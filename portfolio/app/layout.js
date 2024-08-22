import React from 'react'
import { Inter } from "next/font/google";
import "./styles/reset.css";
import  "./styles/globals.css"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import StarsCanvas from './components/background/background';

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "My Portfolio",
//   description: "This website is my portfolio",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    <StarsCanvas/>
    <main style={{ position: "relative", zIndex: 1 }}>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
