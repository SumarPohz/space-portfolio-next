import type { Metadata } from "next";
import { TermsContent } from "@/components/main/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | Sumar Pohz",
  description:
    "Terms of Service for sumarpohz.com — the rules and guidelines governing your use of this website.",
};

export default function TermsPage() {
  return (
    <main className="h-full w-full">
      <TermsContent />
    </main>
  );
}
