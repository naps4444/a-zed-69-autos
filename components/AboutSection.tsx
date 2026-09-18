import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src="https://res.cloudinary.com/de24nkiyk/image/upload/v1789770417/Untitled_design_7.png"
                alt="A-ZED 69 Autos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  A-ZED 69 AUTOS
                </p>

                <p className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                  Drive With Confidence
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-black p-5 shadow-xl sm:-right-6 sm:p-6">
              <p className="text-3xl font-black text-white">69</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Autos
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                About A-ZED 69
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
              Your Journey to the{" "}
              <span className="text-red-600">Right Car</span> Starts Here.
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600">
              A-ZED 69 AUTOS is an auto brokerage and vehicle dealership
              focused on helping customers find, purchase, ship, and receive
              vehicles with greater convenience.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Whether you are looking for a brand-new vehicle, a foreign-used
              car, or a specific vehicle from an international auction, our
              goal is to make the process easier from selection to delivery.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="h-1 w-8 bg-red-600" />

                <h3 className="mt-4 text-sm font-black uppercase text-black">
                  Registered Business
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  RC 7370000
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <div className="h-1 w-8 bg-blue-600" />

                <h3 className="mt-4 text-sm font-black uppercase text-black">
                  Auction Access
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Copart & IAAI Member
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
            >
              Learn More About Us
              <ArrowRightIcon />
            </Link>
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
