'use client';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">BestCasinoAU</h3>
          <p className="text-sm leading-relaxed">
            The ultimate platform for mastering Australian casino English. Learn from real professionals, practice in real scenarios, and get certified.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Main Street, Sydney NSW 2000, Australia</li>
            <li>📞 <a href="tel:+61234567890" className="hover:text-yellow-400">+61 2 3456 7890</a></li>
            <li>✉️ <a href="mailto:info@bestcasinoau.com" className="hover:text-yellow-400">info@bestcasinoau.com</a></li>
          </ul>
        </div>

        {/* Info & Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Info</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cookie-policy" className="hover:text-yellow-400">Cookie Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-yellow-400">Terms of Use</Link></li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-xl">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-xl">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-xl">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 BestCasinoAU. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;