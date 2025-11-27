
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, MapPinned, Rss as BlogsIcon, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/qa', label: 'Q&A' },
  { href: '/blogs', label: 'Research' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/market', label: 'Market' },
];

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "text-muted-foreground",
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


  if (!mounted) { 
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">CyberShield</span>
          </Link>
          <div className="flex items-center gap-2">
             <div className="h-9 w-9 rounded-md bg-muted/50 animate-pulse" />
             <div className="md:hidden h-10 w-10 bg-muted/50 animate-pulse rounded-md" />
          </div>
        </div>
      </header>
    );
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">CyberShield</span>
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
                      <span className="text-xl font-bold text-foreground">CyberShield</span>
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
                        className="text-lg py-3 px-2 rounded-md hover:bg-secondary"
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
