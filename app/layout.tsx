import { Geist, Geist_Mono, Raleway, IBM_Plex_Sans } from "next/font/google"

import "./globals.css"
import Navigation from "@/components/Navigation"
import { cn } from "@/lib/utils";

const ibmPlexSansHeading = IBM_Plex_Sans({subsets:['latin'],variable:'--font-heading'});

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "ZayeedBooks",
  description: 
  "Penerbit Buku No 1 di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", raleway.variable, ibmPlexSansHeading.variable)}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
