import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://luxury-car-partners.brighclik.chatgpt.site";

export const metadata: Metadata = {
  title: "Lavish Rental | Luxury Vehicle Partner Program",
  description: "Partner with Lavish Rental in Greater Montréal and put your luxury vehicle to work.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Lavish Rental | Put Your Luxury Car to Work.",
    description: "A managed luxury vehicle partner program in Greater Montréal.",
    images: [{ url: "https://luxury-car-partners.brighclik.chatgpt.site/og.png", width: 1730, height: 909, alt: "Put Your Luxury Car to Work" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavish Rental | Put Your Luxury Car to Work.",
    description: "A managed luxury vehicle partner program in Greater Montréal.",
    images: ["https://luxury-car-partners.brighclik.chatgpt.site/og.png"],
  },
  icons: {
    icon: "https://luxury-car-partners.brighclik.chatgpt.site/favicon.svg",
    shortcut: "https://luxury-car-partners.brighclik.chatgpt.site/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
