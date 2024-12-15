import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black px-4 sm:px-8 lg:px-16">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 text-center">
        Reach your goals with DietCraft
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-center max-w-2xl mb-6">
        Develop healthy habits with an all-in-one tracker for food, exercise,
        and calories.
      </p>
      <Link
        href="/diet-recommendation"
        className="text-white px-6 py-3 rounded-lg text-lg font-semibold mt-4 btn-grad"
      >
        Get Started
      </Link>
    </div>
  );
}

// bg-gradient-to-tr from-green-700 via-green-500 to-emerald-400
// bg-gradient-to-r from-[#38ef7d] to-[#11998e]
