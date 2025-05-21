'use client';

import { FaChalkboardTeacher, FaGamepad, FaLanguage, FaUserGraduate, FaHeadset, FaCertificate } from 'react-icons/fa';

const services = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-400" />,
    title: 'Casino English Mastery',
    description: 'Comprehensive courses covering casino-specific vocabulary, phrases, and etiquette to help you communicate effectively in Australian casinos.',
  },
  {
    icon: <FaGamepad className="text-4xl text-yellow-400" />,
    title: 'Interactive Game Simulations',
    description: 'Engage in realistic casino game simulations to practice your English skills in context, enhancing both language and gaming proficiency.',
  },
  {
    icon: <FaLanguage className="text-4xl text-yellow-400" />,
    title: 'Australian Slang & Idioms',
    description: 'Learn common Australian expressions and slang used in casino settings to sound like a native and understand local players.',
  },
  {
    icon: <FaUserGraduate className="text-4xl text-yellow-400" />,
    title: 'Personalized Coaching',
    description: 'One-on-one sessions with experienced instructors to address your specific learning needs and goals in casino English.',
  },
  {
    icon: <FaHeadset className="text-4xl text-yellow-400" />,
    title: '24/7 Support & Resources',
    description: 'Access to a wealth of learning materials and round-the-clock support to assist you throughout your learning journey.',
  },
  {
    icon: <FaCertificate className="text-4xl text-yellow-400" />,
    title: 'Certification & Recognition',
    description: 'Receive official certification upon course completion to showcase your proficiency in casino English to potential employers.',
  },
];

export default function Services() {
  return (
    <section id='services' className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-300">
            Tailored English courses designed for the Australian online casino environment.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}