import React from 'react';
import { Card } from '@/components/ui/card';
import { Layout, Layers, Box } from 'lucide-react';

const components = [
  {
    title: 'Responsive Layouts',
    description: 'Fluid grid systems and flexible components that adapt seamlessly to any screen size.',
    icon: Layout,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UI Component Library',
    description: 'Extensive collection of customizable components built with modern best practices.',
    icon: Layers,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Design Systems',
    description: 'Comprehensive design systems that ensure consistency across your applications.',
    icon: Box,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function ComponentShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Premium Components</h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Explore our collection of hand-crafted components
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {components.map((component, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 bg-gradient-to-br ${component.gradient}`}
              />
              <component.icon className="h-12 w-12 transition-transform duration-300 group-hover:-rotate-12" />
              <h3 className="mt-6 text-2xl font-bold">{component.title}</h3>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                {component.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}