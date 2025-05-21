'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-10 md:right-10 z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-700 animate-fade-in-up">
        <div className="text-sm md:text-base">
          <strong>We use cookies</strong> to improve your experience on our site. By using this website, you agree to our{' '}
          <Link href="/cookie-policy" className="underline cursor-pointer text-blue-400 hover:text-blue-300" target="_blank">Cookie Policy</Link>.
        </div>
        <button
          onClick={acceptCookies}
          className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-sm md:text-base font-semibold"
        >
          Accept
        </button>
      </div>
    </div>
  );
}