import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Geist Sans is primary, Geist Mono can be removed if not specifically needed for code blocks
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CyberShield Portfolio - Tekendra Bhandari',
  description: 'Portfolio and AI-powered Q&A by Tekendra Bhandari, focusing on Linux, Cybersecurity, and Networking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(geistSans.variable, "h-full antialiased flex flex-col")}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
