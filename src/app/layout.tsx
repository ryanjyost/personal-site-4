import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Flex, Text } from "@radix-ui/themes";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan J. Yost | Software Engineer",
  description:
    "Learn about me, my work, skills, technical writing, projects, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased bg-background`}>
        <ThemeProvider>
          <Flex direction="column" className="bg-background min-h-screen">
            <Header />
            <Flex className="max-w-5xl mx-auto px-6 w-full pt-16">{children}</Flex>
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
