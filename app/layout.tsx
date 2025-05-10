import "intersection-observer";
import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "On1y LLC",
  description:
    "Welcome to our technology company, where innovation meets excellence. We are dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age...",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/favicon_io/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

// ✅ Move themeColor here
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/favicon_io/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon_io/mstile-150x150.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
