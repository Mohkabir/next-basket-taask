import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/layout";

export const metadata: Metadata = {
  title: "Buy your Furniture Online",
  description: "Buy your Furniture Online from Bandage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
