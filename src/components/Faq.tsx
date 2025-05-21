'use client';

import { useEffect, useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'What is the focus of your casino English courses?',
    answer:
      'Our courses focus on vocabulary, slang, and real-world scenarios commonly encountered in Australian online and offline casinos. You’ll learn poker terms, dealer language, and conversation flow.',
  },
  {
    question: 'Are the courses suitable for beginners?',
    answer:
      'Yes! We have entry-level lessons that build your English gradually, no matter your previous experience. Advanced learners will also find high-level strategy discussions and simulations.',
  },
  {
    question: 'Do you offer certifications?',
    answer:
      'Absolutely. Upon completing each module or course, you receive a certificate that demonstrates your proficiency in casino-related English communication.',
  },
  {
    question: 'Can I access lessons on mobile?',
    answer:
      'Yes, all our lessons and live simulations are fully mobile-optimized, allowing you to study from your smartphone or tablet anytime.',
  },
  {
    question: 'Is personal coaching included?',
    answer:
      'Yes, you can book 1-on-1 private sessions with our experienced tutors to work on pronunciation, fluency, or industry-specific communication.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq'
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all"
            >
              <button
                className="w-full flex  justify-between items-center px-6 py-5 text-left text-lg font-semibold hover:bg-gray-700 transition-colors "
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="text-yellow-400 text-2xl transition-transform duration-300">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-300 text-base transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}