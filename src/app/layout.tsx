
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed to Inter
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { FloatingChatButton } from '@/components/chat/FloatingChatButton';
import imageData from '@/lib/placeholder-images.json';
import { CyberBackground } from '@/components/layout/CyberBackground';

const inter = Inter({
  variable: '--font-sans', // Use sans-serif variable
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CyberShield Portfolio - Tekendra Bhandari',
    template: '%s - CyberShield Portfolio',
  },
  description: 'Portfolio, AI Q&A, and Cybersecurity Roadmap by Tekendra Bhandari. Specializing in Linux, Cybersecurity, and Networking.',
  openGraph: {
    title: 'CyberShield Portfolio - Tekendra Bhandari',
    description: 'Portfolio, AI Q&A, and Cybersecurity Roadmap.',
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-tekendraas-projects.vercel.app/', 
    siteName: 'CyberShield Portfolio',
     images: [
      {
        url: imageData.openGraph.main.url,
        width: 1200,
        height: 630,
        alt: 'CyberShield Portfolio',
      },
    ],
  },
  // Add other general metadata like icons, twitter card info, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans h-full flex flex-col")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light" // Changed default to light
            enableSystem
            disableTransitionOnChange
        >
          <CyberBackground />
          <div className="relative z-10 flex flex-col h-full">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <FloatingChatButton /> {/* Add floating chat button here */}
        </ThemeProvider>
      </body>
    </html>
  );
}

    