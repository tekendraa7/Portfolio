
import type { Metadata } from 'next';
import { Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { FloatingChatButton } from '@/components/chat/FloatingChatButton'; // Import the chat button

const shareTechMono = Share_Tech_Mono({
  variable: '--font-share-tech-mono',
  subsets: ['latin'],
  weight: ['400'],
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
        url: 'https://placehold.co/1200x630.png?text=CyberShield+Portfolio&bg=0F0F0F&text=00F5D4',
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
      <body className={cn(shareTechMono.variable, "font-mono h-full antialiased flex flex-col")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark" 
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
          <FloatingChatButton /> {/* Add floating chat button here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
