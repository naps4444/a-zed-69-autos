import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    number: "01",
    title: "Brand New Vehicles",
    description:
      "Get access to brand-new vehicles from trusted manufacturers and choose a vehicle that fits your lifestyle and budget.",
    href: "/vehicles",
  },
  {
    number: "02",
    title: "Foreign Used Vehicles",
    description:
      "Explore carefully sourced foreign-used vehicles with options available from international markets and auctions.",
    href: "/vehicles",
  },
  {
    number: "03",
    title: "Flexible Installment Plans",
    description:
      "Own your preferred vehicle with flexible payment options designed to make vehicle ownership more accessible.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Car Shipping",
    description:
      "From vehicle purchase to international shipping, we help coordinate the process and keep your vehicle journey moving.",
    href: "/contact",
  },
  {
    number: "05",
    title: "Auction & Brokerage",
    description:
      "Looking for a specific vehicle at auction? We assist with bidding, purchasing, shipping, and clearing.",
    href: "/contact",
  },
  {
    number: "06",
    title: "Vehicle Sourcing",
    description:
      "Tell us the vehicle you want and we can help source an option based on your preferred make, model, year, and budget.",
    href: "/contact",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                What We Do
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              More Than Just{" "}
              <span className="text-red-600">Cars.</span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              At A-ZED 69 AUTOS, we make the vehicle ownership journey simpler.
              From finding the right car to auction services, shipping, and
              delivery, we help you move from selection to the road with
              confidence.
            </p>
          </div>
        </div>

        {/* Service Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-2xl bg-black p-7 sm:p-9 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
              Need Help Finding a Vehicle?
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Tell Us What You&apos;re Looking For.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              Share your preferred vehicle, budget, and requirements with our
              team and let&apos;s discuss the available options.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
          >
            Make an Enquiry
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
