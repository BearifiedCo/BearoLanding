import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { WalletProvider } from "@/contexts/WalletContext";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/utils/constants";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${syne.variable} ${geistMono.variable} ${geist.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark", "light"]}
          disableTransitionOnChange
        >
          <WalletProvider>
            <div className="flex min-h-screen flex-col">
              {/* <Header /> */}
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
