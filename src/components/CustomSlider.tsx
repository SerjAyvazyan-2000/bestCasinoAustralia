'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  {
    title: 'Master Casino English',
    description: 'Learn the specific vocabulary and phrases used in Australian casinos to communicate effectively.',
    image: '/slide1.jpg',
  },
  {
    title: 'Interactive Simulations',
    description: 'Engage in realistic casino scenarios to practice your English skills in context.',
    image: '/slide2.jpg',
  },
  {
    title: 'Australian Slang & Idioms',
    description: 'Understand and use common Australian expressions to sound like a native.',
    image: '/slide3.jpg',
  },
  {
    title: 'Personalized Coaching',
    description: 'Receive one-on-one sessions tailored to your learning needs and goals.',
    image: '/slide4.jpg',
  },
  {
    title: '24/7 Support & Resources',
    description: 'Access a wealth of learning materials and round-the-clock assistance.',
    image: '/slide5.jpg',
  },
  {
    title: 'Certification & Recognition',
    description: 'Earn certificates to showcase your proficiency to potential employers.',
    image: '/slide6.jpg',
  },
  {
    title: 'Flexible Online Learning',
    description: 'Study at your own pace with our mobile-optimized lessons.',
    image: '/slide7.jpg',
  },
];

export default function CustomSlider() {
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
    <section
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Explore Our Features</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="md:w-1/2">
               <Image
  src={slide.image}
  alt={slide.title}
  width={600}
  height={300}
  className="object-cover w-full h-[200px] md:h-[300px]"
/>
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">{slide.title}</h3>
                  <p className="text-gray-300">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}