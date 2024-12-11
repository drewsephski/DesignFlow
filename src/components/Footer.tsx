import React from 'react';
import { Boxes } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Boxes className="h-6 w-6" />
              <span className="text-xl font-bold">DesignFlow</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Crafting beautiful digital experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/components" className="hover:text-primary">Components</a></li>
              <li><a href="/templates" className="hover:text-primary">Templates</a></li>
              <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="/docs" className="hover:text-primary">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/blog" className="hover:text-primary">Blog</a></li>
              <li><a href="/careers" className="hover:text-primary">Careers</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} DesignFlow Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}