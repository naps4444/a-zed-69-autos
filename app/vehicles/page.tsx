"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

type Filter = "All" | "Brand New" | "Foreign Used";

export default function VehiclesPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const whatsappUrl = "https://wa.me/?text=Hello%20A-ZED%2069%20Autos";

  const filteredVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return vehicles.filter((vehicle) => {
      const matchesFilter =
        filter === "All" || vehicle.condition === filter;

      const matchesSearch =
        !query ||
        vehicle.name.toLowerCase().includes(query) ||
        vehicle.year.toString().includes(query) ||
        vehicle.condition.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                A-ZED 69 Autos
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block text-red-600">Next Vehicle.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Explore our selection of brand new and foreign used vehicles.
              Looking for something specific? We can also help you source the
              right vehicle based on your needs and budget.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#inventory"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700"
              >
                Browse Vehicles
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Request A Vehicle
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-600 to-blue-600" />
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
          <Stat
            value={vehicles.length.toString().padStart(2, "0")}
            label="Vehicles Listed"
          />

          <Stat
            value={vehicles.filter((v) => v.condition === "Brand New").length
              .toString()
              .padStart(2, "0")}
            label="Brand New"
          />

          <Stat
            value={vehicles.filter((v) => v.condition === "Foreign Used").length
              .toString()
              .padStart(2, "0")}
            label="Foreign Used"
          />

          <Stat value="24/7" label="Enquiry Support" />
        </div>
      </section>

      <section id="inventory" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Vehicle Inventory
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                Explore Our
                <span className="block text-red-600">Available Vehicles.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Browse the vehicles currently featured by A-ZED 69 Autos.
                Availability, specifications, and pricing may change, so
                contact us to confirm the latest details.
              </p>
            </div>

            <div className="text-sm font-semibold text-gray-500">
              Showing{" "}
              <span className="font-black text-black">
                {filteredVehicles.length}
              </span>{" "}
              {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <SearchIcon />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by make, model or year..."
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-black outline-none transition-all placeholder:text-gray-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {(["All", "Brand New", "Foreign Used"] as Filter[]).map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFilter(option)}
                      className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        filter === option
                          ? "bg-black text-white"
                          : "border border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black"
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <SearchIcon size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-black">
                No Vehicles Found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                We couldn&apos;t find a vehicle matching your search. Try
                another make, model, year, or filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="mt-6 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-600"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Can&apos;t Find It?
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-5xl">
                We Can Help You
                <span className="block text-red-600">Source It.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                If the vehicle you want isn&apos;t currently listed, tell us
                what you are looking for. We can help you explore sourcing
                options based on your preferred make, model, year,
                specification, and budget.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
              >
                Request A Vehicle
                <ArrowRightIcon />
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl bg-black">
              <div className="grid sm:grid-cols-3">
                <ProcessCard
                  number="01"
                  title="Tell Us"
                  text="Share the vehicle, specification, and budget you have in mind."
                />

                <ProcessCard
                  number="02"
                  title="We Search"
                  text="We explore suitable sourcing and auction options."
                />

                <ProcessCard
                  number="03"
                  title="You Choose"
                  text="Review suitable options and decide how you want to proceed."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              number="01"
              title="Brand New Vehicles"
              text="Explore brand new vehicles across different makes, models, and specifications."
            />

            <InfoCard
              number="02"
              title="Foreign Used Vehicles"
              text="Ask us about foreign used vehicles sourced through established channels."
            />

            <InfoCard
              number="03"
              title="Auction & Sourcing"
              text="We can assist with vehicle sourcing, auction bidding, shipping, and clearing."
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Need Help Finding A Car?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s Find The Right Vehicle For You.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Tell A-ZED 69 Autos what you&apos;re looking for and our team can
              help you explore your options.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Make An Enquiry
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
      </section>
    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="px-5 py-7 sm:px-8 sm:py-9">
      <p className="text-2xl font-black tracking-tight text-black sm:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/10 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <span className="text-xs font-black tracking-widest text-red-500">
        {number}
      </span>

      <h3 className="mt-10 text-xl font-black uppercase tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">{text}</p>
    </div>
  );
}

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg">
      <span className="text-xs font-black tracking-widest text-red-600">
        {number}
      </span>

      <h3 className="mt-8 text-xl font-black uppercase tracking-tight text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function SearchIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
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
