import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Vehicle Expertise",
    description:
      "We help you understand your options and make informed decisions when searching for your next vehicle.",
  },
  {
    number: "02",
    title: "Auction Access",
    description:
      "Our Copart and IAAI membership gives us access to international vehicle auction platforms.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "From sourcing and purchasing to shipping and clearing, we help coordinate the major stages of your vehicle journey.",
  },
  {
    number: "04",
    title: "Flexible Options",
    description:
      "We offer flexible installment options and sourcing solutions designed around different customer needs.",
  },
  {
    number: "05",
    title: "Clear Communication",
    description:
      "We keep you informed throughout the process so you know what is happening with your vehicle.",
  },
  {
    number: "06",
    title: "Customer Focused",
    description:
      "Our goal is to provide a straightforward vehicle-buying experience built around your requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-600/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Why A-ZED 69
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Built Around{" "}
              <span className="text-red-600">Your Journey.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Buying or importing a vehicle involves several steps. We help
              make those steps easier to understand and manage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                Auto Broker
              </span>

              <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white">
                Copart Member
              </span>

              <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                IAAI Member
              </span>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
            >
              Talk to Our Team
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black tracking-wider text-red-600">
                    {reason.number}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h3 className="mt-10 text-lg font-black uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-red-600">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {reason.description}
                </p>

                <div className="mt-6 h-1 w-8 bg-red-600 transition-all duration-300 group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
