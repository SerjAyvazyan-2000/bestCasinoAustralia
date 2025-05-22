'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Best Online Casino English Courses 🇦🇺',
    text: 'Learn advanced casino terminology, betting phrases, and table talk — all in native-level Australian English.',
    button: 'Start Learning',
    image: 'https://img.freepik.com/premium-photo/laptop-with-playing-cards-poker-chips-green-table_93675-174404.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740',
  },
  {
    title: 'Speak Like a Pro at the Poker Table ♠️',
    text: 'Master bluffing terms, reading opponents, and confidently communicating during real poker games and tournaments.',
    button: 'Explore Poker Lessons',
    image: 'https://img.freepik.com/premium-photo/online-gambling-mobile_99433-4594.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740',
  },
  {
    title: 'From Slots to Strategy 🎰',
    text: 'Boost your vocabulary for every casino section — from machines to live blackjack — and impress native players.',
    button: 'View All Courses',
    image: 'https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99917.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740',
  },
];

export default function Hero() {
  return (
    <section id='hero' className="relative w-full pt-20">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full pt-40 pb-40 h-full min-h-150 bg-center bg-cover relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 z-0" />
              <div className="z-10 text-white text-center px-6 max-w-3xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">{slide.text}</p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-yellow-400 text-white rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-red-600 transition-all duration-300"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}