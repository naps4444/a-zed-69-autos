
import Link from "next/link";

const WHATSAPP_NUMBER = "2348085942475";

const WHATSAPP_MESSAGE =
  "Hello A-ZED 69 Autos, I would like to make an enquiry about your vehicles and services.";

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      <div
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Get In Touch
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Find Your{" "}
              <span className="text-red-600">Next Car?</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Whether you already know the vehicle you want or need help
              finding the right option, our team is ready to assist you.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                Contact Us
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
              A-ZED 69 AUTOS
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase text-white">
              Let&apos;s Talk Cars.
            </h3>

            <div className="mt-8 space-y-6">
              <ContactItem
                label="Phone"
                value="07052153993"
                href="tel:07052153993"
              />

              <ContactItem
                label="Phone"
                value="08085942475"
                href="tel:08085942475"
              />

              <ContactItem
                label="Email"
                value="azed69autos@gmail.com"
                href="mailto:azed69autos@gmail.com"
              />

              <ContactItem
                label="Social Media"
                value="@Azed69Autos_"
                href="https://www.instagram.com/Azed69Autos_/"
                external
              />
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Tagline
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                Drive into a new level of comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        {label}
      </p>

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="mt-1 inline-block text-sm font-semibold text-gray-200 transition-colors duration-300 hover:text-red-500"
      >
        {value}
      </a>
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