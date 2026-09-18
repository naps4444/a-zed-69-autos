import Link from "next/link";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const featuredFaqs = faqs.slice(0, 5);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Frequently Asked Questions
            </p>

            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
            Questions?{" "}
            <span className="text-red-600">We&apos;ve Got Answers.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Find answers to some of the common questions customers ask about
            our vehicles, auction services, shipping, and payment options.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
          {featuredFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-gray-200 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 bg-white px-6 py-5 transition-colors duration-300 hover:bg-gray-50 sm:px-7"
              >
                <span className="text-sm font-bold text-black sm:text-base">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-open:rotate-45 group-open:border-red-600 group-open:bg-red-600 group-open:text-white">
                  <PlusIcon />
                </span>
              </summary>

              <div className="bg-gray-50 px-6 pb-6 pt-1 sm:px-7">
                <p className="max-w-3xl text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            View All FAQs
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}