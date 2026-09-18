"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const WHATSAPP_NUMBER = "2348085942475";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_WHATSAPP_MESSAGE
)}`;

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const vehicle = String(formData.get("vehicle") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello A-ZED 69 Autos, I would like to make an enquiry.",
      "",
      "*CUSTOMER DETAILS*",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      "",
      "*ENQUIRY DETAILS*",
      `Interest: ${interest}`,
      `Vehicle: ${vehicle || "Not specified"}`,
      "",
      "*MESSAGE*",
      message,
      "",
      "I would like to get more information about this enquiry.",
    ].join("\n");

    const enquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(enquiryUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Contact A-ZED 69 Autos
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Talk
              <span className="block text-red-600">
                About Your Next Car.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Looking for a specific vehicle, interested in an auction car, or
              need help with shipping? Get in touch with A-ZED 69 Autos and
              let&apos;s discuss what you need.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700"
              >
                Chat On WhatsApp
              </a>

              <a
                href="tel:08085942475"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={<PhoneIcon />}
              label="Call Us"
              value="07052153993"
              href="tel:07052153993"
            />

            <ContactCard
              icon={<PhoneIcon />}
              label="Call / WhatsApp"
              value="08085942475"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              external
            />

            <ContactCard
              icon={<MailIcon />}
              label="Email Us"
              value="azed69autos@gmail.com"
              href="mailto:azed69autos@gmail.com"
            />

            <ContactCard
              icon={<WhatsAppIcon />}
              label="WhatsApp"
              value="Chat With Us"
              href={whatsappUrl}
              external
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Send An Enquiry
              </p>
            </div>

            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
              Tell Us
              <span className="block text-red-600">What You Need.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
              Whether you know exactly which vehicle you want or need help
              finding one, send us your requirements and we&apos;ll help you
              take the next step.
            </p>

            <div className="mt-9 space-y-5">
              <InfoRow
                icon={<CheckIcon />}
                title="Vehicle Sales"
                text="Enquire about brand new and foreign used vehicles."
              />

              <InfoRow
                icon={<CheckIcon />}
                title="Vehicle Sourcing"
                text="Tell us the make, model, year, and budget you have in mind."
              />

              <InfoRow
                icon={<CheckIcon />}
                title="Auction Services"
                text="Ask about auction sourcing, bidding, shipping, and clearing."
              />

              <InfoRow
                icon={<CheckIcon />}
                title="Installment Options"
                text="Contact us to discuss available installment arrangements."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Full Name" required>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Phone Number" required>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="0800 000 0000"
                    className="form-input"
                  />
                </FormField>
              </div>

              <FormField label="Email Address">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-input"
                />
              </FormField>

              <FormField label="What Are You Interested In?" required>
                <select
                  name="interest"
                  required
                  defaultValue=""
                  className="form-input"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Brand New Vehicle">
                    Brand New Vehicle
                  </option>

                  <option value="Foreign Used Vehicle">
                    Foreign Used Vehicle
                  </option>

                  <option value="Vehicle Sourcing">
                    Vehicle Sourcing
                  </option>

                  <option value="Auction & Brokerage">
                    Auction & Brokerage
                  </option>

                  <option value="Car Shipping">
                    Car Shipping
                  </option>

                  <option value="Installment Plan">
                    Installment Plan
                  </option>

                  <option value="Other Enquiry">
                    Other Enquiry
                  </option>
                </select>
              </FormField>

              <FormField label="Vehicle Details">
                <input
                  type="text"
                  name="vehicle"
                  placeholder="e.g. 2024 Lexus RX 350"
                  className="form-input"
                />
              </FormField>

              <FormField label="Your Message" required>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you are looking for..."
                  className="form-input resize-none"
                />
              </FormField>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
              >
                <WhatsAppIcon />
                Send Enquiry On WhatsApp
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Your enquiry will open in WhatsApp with your information
                already filled in. Review the message and tap Send.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Business Information
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                A-ZED 69
                <span className="block text-red-600">Autos.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                Auto brokerage and vehicle dealership services covering
                vehicle sales, sourcing, auction assistance, shipping, and
                related automotive solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                  Auto Broker
                </span>

                <span className="rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                  Car Dealer
                </span>

                <span className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                  Copart Member
                </span>

                <span className="rounded-full border border-gray-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-700">
                  IAAI Member
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-black">
              <div className="grid sm:grid-cols-2">
                <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Registration
                  </p>

                  <p className="mt-3 text-3xl font-black text-white">
                    RC 7370000
                  </p>
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>

                  <p className="mt-3 break-all text-lg font-bold text-white">
                    azed69autos@gmail.com
                  </p>
                </div>

                <div className="border-t border-white/10 p-7 sm:border-r">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:07052153993"
                    className="mt-3 block text-lg font-bold text-white hover:text-red-500"
                  >
                    07052153993
                  </a>
                </div>

                <div className="border-t border-white/10 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    WhatsApp
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-lg font-bold text-white hover:text-red-500"
                  >
                    08085942475
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Need A Specific Vehicle?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Tell Us What You&apos;re Looking For.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              From brand new vehicles to foreign used and auction-sourced
              vehicles, we can help you explore your options.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              View Vehicles
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: #111111;
          outline: none;
          transition:
            border-color 0.2s,
            box-shadow 0.2s;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .form-input:focus {
          border-color: #e10600;
          box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.1);
        }
      `}</style>
    </main>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-red-600">
        {icon}
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
        {label}
      </p>

      <p className="mt-2 break-all text-sm font-bold text-black group-hover:text-red-600">
        {value}
      </p>
    </a>
  );
}

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-black">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>

      {children}
    </label>
  );
}

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-tight text-black">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8.2 8.2 0 0 1-8.6 8.4 9.1 9.1 0 0 1-3.9-.9L4 20l1.1-3.2a8.3 8.3 0 1 1 14.9-5.3Z" />
      <path d="M8.5 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.7 1.3 1.7 2.3 3 3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.5.2-1.7.2-3.4-.6-1.7-.8-3.2-2.2-4.2-3.7-1-1.5-1.3-2.7-1-3.3Z" />
    </svg>
  );
}

function CheckIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
