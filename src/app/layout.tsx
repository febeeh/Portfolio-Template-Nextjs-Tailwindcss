import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { Providers } from "@/utils/reduxProvider";
import ProjectList from "@/components/main/projectList";

export const metadata: Metadata = {
  title: "Portfolio Template - Nextjs & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
      </head>
      <body className={`main_section`}>
        <Providers>
          <Header />
          {children}
          <ProjectList />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
