
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
});

// General metadata for the site
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
    url: 'https://yourdomain.com', // Replace with your actual domain
    siteName: 'CyberShield Portfolio',
     images: [ // Add a default OG image for the whole site
      {
        url: 'https://placehold.co/1200x630.png?text=CyberShield+Portfolio', // Replace with your actual default OG image
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
      <body className={cn(robotoMono.variable, "font-mono h-full antialiased flex flex-col")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          {/* The main content area will scroll, header/footer can be fixed or scroll with content */}
          <main className="flex-grow pt-16"> {/* Add padding-top to account for sticky header */}
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
