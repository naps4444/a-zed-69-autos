import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicles } from "@/data/vehicles";

const WHATSAPP_NUMBER = "2348085942475";

interface VehicleDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export function generateMetadata({
  params,
}: VehicleDetailsPageProps) {
  return params.then(({ id }) => {
    const vehicle = vehicles.find((item) => item.id === id);

    if (!vehicle) {
      return {
        title: "Vehicle Not Found | A-ZED 69 Autos",
      };
    }

    return {
      title: `${vehicle.year} ${vehicle.name} | A-ZED 69 Autos`,
      description: `Enquire about the ${vehicle.year} ${vehicle.name} from A-ZED 69 Autos.`,
    };
  });
}

export default async function VehicleDetailsPage({
  params,
}: VehicleDetailsPageProps) {
  const { id } = await params;

  const vehicle = vehicles.find((item) => item.id === id);

  if (!vehicle) {
    notFound();
  }

  const whatsappMessage = [
    "Hello A-ZED 69 Autos,",
    "",
    `I am interested in the ${vehicle.year} ${vehicle.name}.`,
    "",
    "*VEHICLE DETAILS*",
    `Vehicle: ${vehicle.name}`,
    `Year: ${vehicle.year}`,
    `Condition: ${vehicle.condition}`,
    `Location: ${vehicle.location}`,
    `Transmission: ${vehicle.transmission || "Not specified"}`,
    `Fuel Type: ${vehicle.fuelType || "Not specified"}`,
    "",
    "Please provide the current price, availability, and more details about this vehicle.",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const relatedVehicles = vehicles
    .filter((item) => item.id !== vehicle.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-black">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors hover:text-white"
            >
              <ArrowLeftIcon />
              Back To Vehicles
            </Link>

            <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-gray-500 sm:block">
              A-ZED 69 Autos
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
              <div className="relative aspect-[4/3]">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.name}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    {vehicle.condition}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <span className="text-sm font-bold text-white">
                    {vehicle.year}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                  Vehicle Details
                </p>
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {vehicle.name}
              </h1>

              <p className="mt-4 text-xl font-bold text-red-500">
                {vehicle.year}
              </p>

              <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
                This {vehicle.year} {vehicle.name} is listed by A-ZED 69 Autos.
                Contact us to confirm current availability, pricing, vehicle
                specifications, and purchase options.
              </p>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Price
                </p>

                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {vehicle.price}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700"
                >
                  <WhatsAppIcon />
                  Enquire On WhatsApp
                </a>

                <a
                  href="tel:08085942475"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Specifications
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
                Vehicle <span className="text-red-600">Overview.</span>
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Specification
                  label="Make / Model"
                  value={vehicle.name}
                />

                <Specification
                  label="Year"
                  value={vehicle.year.toString()}
                />

                <Specification
                  label="Condition"
                  value={vehicle.condition}
                />

                <Specification
                  label="Location"
                  value={vehicle.location}
                />

                <Specification
                  label="Transmission"
                  value={vehicle.transmission || "Contact Us"}
                />

                <Specification
                  label="Fuel Type"
                  value={vehicle.fuelType || "Contact Us"}
                />
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Interested In This Vehicle?
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-black">
                Get The Latest
                <span className="block text-red-600">Information.</span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Vehicle availability and pricing can change. Contact A-ZED 69
                Autos for the latest information and a complete quotation.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
              >
                <WhatsAppIcon />
                Ask About This Vehicle
              </a>

              <a
                href="tel:07052153993"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:border-black"
              >
                Call 07052153993
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  More Vehicles
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
                You May Also
                <span className="text-red-600"> Like.</span>
              </h2>
            </div>

            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-red-600"
            >
              View All Vehicles
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedVehicles.map((relatedVehicle) => (
              <VehicleCardPreview
                key={relatedVehicle.id}
                vehicle={relatedVehicle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            A-ZED 69 Autos
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Looking For A Different Vehicle?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            If this isn&apos;t the vehicle you are looking for, tell us what
            you need. We can help you explore available sourcing and auction
            options.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Request A Vehicle
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Specification({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-black text-black">{value}</p>
    </div>
  );
}

function VehicleCardPreview({
  vehicle,
}: {
  vehicle: (typeof vehicles)[number];
}) {
  return (
    <Link
      href={`/vehicles/${vehicle.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white">
            {vehicle.condition}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black transition-colors group-hover:text-red-600">
              {vehicle.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {vehicle.year} · {vehicle.location}
            </p>
          </div>

          <ArrowUpRightIcon />
        </div>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Starting From
          </p>

          <p className="mt-1 text-lg font-black text-black">
            {vehicle.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
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
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8.2 8.2 0 0 1-8.6 8.4 9.1 9.1 0 0 1-3.9-.9L4 20l1.1-3.2a8.3 8.3 0 1 1 14.9-5.3Z" />
      <path d="M8.5 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.7.1.9.3 1.2.5l.7.4c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.5.2-1.7.2-3.4-.6-1.7-.8-3.2-2.2-4.2-3.7-1-1.5-1.3-2.7-1-3.3Z" />
    </svg>
  );
}
