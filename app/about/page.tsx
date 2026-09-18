import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "2348085942475";

const WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function AboutPage() {
  return (
    <main className="bg-white">
        <Navbar/>
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                About A-ZED 69 Autos
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              More Than Just
              <span className="block text-red-600">A Car Dealer.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              We help customers find, purchase, ship, and take ownership of
              vehicles with a straightforward process built around trust,
              convenience, and professional support.
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
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/about.png"
                  alt="A-ZED 69 Autos vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-black/50 p-5 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                      A-ZED 69 AUTOS
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-white">
                      Drive Into A New Level Of Comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Who We Are
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                Your Journey To The
                <span className="block text-red-600">Right Car Starts Here.</span>
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
                <p>
                  A-ZED 69 Autos is an auto brokerage and vehicle dealership
                  focused on helping customers access quality vehicles and
                  dependable automotive services.
                </p>

                <p>
                  Whether you are looking for a brand new vehicle, a foreign
                  used car, or a specific vehicle that needs to be sourced
                  through an auction, our goal is to make the process clear and
                  convenient from the beginning.
                </p>

                <p>
                  Through our auction and brokerage services, we can assist
                  customers with the journey from vehicle selection and bidding
                  to shipping and clearing.
                </p>

                <p className="font-semibold text-black">
                  From auction to your doorstep, we handle the entire journey
                  with ease.
                </p>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <p className="text-2xl font-black text-black">RC</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    7370000
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5">
                  <p className="text-2xl font-black text-red-600">COPART</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Member
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5">
                  <p className="text-2xl font-black text-blue-600">IAAI</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                What We Do
              </p>
            </div>

            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
              Automotive Solutions
              <span className="block text-red-600">Built Around You.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              From purchasing a vehicle to sourcing one through an auction,
              our services are designed to simplify the process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Brand New Vehicles",
                text: "Explore brand new vehicles from different makes and models based on your needs and budget.",
              },
              {
                number: "02",
                title: "Foreign Used Vehicles",
                text: "Access foreign used vehicles sourced through trusted vehicle and auction channels.",
              },
              {
                number: "03",
                title: "Vehicle Sourcing",
                text: "Tell us the specific vehicle you want and we can help search for suitable options.",
              },
              {
                number: "04",
                title: "Auction & Brokerage",
                text: "Get assistance with auction vehicle selection, bidding, purchase, and the next steps.",
              },
              {
                number: "05",
                title: "Car Shipping",
                text: "We help coordinate vehicle shipping from the source location through the delivery process.",
              },
              {
                number: "06",
                title: "Flexible Installment Plans",
                text: "Eligible customers can enquire about available installment payment arrangements.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
              >
                <span className="text-sm font-black tracking-wider text-red-600">
                  {service.number}
                </span>

                <h3 className="mt-12 text-xl font-black uppercase tracking-tight text-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                  Our Auction Service
                </p>
              </div>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                Bid.
                <span className="text-red-600"> Ship.</span>
                <span className="text-blue-500"> Clear.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-gray-400">
                Buying a vehicle through an auction can involve several steps.
                Our brokerage service helps make the journey easier by
                supporting you through the key stages.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Bid",
                  text: "Find a suitable vehicle and get assistance with the auction bidding process.",
                },
                {
                  number: "02",
                  title: "Ship",
                  text: "After purchase, we help coordinate the vehicle shipping process.",
                },
                {
                  number: "03",
                  title: "Clear",
                  text: "We assist with the clearing stage as the vehicle makes its way to you.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="text-xs font-black text-red-500">
                    {step.number}
                  </span>

                  <h3 className="mt-10 text-2xl font-black uppercase text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Why A-ZED 69
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                A Better Way To
                <span className="block text-red-600">Buy Your Next Car.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We focus on making vehicle sourcing and purchasing easier by
              giving customers access to professional support throughout the
              process.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Professional Support",
                text: "Get guidance throughout the vehicle sourcing and purchasing process.",
              },
              {
                title: "Auction Access",
                text: "We provide access to auction sourcing and brokerage services.",
              },
              {
                title: "End-to-End Service",
                text: "From bidding and shipping to clearing, we help coordinate the journey.",
              },
              {
                title: "Flexible Options",
                text: "Enquire about vehicle options and available installment arrangements.",
              },
              {
                title: "Clear Communication",
                text: "We keep customers informed about the process and relevant vehicle details.",
              },
              {
                title: "Customer Focused",
                text: "Our goal is to help you find a vehicle that suits your needs and budget.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-7 sm:p-8">
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
      </section>

      <section className="bg-red-600 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Ready To Get Started?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s Find The Right Vehicle For You.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Browse our available vehicles or contact A-ZED 69 Autos about
              sourcing the car you have in mind.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Vehicles
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
