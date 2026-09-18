import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
    >
      {/* Number */}
      <div className="flex items-start justify-between">
        <span className="text-sm font-black tracking-wider text-red-600">
          {number}
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
          <ArrowUpRightIcon />
        </span>
      </div>

      {/* Content */}
      <div className="mt-auto pt-14">
        <h3 className="text-xl font-black uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
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