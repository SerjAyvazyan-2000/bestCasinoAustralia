'use client';

import { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    frequency: 'per month',
    features: [
      'Access to basic courses',
      'Community support',
      'Limited resources',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    frequency: 'per month',
    features: [
      'All Starter features',
      'Advanced courses',
      'Priority support',
      'Unlimited resources',
    ],
    cta: 'Upgrade Now',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    frequency: 'per month',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom solutions',
      '24/7 support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='prising'
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-300 mb-12">
          Choose the plan that best fits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 flex flex-col ${
                plan.popular
                  ? 'bg-blue-600 border-blue-700 scale-105 shadow-lg'
                  : 'bg-gray-800 border-gray-700'
              } transition-transform duration-300`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-base font-medium text-gray-300">
                  {' '}
                  {plan.frequency}
                </span>
              </p>
              <ul className="flex-1 mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href='#contact'
                className={`mt-auto px-6 py-2 rounded-md font-semibold ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-200'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}