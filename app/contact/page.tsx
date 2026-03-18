import type { Metadata } from "next";
import { Contact } from "@/components/main/contact";

export const metadata: Metadata = {
  title: "Contact | Sumar Pohz",
  description:
    "Get in touch with Sumar Pohsnem — Full Stack Developer. Send a message via the contact form or reach out at tech@sumarpohz.com.",
};

export default function ContactPage() {
  return (
    <main className="h-full w-full">
      <Contact />
    </main>
  );
}
