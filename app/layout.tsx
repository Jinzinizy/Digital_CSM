import type { Metadata } from "next"; 
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digital CSM - Mujin Zhang",
  description: "Digital CSM take-home assignment submission for - Mujin Zhang",
};

const buttonClass = "flex-1 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-8 sm:h-10 px-2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}>
        
        {/* Logo at the top-right corner */}
        <header className="absolute top-4 right-4">
          <Image
            className="invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
        </header>

        {/* Home Button */}
        <header className="absolute top-4 left-4">
          <Link href="/" className={buttonClass}>
            Home
          </Link>
        </header>

        {/* Main content */}
        <main className="flex-grow flex flex-col justify-center items-center p-4">
          {children}
        </main>

        {/* Footer with just the Feedback Button */}
        <footer className="w-full bg-gray-900 p-4">
          <Link 
            href="/feedback"
            className={`${buttonClass} w-full`}
          >
            Question 4
          </Link>
        </footer>
      </body>
    </html>
  );
}
