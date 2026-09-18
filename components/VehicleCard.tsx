import Image from "next/image";
import Link from "next/link";

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  condition: "Brand New" | "Foreign Used";
  price: string;
  location: string;
  image: string;
  featured: boolean;
  transmission?: string;
  fuelType?: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white">
            {vehicle.condition}
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="text-sm font-bold text-white">
            {vehicle.year}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRightIcon />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-red-600">
              {vehicle.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {vehicle.location}
            </p>
          </div>

          <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-blue-600">
            {vehicle.year}
          </span>
        </div>

        {(vehicle.transmission || vehicle.fuelType) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {vehicle.transmission && (
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                {vehicle.transmission}
              </span>
            )}

            {vehicle.fuelType && (
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                {vehicle.fuelType}
              </span>
            )}
          </div>
        )}

        <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Starting From
            </p>

            <p className="mt-1 text-xl font-black text-black">
              {vehicle.price}
            </p>
          </div>

          <span className="text-xs font-bold text-red-600">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArrowUpRightIcon() {
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
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

