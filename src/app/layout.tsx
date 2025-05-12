import type { Metadata } from 'next';
import { Geist_Sans as GeistSans } from 'next/font/google'; // Use Geist Sans
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/layout/ThemeProvider'; // Import ThemeProvider

const geistSans = GeistSans({
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
    <html lang="en" className="h-full" suppressHydrationWarning> {/* suppressHydrationWarning for next-themes */}
      <body className={cn(geistSans.variable, "h-full antialiased flex flex-col")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
