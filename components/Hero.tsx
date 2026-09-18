import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "2348085942475";

const WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="absolute right-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-red-600/15 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-[-12rem] left-[-12rem] h-[26rem] w-[26rem] rounded-full bg-blue-600/10 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                A-ZED 69 AUTOS
              </p>
            </div>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.5rem] xl:text-[5.2rem]">
              Drive Into a{" "}
              <span className="text-red-600">New Level</span> of Comfort.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Discover quality vehicles and reliable auto solutions built
              around your journey. From brand-new and foreign-used vehicles to
              auction sourcing, shipping, clearing, and flexible payment
              options, we help make the process simple from start to finish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
              >
                Explore Vehicles
                <ArrowRightIcon />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-x-5">
              <TrustPoint
                value="Brand New"
                label="Vehicles"
              />

              <TrustPoint
                value="Foreign Used"
                label="Vehicles"
              />

              <TrustPoint
                value="Copart & IAAI"
                label="Member"
              />

              <TrustPoint
                value="RC 7370000"
                label="Registered"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-8 hidden h-24 w-24 border-r border-t border-red-600/50 lg:block" />

            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l border-blue-600/50 lg:block" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero/hero-car.png"
                  alt="Premium vehicle available from A-ZED 69 Autos"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="h-2 w-2 rounded-full bg-red-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                    Premium Auto Solutions
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-300">
                        A-ZED 69 Autos
                      </p>

                      <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                        Drive With Confidence
                      </h2>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white sm:flex">
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 left-5 hidden rounded-xl border border-white/10 bg-zinc-950 px-5 py-4 shadow-xl sm:block lg:left-[-1.5rem]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Complete Auto Service
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                From Auction to Your Doorstep
              </p>
            </div>

            <div className="absolute -right-3 top-10 hidden rounded-xl border border-blue-500/20 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-md lg:block">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                Bid. Ship. Clear.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
    </section>
  );
}

function TrustPoint({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold leading-tight text-white">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
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

function ArrowUpRightIcon() {
  return (
    <svg
      width="19"
      height="19"
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

function WhatsAppIcon() {
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
        d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.89c0 2.09.55 4.13 1.59 5.93L.12 24l6.33-1.66a11.84 11.84 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.47-8.41ZM12.11 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}
