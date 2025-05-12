import type { Metadata } from 'next';
import { Roboto_Mono as RobotoMono } from 'next/font/google'; // Use Roboto Mono Google Font
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/layout/ThemeProvider'; // Import ThemeProvider

// Configure Roboto Mono font
const robotoMono = RobotoMono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap', // Ensure font displays immediately with fallback
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
      {/* Apply the font variable to the body */}
      <body className={cn(robotoMono.variable, "font-mono h-full antialiased flex flex-col")}> {/* Use font-mono utility class */}
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
