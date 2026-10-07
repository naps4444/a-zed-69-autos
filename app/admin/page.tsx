import Link from "next/link";
import { auth, signOut } from "@/auth";
import { vehicles } from "@/data/vehicles";

export default async function AdminDashboard() {
const session = await auth();

const totalVehicles = vehicles.length;
const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured).length;
const brandNewVehicles = vehicles.filter(
(vehicle) => vehicle.condition === "Brand New"
).length;
const foreignUsedVehicles = vehicles.filter(
(vehicle) => vehicle.condition === "Foreign Used"
).length;

return ( <main className="min-h-screen bg-zinc-100"> <header className="border-b border-zinc-200 bg-black"> <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8"> <div> <p className="text-xl font-black uppercase tracking-tight text-white">
A-ZED <span className="text-red-600">69</span> </p>

```
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
          Autos Admin
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-white/30 hover:text-white sm:block"
        >
          View Website
        </Link>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
        >
          <button
            type="submit"
            className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  </header>

  <section className="border-b border-zinc-200 bg-white">
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
        Dashboard
      </p>

      <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {session?.user?.email || "Administrator"}
          </p>
        </div>

        <Link
          href="/admin/vehicles/new"
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
        >
          + Add Vehicle
        </Link>
      </div>
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Vehicles"
        value={totalVehicles}
        accent="red"
      />

      <StatCard
        label="Featured Vehicles"
        value={featuredVehicles}
        accent="blue"
      />

      <StatCard
        label="Brand New"
        value={brandNewVehicles}
        accent="red"
      />

      <StatCard
        label="Foreign Used"
        value={foreignUsedVehicles}
        accent="blue"
      />
    </div>

    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
      <section className="rounded-2xl border border-zinc-200 bg-white">
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Inventory
            </p>

            <h2 className="mt-1 text-xl font-black uppercase tracking-tight text-black">
              Vehicle Management
            </h2>
          </div>

          <Link
            href="/admin/vehicles"
            className="text-xs font-bold uppercase tracking-wider text-zinc-500 transition hover:text-red-600"
          >
            View All
          </Link>
        </div>

        <div className="divide-y divide-zinc-100">
          {vehicles.slice(0, 6).map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center justify-between gap-4 px-6 py-5"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-black">
                  {vehicle.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {vehicle.year} • {vehicle.condition}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-sm font-black text-black">
                  {vehicle.price}
                </p>

                <p
                  className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${
                    vehicle.featured
                      ? "text-red-600"
                      : "text-zinc-400"
                  }`}
                >
                  {vehicle.featured ? "Featured" : "Standard"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-200 px-6 py-4">
          <Link
            href="/admin/vehicles"
            className="text-sm font-bold text-black transition hover:text-red-600"
          >
            Manage all vehicles →
          </Link>
        </div>
      </section>

      <aside className="space-y-5">
        <ActionCard
          href="/admin/vehicles/new"
          title="Add Vehicle"
          text="Create a new vehicle listing and upload its images."
        />

        <ActionCard
          href="/admin/vehicles"
          title="Manage Inventory"
          text="Edit, delete, search, and manage your existing vehicles."
        />

        <div className="rounded-2xl bg-black p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Publishing
          </p>

          <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">
            Automatic Deployment
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            New vehicle changes will eventually be published through
            GitHub and deployed automatically by Vercel.
          </p>
        </div>
      </aside>
    </div>
  </section>
</main>

);
}

function StatCard({
label,
value,
accent,
}: {
label: string;
value: number;
accent: "red" | "blue";
}) {
return ( <div className="rounded-2xl border border-zinc-200 bg-white p-6">
<div
className={`h-1 w-10 rounded-full ${
          accent === "red" ? "bg-red-600" : "bg-blue-600"
        }`}
/>

```
  <p className="mt-6 text-3xl font-black tracking-tight text-black">
    {value.toString().padStart(2, "0")}
  </p>

  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
    {label}
  </p>
</div>

);
}

function ActionCard({
href,
title,
text,
}: {
href: string;
title: string;
text: string;
}) {
return ( <Link
   href={href}
   className="block rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-black hover:shadow-lg"
 > <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
Admin </p>

  <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-black">
    {title}
  </h3>

  <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>

  <p className="mt-5 text-sm font-bold text-black">Open →</p>
</Link>

);
}
