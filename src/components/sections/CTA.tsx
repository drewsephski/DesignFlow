import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Join thousands of developers and companies building exceptional user experiences with our
            premium components and expert guidance.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 px-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}