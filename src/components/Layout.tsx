import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Libre Store",
  description: "Tienda de ropa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
