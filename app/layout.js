import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata
export const metadata = {
  title: "C-Wash",
  description: "Temukan tempat cuci mobil terbaik di sekitar Anda",
  icons: {
    icon: [
      { url: '/images/cwash-logo.png', type: 'image/png' },
    ],
    apple: { url: '/images/cwash-logo.png', type: 'image/png' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/cwash-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/cwash-logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
