'use client';



const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b pt-30 from-gray-950 to-gray-900 text-gray-200 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">Privacy Policy</h1>

        <p>
          This Privacy Policy outlines how BestCasinoAU ("we", "us", or "our") collects, uses, discloses,
          and protects your personal information when you use our website.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal details (such as name, email address, phone number) you provide via forms</li>
            <li>Technical data such as IP address, browser type, and device information</li>
            <li>Usage data such as pages visited, links clicked, and session duration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To operate and maintain our website</li>
            <li>To personalize your experience</li>
            <li>To communicate with you, including customer support</li>
            <li>To send promotional content (with your consent)</li>
            <li>To analyze trends and improve website performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Trusted third-party service providers who assist in operating our site</li>
            <li>Law enforcement agencies if required by law</li>
            <li>Analytics and advertising partners (like Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data.
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            We recommend reviewing their policies before providing any personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated
            "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, feel free to contact us:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>📍 123 Main Street, Sydney NSW 2000, Australia</li>
            <li>📞 <a href="tel:+61234567890" className="text-yellow-400 hover:underline">+61 7 2272 4125</a></li>
            <li>📧 <a href="mailto:info@bestcasinoau.com" className="text-yellow-400 hover:underline">info@bestcasinoau.com</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;