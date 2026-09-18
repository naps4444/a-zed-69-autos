import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Bid",
    description:
      "Tell us the vehicle you want or choose from available auction listings. As a Copart and IAAI member, we can assist with the auction process.",
  },
  {
    number: "02",
    title: "Ship",
    description:
      "Once your vehicle is purchased, we help coordinate the shipping process and keep you informed as it moves toward its destination.",
  },
  {
    number: "03",
    title: "Clear",
    description:
      "We help coordinate the next stage of the journey, including clearing and delivery arrangements, so you can move closer to receiving your vehicle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div
        className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              How It Works
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            From <span className="text-red-600">Auction</span> to Your
            Doorstep.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            We simplify the vehicle import process by helping you navigate the
            major stages from finding and purchasing your vehicle to shipping
            and clearing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting Line */}
          <div
            className="absolute left-[11%] right-[11%] top-10 hidden h-px bg-gradient-to-r from-red-600 via-blue-600 to-red-600 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:p-8"
              >
                {/* Step Number */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black text-2xl font-black text-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                      {step.title}
                    </h3>

                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-12 bg-red-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-400">
              Have a vehicle in mind?
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              Let&apos;s help you start the process.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
          >
            Start Your Enquiry
            <ArrowRightIcon />
          </Link>
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
