
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, MapPinned, Rss as BlogsIcon } from 'lucide-react'; // Added BlogsIcon
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/qa', label: 'Q&A' },
  { href: '/blogs', label: 'Blogs' }, // Changed from Resources to Blogs
  { href: '/roadmap', label: 'Roadmap' },
];

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, className }) => {
  const pathname = usePathname();
  // For roadmap, we want to highlight if any sub-path of /roadmap is active.
  // For other links, exact match.
  const isActive = href === '/roadmap' ? pathname.startsWith('/roadmap') : pathname === href;
  // Also highlight /blogs if on that page
  const isBlogsActive = href === '/blogs' ? pathname.startsWith('/blogs') : false;


  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        (isActive || isBlogsActive) ? "text-primary font-semibold" : "text-foreground/80",
        className
      )}
    >
      {label}
    </Link>
  );
};


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) { // Prevents hydration mismatch for theme toggle and mobile menu
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-primary">CyberShield</span>
          </Link>
          <div className="flex items-center gap-2">
             <div className="h-9 w-9 rounded-md bg-muted/50 animate-pulse" /> {/* Placeholder for ThemeToggle */}
             <div className="md:hidden h-10 w-10 bg-muted/50 animate-pulse rounded-md" /> {/* Placeholder for Menu button */}
          </div>
        </div>
      </header>
    );
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary">CyberShield</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-6 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShieldCheck className="h-7 w-7 text-primary" />
                      <span className="text-xl font-bold text-primary">CyberShield</span>
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                       <NavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg py-3 px-2 rounded-md hover:bg-accent/50" // Larger clickable area for mobile
                      />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
