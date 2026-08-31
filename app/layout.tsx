import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sds-startdevserver.vercel.app"
  ),
  title: "SDS - Start Dev Server - Run Your React & Next.js Projects in a Click",
  description:
    "Start your development server and auto-redirect to a new browser tab with localhost URL in a single click. The essential tool for React and Next.js developers.",
  applicationName: "Start Dev Server (SDS)",
  authors: [
    {
      name: "Shani Tiwari",
      url: "https://twitter.com/shanidevelops",
    },
  ],
  creator: "Shani Tiwari",
  publisher: "Shani Tiwari",
  keywords: [
    "Start Dev Server",
    "SDS",
    "VS Code Extension",
    "React",
    "Next.js",
    "Development Server",
    "Developer Tools",
    "Localhost Automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SDS - Start Dev Server",
    title: "SDS - Start Dev Server - Run Your React & Next.js Projects in a Click",
    description:
      "Start your development server and auto-redirect to a new browser tab with localhost URL in a single click. Run your React and Next.js projects effortlessly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SDS - Start Dev Server - Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDS - Start Dev Server - Run Your React & Next.js Projects in a Click",
    description:
      "Start your development server and auto-redirect to a new browser tab with localhost URL in a single click.",
    creator: "@shanidevelops",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/sds-logo.png",
    apple: "/sds-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
