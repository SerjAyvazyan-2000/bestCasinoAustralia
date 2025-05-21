'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const partners = [
  {
    name: 'Golden Casino',
    logo: '/golden-casino.jpeg',
    url: 'https://casino.ru/casino-gold/',
  },
  {
    name: 'SmartTogether',
    logo: '/smart-together.webp',
    url: 'https://www.smart-together.com:2016/srm/',
  },
  {
    name: 'Poker Club',
    logo: '/poker-club.avif',
    url: 'https://play.crazypandagames.com/',
  },
  {
    name: 'Skillbox',
    logo: '/skillbox.jpeg',
    url: 'https://skillbox.am/ru/',
  },
  {
    name: 'GetCourse',
    logo: '/getcourse.jpeg',
    url: 'https://getcourse.ru/',
  },
  {
    name: 'Infourok',
    logo: '/infourok.jpeg',
    url: 'https://www.gov.am/ru/',
  },
];

export default function Partners() {
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
    <section id='partners'
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex  items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain h-16"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}