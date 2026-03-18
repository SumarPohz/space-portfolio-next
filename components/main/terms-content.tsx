"use client";

import { motion } from "framer-motion";

export const TermsContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#030014] pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: March 18, 2025 &nbsp;|&nbsp; Last Updated: March 18, 2026
          </p>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using{" "}
            <a href="https://sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
              sumarpohz.com
            </a>{" "}
            (the &quot;Website&quot;) operated by <strong className="text-white">Sumar Pohsnem</strong>.
          </p>
        </div>

        {/* Section 1 */}
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using this Website, you agree to be bound by these Terms and our{" "}
            <a href="/privacy-policy" className="text-purple-400 hover:text-cyan-400 underline">
              Privacy Policy
            </a>
            . If you do not agree with any part of these Terms, you must not use this Website.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Use of the Website">
          <p>You agree to use this Website only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use the Website for any unlawful or fraudulent purpose.</li>
            <li>Scrape, crawl, or harvest content from this Website without prior written permission.</li>
            <li>Attempt to gain unauthorized access to any part of the Website or its related systems.</li>
            <li>Transmit any viruses, malware, or harmful code through the Website.</li>
            <li>Use the Website in any way that may damage, disable, or impair its functionality.</li>
            <li>Reproduce, duplicate, copy, or sell any portion of the Website without express written permission.</li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section title="3. Intellectual Property">
          <p>
            All content on this Website — including but not limited to text, graphics, logos, images, code, and design — is the intellectual property of <strong className="text-white/80">Sumar Pohsnem</strong> unless otherwise stated.
          </p>
          <p className="mt-3">
            You may not reproduce, distribute, modify, or create derivative works from any content on this Website without prior written consent. Open-source code linked from this Website is governed by its respective open-source license.
          </p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Third-Party Links &amp; Advertisements">
          <p>
            This Website may contain links to third-party websites and display advertisements served by third-party networks (such as Google AdSense). We are not responsible for the content, privacy practices, or accuracy of any third-party websites or advertisements.
          </p>
          <p className="mt-3">
            Links to third-party sites do not constitute an endorsement by us. You access such sites at your own risk.
          </p>
        </Section>

        {/* Section 5 */}
        <Section title="5. Disclaimers">
          <p>
            This Website is provided on an <strong className="text-white/80">&quot;as is&quot;</strong> and <strong className="text-white/80">&quot;as available&quot;</strong> basis. We make no warranties, expressed or implied, including but not limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The accuracy, completeness, or timeliness of any content on the Website.</li>
            <li>The uninterrupted or error-free operation of the Website.</li>
            <li>The fitness of the Website or its content for any particular purpose.</li>
          </ul>
          <p className="mt-3">
            We reserve the right to modify, suspend, or discontinue any part of the Website at any time without notice.
          </p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, <strong className="text-white/80">Sumar Pohsnem</strong> shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your use of or inability to use the Website.</li>
            <li>Any errors or omissions in the content of the Website.</li>
            <li>Unauthorized access to or alteration of your data.</li>
            <li>Any third-party content or advertisements displayed on the Website.</li>
          </ul>
        </Section>

        {/* Section 7 */}
        <Section title="7. Privacy">
          <p>
            Your use of this Website is also governed by our{" "}
            <a href="/privacy-policy" className="text-purple-400 hover:text-cyan-400 underline">
              Privacy Policy
            </a>
            , which is incorporated by reference into these Terms.
          </p>
        </Section>

        {/* Section 8 */}
        <Section title="8. Changes to Terms">
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of the Website after changes are posted constitutes your acceptance of the updated Terms.
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Governing Law &amp; Jurisdiction">
          <p>
            These Terms are governed by and construed in accordance with the laws of <strong className="text-white/80">India</strong>. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of India.
          </p>
        </Section>

        {/* Section 10 */}
        <Section title="10. Contact Us">
          <p>If you have questions about these Terms, please contact:</p>
          <div className="mt-3 space-y-1">
            <p><strong className="text-white/80">Name:</strong> Sumar Pohsnem</p>
            <p>
              <strong className="text-white/80">Email:</strong>{" "}
              <a href="mailto:tech@sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
                tech@sumarpohz.com
              </a>
            </p>
            <p>
              <strong className="text-white/80">Website:</strong>{" "}
              <a href="https://sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
                sumarpohz.com
              </a>
            </p>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
      <h2 className="text-white/90 text-xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-300 leading-relaxed text-sm space-y-2">{children}</div>
    </div>
  );
}
