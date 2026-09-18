import Link from "next/link";

const whatsappNumber = "2348085942475";
const whatsappMessage =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600 text-lg font-black text-white">
                AZ
              </span>

              <span className="text-sm font-black uppercase tracking-tight">
                A-ZED 69 AUTOS
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Drive into a new level of comfort. We provide brand new and
              foreign used vehicles, vehicle sourcing, auction brokerage,
              shipping, and flexible installment options.
            </p>

            <p className="mt-5 text-sm font-bold text-white">
              Bid. Ship. Clear.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/vehicles"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Vehicles
              </Link>

              <Link
                href="/faq"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                FAQs
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Brand New Vehicles
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Foreign Used Vehicles
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Auction & Brokerage
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Car Shipping
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:07052153993"
                className="block text-sm text-gray-400 transition-colors hover:text-white"
              >
                0705 215 3993
              </a>

              <a
                href="tel:08085942475"
                className="block text-sm text-gray-400 transition-colors hover:text-white"
              >
                0808 594 2475
              </a>

              <a
                href="mailto:azed69autos@gmail.com"
                className="block break-all text-sm text-gray-400 transition-colors hover:text-white"
              >
                azed69autos@gmail.com
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-red-500"
              >
                Chat on WhatsApp
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} A-ZED 69 Autos. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <span>RC 7370000</span>
              <span>Auto Broker & Dealer</span>
              <span>Copart & IAAI Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
