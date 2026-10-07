"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

setError("");
setLoading(true);

const result = await signIn("credentials", {
  email,
  password,
  redirect: false,
});

if (!result || result.error) {
  setError("Invalid email or password.");
  setLoading(false);
  return;
}

router.push("/admin");
router.refresh();

}

return ( <main className="flex min-h-screen items-center justify-center bg-black px-5"> <div className="w-full max-w-md"> <div className="mb-10 text-center"> <p className="text-3xl font-black uppercase tracking-tight text-white">
A-ZED <span className="text-red-600">69</span> </p>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
        Autos Admin
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 shadow-2xl sm:p-9">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
          Private Area
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
          Admin Login
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Sign in to manage the A-ZED 69 Autos vehicle inventory.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            placeholder="Admin email"
            className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-600/10"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
            placeholder="Admin password"
            className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-600/10"
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-600/20 bg-red-600/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-red-600 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>

    <p className="mt-6 text-center text-xs text-gray-600">
      A-ZED 69 Autos • Secure Admin Area
    </p>
  </div>
</main>


);
}
