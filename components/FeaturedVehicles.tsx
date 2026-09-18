import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

export default function FeaturedVehicles() {
  const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured);

  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Featured Vehicles
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Find Your Next{" "}
              <span className="text-red-600">Drive.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Explore some of the vehicles available through A-ZED 69 AUTOS.
              Find a vehicle that fits your style, needs, and budget.
            </p>
          </div>

          <Link
            href="/vehicles"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-black px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            View All Vehicles
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Vehicle Grid */}
        {featuredVehicles.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.slice(0, 6).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <CarIcon />
            </div>

            <h3 className="mt-5 text-xl font-black uppercase text-black">
              Vehicles Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Our featured vehicle inventory is being updated. Contact us to
              ask about currently available vehicles.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-700"
            >
              Contact A-ZED 69
              <ArrowRightIcon />
            </Link>
          </div>
        )}

        {/* Bottom Information */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoItem
            title="Brand New"
            description="Explore new vehicles from trusted manufacturers."
          />

          <InfoItem
            title="Foreign Used"
            description="Browse quality foreign-used vehicle options."
          />

          <InfoItem
            title="Need Something Specific?"
            description="Tell us what you are looking for and we can help source it."
          />
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-3 h-1 w-8 bg-red-600" />

      <h3 className="text-sm font-black uppercase tracking-tight text-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
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

function CarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 17H4C3.45 17 3 16.55 3 16V13.5C3 12.95 3.45 12.5 4 12.5H5.5L7.2 7.4C7.43 6.56 8.2 6 9.07 6H14.93C15.8 6 16.57 6.56 16.8 7.4L18.5 12.5H20C20.55 12.5 21 12.95 21 13.5V16C21 16.55 20.55 17 20 17H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 12.5H19M7 17V18.5M17 17V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="7"
        cy="15.5"
        r="1.5"
        fill="currentColor"
      />

      <circle
        cx="17"
        cy="15.5"
        r="1.5"
        fill="currentColor"
      />
    </svg>
  );
}
