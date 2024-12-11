import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuración de Heebo
const heebo = localFont({
  src: [
    { path: "./fonts/Heebo-Medium.woff2", weight: "500" },
    { path: "./fonts/Heebo-Bold.woff2", weight: "700" },
  ],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Globant AI Powerhouse | Technology that Dares to Delight",
  description:
    "We help organizations through digital transformation. We deliver engineering, innovation, design & AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
