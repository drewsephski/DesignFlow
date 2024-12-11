import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Zap, Shield } from 'lucide-react';

const features = [
  {
    title: 'Modern Tech Stack',
    description: 'Built with React 19, TypeScript, and Tailwind CSS for robust, type-safe development.',
    icon: Code2,
  },
  {
    title: 'Beautiful Design',
    description: 'Carefully crafted UI components with attention to detail and aesthetics.',
    icon: Palette,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for performance with code splitting and lazy loading.',
    icon: Zap,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with regular updates and maintenance.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Discover the advantages of working with our modern web design agency.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-white shadow-lg dark:bg-neutral-800">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}