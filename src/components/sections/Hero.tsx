import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32">
      <div className="absolute inset-0 bg-grid-neutral-100/25 bg-[size:30px_30px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-neutral-950/20"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-neutral-100 dark:to-neutral-400">
            Craft Beautiful Digital Experiences
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Premium UI components and stunning templates for modern web applications.
            Built with React 19 and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              View Components <Sparkles className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}