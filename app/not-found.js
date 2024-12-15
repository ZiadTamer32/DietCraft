import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold mb-4">
        Looks like you took a wrong turn. This page doesn&apos;t exist!
      </h2>
      <p className="text-xl mb-4">Could not find requested resource</p>
      <Link
        className="text-white px-3 py-[0.60rem] rounded-lg text-lg font-semibold bg-green-700 drop-shadow-md mt-4"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
