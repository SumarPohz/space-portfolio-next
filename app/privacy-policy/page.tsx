import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/main/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Sumar Pohz",
  description:
    "Privacy Policy for sumarpohz.com — how we collect, use, and protect your data, including Google AdSense and Google Analytics usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="h-full w-full">
      <PrivacyPolicyContent />
    </main>
  );
}
