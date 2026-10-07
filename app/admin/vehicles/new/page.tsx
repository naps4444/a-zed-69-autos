"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import VehicleImageUploader, {
  UploadedVehicleImage,
} from "@/components/admin/VehicleImageUploader";

type Condition = "Brand New" | "Foreign Used";

interface VehicleForm {
  name: string;
  year: string;
  condition: Condition;
  price: string;
  location: string;
  transmission: string;
  fuelType: string;
  featured: boolean;
  sold: boolean;
  images: UploadedVehicleImage[];
}

function formatPrice(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "₦";
  }

  return `₦${Number(digits).toLocaleString("en-NG")}`;
}

function normalizeLocation(value: string) {
  const trimmed = value.trim();

  if (trimmed.toLowerCase() === "lagos") {
    return "Lagos, Nigeria";
  }

  return trimmed;
}

export default function NewVehiclePage() {
  const [form, setForm] = useState<VehicleForm>({
    name: "",
    year: "",
    condition: "Foreign Used",
    price: "₦",
    location: "Lagos, Nigeria",
    transmission: "Automatic",
    fuelType: "Petrol",
    featured: false,
    sold: false,
    images: [],
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [publishing, setPublishing] = useState(false);

  function updateField<K extends keyof VehicleForm>(
    field: K,
    value: VehicleForm[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handlePriceChange(value: string) {
    updateField("price", formatPrice(value));
  }

  function handleLocationChange(value: string) {
    updateField("location", value);
  }

  function handleLocationBlur() {
    updateField("location", normalizeLocation(form.location));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!form.name.trim()) {
      setError("Please enter the vehicle name.");
      return;
    }

    if (form.images.length === 0) {
      setError("Please upload at least one vehicle image.");
      return;
    }

    const year = Number(form.year);

    if (!year || year < 1900 || year > new Date().getFullYear() + 1) {
      setError("Please enter a valid vehicle year.");
      return;
    }

    const normalizedLocation = normalizeLocation(form.location);

    if (!normalizedLocation) {
      setError("Please enter the vehicle location.");
      return;
    }

    if (!form.price || form.price === "₦") {
      setError("Please enter the vehicle price.");
      return;
    }

    setPublishing(true);

    try {
      const response = await fetch("/api/admin/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          year,
          condition: form.condition,
          price: form.price,
          location: normalizedLocation,
          transmission: form.transmission,
          fuelType: form.fuelType,
          featured: form.featured,
          sold: form.sold,
          images: form.images,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not publish vehicle.");
      }

      setMessage(
        "Vehicle published successfully. Vercel will now deploy the update."
      );

      setForm({
        name: "",
        year: "",
        condition: "Foreign Used",
        price: "₦",
        location: "Lagos, Nigeria",
        transmission: "Automatic",
        fuelType: "Petrol",
        featured: false,
        sold: false,
        images: [],
      });
    } catch (publishError) {
      setError(
        publishError instanceof Error
          ? publishError.message
          : "Could not publish vehicle."
      );
    } finally {
      setPublishing(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-100">
      <header className="border-b border-zinc-200 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div>
            <Link
              href="/admin"
              className="text-xl font-black uppercase tracking-tight text-white"
            >
              A-ZED <span className="text-red-600">69</span>
            </Link>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Add Vehicle
            </p>
          </div>

          <Link
            href="/admin/vehicles"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-white/30 hover:text-white"
          >
            Back To Vehicles
          </Link>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Inventory
          </p>

          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
            Add New Vehicle
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            Enter the vehicle information below and upload the vehicle photos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Vehicle Details
              </p>

              <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-black">
                Basic Information
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Vehicle Name"
                value={form.name}
                onChange={(value) => updateField("name", value)}
                placeholder="e.g. Toyota Camry TRD"
                required
              />

              <Field
                label="Year"
                type="number"
                value={form.year}
                onChange={(value) => updateField("year", value)}
                placeholder="e.g. 2021"
                required
              />

              <SelectField
                label="Condition"
                value={form.condition}
                onChange={(value) =>
                  updateField("condition", value as Condition)
                }
                options={["Brand New", "Foreign Used"]}
              />

              <Field
                label="Price"
                value={form.price}
                onChange={handlePriceChange}
                placeholder="₦14,000,000"
                inputMode="numeric"
                required
              />

              <Field
                label="Location"
                value={form.location}
                onChange={handleLocationChange}
                onBlur={handleLocationBlur}
                placeholder="Lagos, Nigeria"
                required
              />

              <SelectField
                label="Transmission"
                value={form.transmission}
                onChange={(value) => updateField("transmission", value)}
                options={["Automatic", "Manual", "CVT"]}
              />

              <SelectField
                label="Fuel Type"
                value={form.fuelType}
                onChange={(value) => updateField("fuelType", value)}
                options={["Petrol", "Diesel", "Hybrid", "Electric"]}
              />

              <div className="flex flex-col gap-5 sm:col-span-2">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(event) =>
                      updateField("featured", event.target.checked)
                    }
                    className="h-5 w-5 rounded border-zinc-300 accent-red-600"
                  />

                  <span>
                    <span className="block text-sm font-bold text-black">
                      Featured Vehicle
                    </span>

                    <span className="block text-xs text-zinc-500">
                      Display this vehicle in featured inventory sections.
                    </span>
                  </span>
                </label>

                <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div>
                    <span className="block text-sm font-bold text-black">
                      Sold Vehicle
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      Turn this on when the vehicle has been sold.
                    </span>

                    <span
                      className={`mt-2 inline-block text-[10px] font-black uppercase tracking-widest ${
                        form.sold
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {form.sold ? "SOLD" : "FOR SALE"}
                    </span>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={form.sold}
                    aria-label="Mark vehicle as sold"
                    onClick={() =>
                      updateField("sold", !form.sold)
                    }
                    className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 ${
                      form.sold
                        ? "bg-red-600"
                        : "bg-zinc-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        form.sold
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Vehicle Photos
              </p>

              <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-black">
                Images
              </h2>
            </div>

            <VehicleImageUploader
              onChange={(images) => updateField("images", images)}
            />
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          {message && (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
              {message}
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin/vehicles"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 text-sm font-bold text-zinc-700 transition hover:border-black hover:text-black"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={publishing}
              className="h-12 rounded-xl bg-black px-7 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {publishing ? "Publishing..." : "Publish Vehicle"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  required = false,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  inputMode?: "numeric" | "text";
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-black outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-black outline-none transition focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}