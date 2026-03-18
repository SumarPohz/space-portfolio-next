"use client";

import { motion } from "framer-motion";

export const PrivacyPolicyContent = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: March 18, 2025 &nbsp;|&nbsp; Last Updated: March 18, 2026
          </p>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
            This Privacy Policy describes how <strong className="text-white">Sumar Pohsnem</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you visit{" "}
            <a href="https://sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
              sumarpohz.com
            </a>{" "}
            (the &quot;Website&quot;).
          </p>
        </div>

        {/* Section 1 */}
        <Section title="1. Information We Collect">
          <p>We may collect the following types of information when you visit our Website:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white/80">Usage Data:</strong> Pages visited, time spent, referral URLs, browser type, operating system, and IP address — collected automatically via server logs and analytics tools.</li>
            <li><strong className="text-white/80">Device Information:</strong> Screen resolution, language settings, and device type.</li>
            <li><strong className="text-white/80">Cookies &amp; Tracking Data:</strong> Small files stored on your device by us or third-party services (see the Cookies section below).</li>
            <li><strong className="text-white/80">Contact Form Data:</strong> Name, email address, and message content if you submit the contact form on this Website.</li>
          </ul>
          <p className="mt-3">We do <strong className="text-white/80">not</strong> collect sensitive personal information such as financial data, government IDs, or passwords.</p>
        </Section>

        {/* Section 2 */}
        <Section title="2. How We Use Your Information">
          <p>We use the information collected to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Operate, maintain, and improve the Website.</li>
            <li>Respond to inquiries submitted via the contact form.</li>
            <li>Analyze usage trends to improve user experience.</li>
            <li>Serve relevant advertisements through Google AdSense and other third-party ad networks.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section title="3. Cookies">
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files placed on your device. We use:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white/80">Essential Cookies:</strong> Required for the Website to function correctly.</li>
            <li><strong className="text-white/80">Analytics Cookies:</strong> Used by Google Analytics to understand how visitors interact with the Website (page views, session duration, traffic sources).</li>
            <li><strong className="text-white/80">Advertising Cookies:</strong> Used by Google AdSense and its partners, including the DoubleClick cookie, to serve personalised advertisements based on your interests and browsing history.</li>
          </ul>
          <p className="mt-3">
            <strong className="text-white/80">Managing Cookies:</strong> You can control or delete cookies through your browser settings. Disabling cookies may affect Website functionality. To opt out of interest-based advertising by Google, visit{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-cyan-400 underline">
              Google Ads Settings
            </a>{" "}
            or{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-cyan-400 underline">
              aboutads.info
            </a>.
          </p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Google AdSense &amp; Third-Party Advertising">
          <p>
            We use <strong className="text-white/80">Google AdSense</strong> to display advertisements on this Website. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to this Website and other websites on the internet.
          </p>
          <p className="mt-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. You may opt out of personalised advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-cyan-400 underline">
              Google Ads Settings
            </a>.
          </p>
          <p className="mt-3">
            Third-party ad vendors may also use cookies to collect data about your browsing behavior for interest-based advertising. We do not control these third-party cookies. Please refer to the respective privacy policies of these ad networks for more information.
          </p>
        </Section>

        {/* Section 5 */}
        <Section title="5. Google Analytics">
          <p>
            We may use <strong className="text-white/80">Google Analytics</strong> to understand how users interact with our Website. Google Analytics collects data such as your IP address, browser type, pages visited, and time spent on the Website. This data is aggregated and anonymised.
          </p>
          <p className="mt-3">
            You can opt out of Google Analytics by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-cyan-400 underline">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Third-Party Links">
          <p>
            Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </Section>

        {/* Section 7 */}
        <Section title="7. Data Sharing &amp; Disclosure">
          <p>We do not sell or rent your personal information to third parties. We may share information in the following limited circumstances:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white/80">Service Providers:</strong> Trusted third-party services (Google Analytics, Google AdSense, EmailJS) that assist us in operating the Website, subject to their own privacy policies.</li>
            <li><strong className="text-white/80">Legal Requirements:</strong> If required by law, court order, or government authority.</li>
            <li><strong className="text-white/80">Protection of Rights:</strong> To protect our rights, safety, or property.</li>
          </ul>
        </Section>

        {/* Section 8 */}
        <Section title="8. Your Rights">
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white/80">Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong className="text-white/80">Correction:</strong> Request correction of inaccurate data.</li>
            <li><strong className="text-white/80">Deletion:</strong> Request deletion of your personal data.</li>
            <li><strong className="text-white/80">Opt-Out:</strong> Opt out of interest-based advertising as described in the Cookies section.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:tech@sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
              tech@sumarpohz.com
            </a>.
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Children's Privacy">
          <p>
            This Website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
          </p>
        </Section>

        {/* Section 10 */}
        <Section title="10. Governing Law">
          <p>
            This Privacy Policy is governed by and construed in accordance with the laws of <strong className="text-white/80">India</strong>. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of India.
          </p>
        </Section>

        {/* Section 11 */}
        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the Website after changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Contact Us">
          <p>If you have any questions or concerns about this Privacy Policy, please contact:</p>
          <div className="mt-3 space-y-1">
            <p><strong className="text-white/80">Name:</strong> Sumar Pohsnem</p>
            <p>
              <strong className="text-white/80">Email:</strong>{" "}
              <a href="mailto:tech@sumarpohz.com" className="text-purple-400 hover:text-cyan-400 underline">
                tech@sumarpohz.com
              </a>
            </p>
            <p><strong className="text-white/80">Website:</strong>{" "}
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
