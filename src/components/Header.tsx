'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

const navItems = [
    {label: 'Hero', id: 'hero'},
    {label: 'About', id: 'about'},
    {label: 'Services', id: 'services'},
    {label: 'Pricing', id: 'pricing'},
    {label: 'FAQ', id: 'faq'},
    {label: 'Partners', id: 'partners'},
    {label: 'Contact', id: 'contact'},
];


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    const pathname = usePathname(); // текущий путь
    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const href = pathname === '/' ? '#hero' : '/';

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-22">
                    {/* Logo */}
                    <div className="flex-shrink-0">

                        <Link href={href} className="text-white text-2xl font-bold">
                            <Image
                                src="/logo.png"
                                alt="Casino Learning"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => {
                            const href =
                                pathname === '/' ? `#${item.id}` : `/`;

                            return (
                                <Link
                                    key={item.id}
                                    href={href}
                                    className="text-white hover:text-yellow-400 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Contact Info */}
                    <div className="hidden md:flex flex-col text-right text-sm text-white">
                        <a href="tel:+61234567890" className="hover:text-yellow-400">
                            +61 7 2272 4125
                        </a>
                        <a href="mailto:info@bestcasinoau.com" className="hover:text-yellow-400">
                            info@bestcasinoau.com
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                {/* Line 1 */}
                                <span
                                    className={`absolute h-[2px] w-full bg-white left-0 top-1/2 transition-all duration-300 ease-in-out ${
                                        menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                                />
                                {/* Line 2 */}
                                <span
                                    className={`absolute h-[2px] w-full bg-white left-0 top-1/2 transition-all duration-300 ease-in-out ${
                                        menuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                {/* Line 3 */}
                                <span
                                    className={`absolute h-[2px] w-full bg-white left-0 top-1/2 transition-all duration-300 ease-in-out ${
                                        menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm">
                    <nav className="px-2 pt-2 pb-4 space-y-1">
                        {navItems.map((item) => {
                            const href =
                                pathname === '/' ? `#${item.id}` : `/`;
                          return  <a
                                key={item.id}
                                href={href}
                                onClick={handleLinkClick}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400"
                            >
                                {item.label}
                            </a>
                        })}
                        <div className="mt-4 px-3 text-sm text-white">
                            <a href="tel:+61234567890" className="block hover:text-yellow-400">
                                +61 7 2272 4125
                            </a>
                            <a href="mailto:info@bestcasinoau.com" className="block hover:text-yellow-400">
                                info@bestcasinoau.com
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}