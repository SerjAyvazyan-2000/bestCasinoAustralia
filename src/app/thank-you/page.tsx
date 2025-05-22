'use client';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 text-white">
            <div className="max-w-xl text-center space-y-6">
                <h1 className="text-5xl font-bold text-yellow-400">🎉 Thank You!</h1>
                <p className="text-lg">
                    Your message has been successfully sent. Our manager will contact you shortly.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-md transition"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}