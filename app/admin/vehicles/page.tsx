"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Condition = "Brand New" | "Foreign Used";

interface Vehicle {
  id: string;
  name: string;
  year: number;
  condition: Condition;
  price: string;
  location: string;
  image: string;
  images: string[];
  featured: boolean;
  transmission: string;
  fuelType: string;
}

export default function AdminVehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | Condition>("All");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");
  const [vehicleToDelete, setVehicleToDelete] =
    useState<Vehicle | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadVehicles() {
      try {
        const response = await fetch("/api/admin/vehicles/current", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Could not load vehicle inventory."
          );
        }

        setVehicles(data.vehicles || []);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Could not load vehicle inventory."
        );
      } finally {
        setLoading(false);
      }
    }

    loadVehicles();
  }, []);

  const filteredVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return vehicles.filter((vehicle) => {
      const matchesSearch =
        !query ||
        vehicle.name.toLowerCase().includes(query) ||
        vehicle.location.toLowerCase().includes(query) ||
        String(vehicle.year).includes(query);

      const matchesFilter =
        filter === "All" || vehicle.condition === filter;

      return matchesSearch && matchesFilter;
    });
  }, [vehicles, search, filter]);

  function openDeleteModal(vehicle: Vehicle) {
    setError("");
    setVehicleToDelete(vehicle);
  }

  function closeDeleteModal() {
    if (deletingId) return;
    setVehicleToDelete(null);
  }

  async function handleDelete() {
    if (!vehicleToDelete) return;

    const vehicle = vehicleToDelete;

    setDeletingId(vehicle.id);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/vehicles/${vehicle.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Could not delete vehicle."
        );
      }

      setVehicles((current) =>
        current.filter((item) => item.id !== vehicle.id)
      );

      setVehicleToDelete(null);
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Could not delete vehicle."
      );
    } finally {
      setDeletingId("");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-100">
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div>
            <Link
              href="/admin"
              className="text-xl font-black uppercase tracking-tight text-white"
            >
              A-ZED <span className="text-red-600">69</span>
            </Link>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Vehicle Management
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-white/30 hover:text-white sm:block"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/vehicles/new"
              className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
            >
              Add Vehicle
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Inventory
          </p>

          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
            Vehicles
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Live inventory loaded directly from GitHub.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto]">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search vehicles..."
            className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-600/10"
          />

          <div className="flex rounded-xl border border-zinc-200 bg-white p-1">
            {(["All", "Brand New", "Foreign Used"] as const).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                    filter === option
                      ? "bg-black text-white"
                      : "text-zinc-500 hover:text-black"
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {loading && (
          <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              Loading latest inventory...
            </p>
          </div>
        )}

        {!loading && filteredVehicles.length === 0 && (
          <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-16 text-center">
            <p className="text-sm font-bold text-zinc-600">
              No vehicles found.
            </p>
          </div>
        )}

        {!loading && filteredVehicles.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredVehicles.map((vehicle) => {
              const isDeleting = deletingId === vehicle.id;

              return (
                <article
                  key={vehicle.id}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    {vehicle.image && (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    )}

                    {vehicle.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                          {vehicle.condition}
                        </p>

                        <h2 className="mt-1 text-lg font-black text-black">
                          {vehicle.name}
                        </h2>

                        <p className="mt-1 text-xs text-zinc-500">
                          {vehicle.year} • {vehicle.location}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-black text-black">
                        {vehicle.price}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-bold text-zinc-600">
                        {vehicle.transmission}
                      </span>

                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-bold text-zinc-600">
                        {vehicle.fuelType}
                      </span>

                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-bold text-zinc-600">
                        {vehicle.images.length} photos
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <Link
                        href={`/admin/vehicles/${vehicle.id}/edit`}
                        className="flex h-11 items-center justify-center rounded-xl bg-black text-xs font-bold uppercase tracking-wider text-white transition hover:bg-zinc-800"
                      >
                        Edit Vehicle
                      </Link>

                      <button
                        type="button"
                        onClick={() => openDeleteModal(vehicle)}
                        disabled={isDeleting}
                        className="flex h-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-xs font-bold uppercase tracking-wider text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isDeleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {vehicleToDelete && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDeleteModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-vehicle-title"
            className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
          >
            <div className="border-b border-zinc-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 9V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-red-600"
                    />
                    <path
                      d="M12 17H12.01"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="text-red-600"
                    />
                    <path
                      d="M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      className="text-red-600"
                    />
                  </svg>
                </div>

                <div>
                  <h2
                    id="delete-vehicle-title"
                    className="text-lg font-black text-black"
                  >
                    Delete Vehicle
                  </h2>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-6">
              <p className="text-sm leading-6 text-zinc-600">
                Are you sure you want to permanently remove this vehicle
                from your inventory?
              </p>

              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                  Vehicle
                </p>

                <p className="mt-1 text-base font-black text-black">
                  {vehicleToDelete.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {vehicleToDelete.year} • {vehicleToDelete.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-zinc-100 bg-zinc-50 px-6 py-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDeleteModal}
                disabled={!!deletingId}
                className="h-11 rounded-xl border border-zinc-200 bg-white px-5 text-xs font-bold uppercase tracking-wider text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={!!deletingId}
                className="h-11 rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deletingId ? "Deleting..." : "Delete Vehicle"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}