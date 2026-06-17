"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Et Türleri", href: "/et-turu" },
  { name: "Pişirme", href: "/hesaplama" },
  { name: "Soslar", href: "/soslar" },
  { name: "Baharat", href: "/baharatlar" },
  { name: "Marine", href: "/marineler" },
  { name: "Seviye", href: "/pisirme-seviyesi" },
  { name: "Dinlenme", href: "/dinlenme-suresi" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Flame className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold font-display">Etimen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              Giriş Yap
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1">
                  Giriş Yap
                </Button>
                <Button className="flex-1">
                  Kayıt Ol
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
