import Link from "next/link";
import { faqs } from "@/data/faqs";
import Navbar from "@/components/Navbar";

const WHATSAPP_NUMBER = "2348085942475";

const WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I have a question about your vehicles and services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const categories = [
  {
    title: "Vehicles",
    description: "Questions about our available vehicles and conditions.",
    questions: faqs.slice(0, 3),
  },
  {
    title: "Auction & Brokerage",
    description: "How our auction sourcing and brokerage service works.",
    questions: faqs.slice(3, 5),
  },
  {
    title: "Shipping & Sourcing",
    description: "Information about sourcing and moving vehicles.",
    questions: faqs.slice(5, 7),
  },
  {
    title: "Payment & Contact",
    description: "Payment options, registration, and getting in touch.",
    questions: faqs.slice(7, 10),
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white">
        <Navbar/>
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Frequently Asked Questions
            </p>
            <span className="h-px w-10 bg-red-600" />
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Questions?
            <span className="block text-red-600">We&apos;ve Got Answers.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Find answers to common questions about our vehicles, auction
            services, shipping, sourcing, installment options, and how to get
            in touch with A-ZED 69 Autos.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-5 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-gray-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-600 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div
                key={category.title}
                id={category.title.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-28"
              >
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-red-600" />
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                      {category.title}
                    </p>
                  </div>

                  <h2 className="text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">
                    {category.description}
                  </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  {category.questions.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border-b border-gray-200 last:border-b-0"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 bg-white px-5 py-5 transition-colors duration-300 hover:bg-gray-50 sm:px-7 sm:py-6">
                        <span className="text-sm font-bold leading-6 text-black sm:text-base">
                          {faq.question}
                        </span>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-open:rotate-45 group-open:border-red-600 group-open:bg-red-600 group-open:text-white">
                          <PlusIcon />
                        </span>
                      </summary>

                      <div className="bg-gray-50 px-5 pb-6 pt-1 sm:px-7">
                        <p className="max-w-3xl text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                <CarIcon />
              </div>

              <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-black">
                Looking For A Car?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Browse our available vehicles or tell us what type of vehicle
                you are looking for.
              </p>

              <Link
                href="/vehicles"
                className="mt-6 inline-flex text-sm font-bold text-red-600 transition-colors hover:text-black"
              >
                Browse Vehicles →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white">
                <AuctionIcon />
              </div>

              <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-black">
                Want An Auction Car?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Ask about our auction and brokerage services and the Bid.
                Ship. Clear. process.
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex text-sm font-bold text-red-600 transition-colors hover:text-black"
              >
                View Services →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">
                <ChatIcon />
              </div>

              <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-black">
                Still Have Questions?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Speak directly with A-ZED 69 Autos and get answers about your
                vehicle enquiry.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-bold text-red-600 transition-colors hover:text-black"
              >
                Chat On WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Need Personal Assistance?
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Let&apos;s Talk About Your Next Vehicle.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Whether you have a specific car in mind or need help finding one,
            our team is available to assist you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlusIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function CarIcon() {
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
      <path d="m5 11 1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <path d="M3 11h18v6H3z" />
      <path d="M6 17v2" />
      <path d="M18 17v2" />
      <circle cx="6.5" cy="14.5" r="1" />
      <circle cx="17.5" cy="14.5" r="1" />
    </svg>
  );
}

function AuctionIcon() {
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
      <path d="m14 6 4 4" />
      <path d="M5 19 16 8" />
      <path d="m3 21 3-3" />
      <path d="m13 7 4-4 4 4-4 4z" />
      <path d="M8 19h10" />
    </svg>
  );
}

function ChatIcon() {
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
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.9-4.7A8.2 8.2 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
    </svg>
  );
}