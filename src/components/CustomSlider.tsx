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
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
            💎 Explore Our Features
          </h2>

          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
          >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/5 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md hover:scale-[1.02] hover:shadow-2xl transition-all duration-500">
                    <div className="relative w-full h-52 md:h-60">
                      <Image
                          src={slide.image}
                          alt={slide.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-2xl"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-yellow-400">{slide.title}</h3>
                      <p className="text-sm text-gray-300">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}