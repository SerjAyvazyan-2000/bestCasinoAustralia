'use client';

import { useEffect, useRef, useState } from 'react';
import { FaChalkboardTeacher, FaClock, FaCertificate, FaGlobe, FaRocket, FaHeart } from 'react-icons/fa';

const benefits = [
  {
    title: 'Expert-Led Courses',
    text: 'All courses are taught by professionals with real casino and teaching experience.',
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Learn Anytime, Anywhere',
    text: 'Our platform is fully responsive and accessible on all devices, 24/7.',
    icon: <FaClock className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Official Certification',
    text: 'Showcase your progress with verified, shareable certificates upon completion.',
    icon: <FaCertificate className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Global Reach',
    text: 'Join thousands of learners from Australia and around the world.',
    icon: <FaGlobe className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Fast Progress',
    text: 'Our interactive lessons are optimized to deliver rapid, real-world results.',
    icon: <FaRocket className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Built with Passion',
    text: 'We care about your success and build each course with love and dedication.',
    icon: <FaHeart className="text-4xl text-yellow-400" />,
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the top reasons why learners, professionals, and casino enthusiasts trust our platform to level up their English and communication skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}