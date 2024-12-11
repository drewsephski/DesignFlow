import React from 'react';
import { Button } from '@/components/ui/button';
import { Boxes } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Boxes className="h-6 w-6" />
          <span className="text-xl font-bold">DesignFlow</span>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <a href="/components" className="text-sm font-medium hover:text-primary">
            Components
          </a>
          <a href="/templates" className="text-sm font-medium hover:text-primary">
            Templates
          </a>
          <a href="/pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </a>
          <a href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}