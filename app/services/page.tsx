import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "2348085942475";

const WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const services = [
  {
    number: "01",
    title: "Brand New Vehicles",
    description:
      "Looking for a brand new vehicle? We help customers explore available models and find options that match their needs, preferences, and budget.",
    features: [
      "Latest vehicle models",
      "Multiple makes and models",
      "Vehicle sourcing support",
      "Purchase assistance",
    ],
  },
  {
    number: "02",
    title: "Foreign Used Vehicles",
    description:
      "We help customers source foreign used vehicles through established vehicle and auction channels, giving you access to a wider range of options.",
    features: [
      "Foreign used vehicles",
      "Auction-sourced options",
      "Vehicle selection support",
      "Purchase guidance",
    ],
  },
  {
    number: "03",
    title: "Flexible Installment Plans",
    description:
      "For eligible customers, we provide flexible installment payment options that can make vehicle ownership more manageable.",
    features: [
      "Flexible payment options",
      "Eligibility-based plans",
      "Payment structure guidance",
      "Vehicle-specific enquiries",
    ],
  },
  {
    number: "04",
    title: "Car Shipping",
    description:
      "We help coordinate the movement of vehicles from their source location through the shipping process, helping simplify international vehicle delivery.",
    features: [
      "Vehicle shipping coordination",
      "International vehicle movement",
      "Shipping process support",
      "Delivery coordination",
    ],
  },
  {
    number: "05",
    title: "Auction & Brokerage",
    description:
      "Want to purchase a vehicle through an auction? Our brokerage service helps you navigate the process from selecting a vehicle to bidding and beyond.",
    features: [
      "Auction vehicle sourcing",
      "Bid assistance",
      "Purchase coordination",
      "End-to-end support",
    ],
  },
  {
    number: "06",
    title: "Vehicle Sourcing",
    description:
      "Tell us exactly what you are looking for and we can help search for a suitable vehicle based on your preferred make, model, year, specification, and budget.",
    features: [
      "Specific vehicle requests",
      "Make and model sourcing",
      "Budget-based options",
      "Personalized assistance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
        <Navbar/>
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-hero.jpg"
            alt="Premium vehicle at A-ZED 69 Autos"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Our Services
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Automotive
              <span className="block text-red-600">Solutions.</span>
              <span className="block">Made Simple.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              From finding your next vehicle to auction sourcing, shipping,
              clearing, and delivery, A-ZED 69 Autos provides support across
              the vehicle ownership journey.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicles"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700"
              >
                Explore Vehicles
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Make An Enquiry
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="border-b border-gray-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ["01", "Vehicle Sales"],
            ["02", "Vehicle Sourcing"],
            ["03", "Auction Access"],
            ["04", "Shipping Support"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-4">
              <span className="text-sm font-black text-red-600">{number}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-black sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                What We Offer
              </p>
            </div>

            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
              Everything You Need
              <span className="block text-red-600">
                For Your Next Vehicle.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Whether you already know the vehicle you want or need help
              finding one, our services are designed to make the process
              easier.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm font-black tracking-wider text-red-600">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
                    <ArrowUpRightIcon />
                  </div>
                </div>

                <h3 className="mt-12 text-2xl font-black uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-red-600 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs font-semibold text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                  Auction & Brokerage
                </p>
              </div>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                Bid.
                <span className="text-red-600"> Ship.</span>
                <span className="text-blue-500"> Clear.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-gray-400">
                Our auction service helps customers navigate the major stages
                involved in sourcing a vehicle through an auction.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                Enquire About Auction Services
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Bid",
                  description:
                    "Identify a suitable vehicle and get assistance through the auction bidding process.",
                },
                {
                  number: "02",
                  title: "Ship",
                  description:
                    "After purchase, we help coordinate the vehicle shipping process.",
                },
                {
                  number: "03",
                  title: "Clear",
                  description:
                    "We provide support through the clearing stage as the vehicle arrives.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
                >
                  <span className="text-xs font-black text-red-500">
                    {step.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-black uppercase text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Why Choose Us
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                Support From
                <span className="block text-red-600">Start To Finish.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                Buying a vehicle can involve many decisions. We help simplify
                the process by providing support around vehicle sourcing,
                purchasing, auction services, shipping, and related steps.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center rounded-full border border-black px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Auto Expertise",
                  text: "Professional support throughout your vehicle journey.",
                },
                {
                  title: "Auction Access",
                  text: "Access to auction sourcing and brokerage services.",
                },
                {
                  title: "End-to-End Support",
                  text: "Assistance across bidding, shipping, and clearing.",
                },
                {
                  title: "Clear Communication",
                  text: "Straightforward information throughout the process.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                    <CheckIcon />
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-black px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Get Started
              </p>
              <span className="h-px w-10 bg-red-600" />
            </div>

            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Looking For A
              <span className="block text-red-600">Specific Vehicle?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Tell us what you are looking for and let&apos;s help you find a
              vehicle that matches your requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700"
              >
                Contact Us
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
        </div>
      </section>
    </main>
  );
}

function ArrowUpRightIcon() {
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
      className="text-black transition-colors duration-300 group-hover:text-white"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
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
