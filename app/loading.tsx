import { Loader } from "@/components/motion/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="mb-8 text-center">
          <p className="text-2xl font-black uppercase tracking-[0.2em] text-white">
            A-ZED 69
          </p>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
            Autos
          </p>
        </div>

        <Loader
          variant="scramble"
          size={42}
          speed={1}
          label="Loading A-ZED 69 Autos"
          className="text-red-600"
        />

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500">
          Loading
        </p>
      </div>
    </div>
  );
}
