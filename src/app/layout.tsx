import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Happy Currents: Custom Awards | Maatwerk Trofeeën & Awards",
  description: "Happy Currents maakt custom awards en trofeeën van hout, acryl, metaal en glas. Volledig op maat, met optionele elektrische systemen zoals lampjes en bewegende onderdelen.",
  keywords: "custom awards, trofeeën, maatwerk, hout, acryl, metaal, glas, sporttournooien, muziekcompetities, dans battles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
