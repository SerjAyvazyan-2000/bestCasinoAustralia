'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Casino English Courses?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our courses are tailored specifically for the Australian online casino environment, ensuring you gain the language skills needed to excel.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Comprehensive vocabulary and phrase training.</li>
              <li>Real-life casino scenarios and simulations.</li>
              <li>Experienced instructors with industry knowledge.</li>
              <li>Flexible online learning to suit your schedule.</li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <Image
              src="/images.avif"
              alt="Casino Learning"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Image
              src="/rendering.avif"
              alt="English Class"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-4">Enhance Your Communication Skills</h2>
            <p className="text-lg text-gray-300 mb-6">
              Effective communication is key in the casino industry. Our courses focus on improving your speaking and listening skills to help you interact confidently.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Interactive speaking exercises.</li>
              <li>Listening comprehension practice.</li>
              <li>Pronunciation and accent training.</li>
              <li>Feedback and personalized coaching.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}