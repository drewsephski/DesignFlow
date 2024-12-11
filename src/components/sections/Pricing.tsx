import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'Perfect for small projects and individual developers',
    features: [
      'Up to 5 projects',
      'Basic components',
      'Community support',
      'Monthly updates',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      'Premium components',
      'Priority support',
      'Custom themes',
      'Advanced analytics',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'Advanced features for large organizations',
    features: [
      'Everything in Pro',
      'Custom development',
      'Dedicated support',
      'SLA guarantee',
      'White-labeling',
      'API access',
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative bg-neutral-50 py-24 dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.05),transparent)]"></div>
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Choose the perfect plan for your needs
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={!isYearly ? 'font-semibold' : 'text-neutral-600'}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={isYearly ? 'font-semibold' : 'text-neutral-600'}>
              Yearly <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.recommended
                  ? 'border-primary shadow-lg dark:border-primary'
                  : 'border-border'
              }`}
            >
              {plan.recommended && (
                <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rotate-45 bg-primary px-8 py-1 text-sm text-primary-foreground">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                <Button className="mt-8 w-full" variant={plan.recommended ? 'default' : 'outline'}>
                  Get Started
                </Button>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}