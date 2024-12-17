import Link from "next/link";
import { IoMdFitness } from "react-icons/io";

export default async function Page() {
  return (
    <main>
      <div className=" home-bg relative z-10 flex flex-col items-center justify-center h-screen text-black px-4 sm:px-8 lg:px-16">
        {/* <Image src={bg} fill className="object-cover" quality={80} alt="bg" /> */}
        {/* <div className="absolute inset-0 bg-black opacity-25 z-10"></div> */}
        <div className="text-center">
          <h1 className="text-2xl max-md:leading-relaxed sm:text-4xl lg:text-6xl font-bold mb-6 max-lg:drop-shadow-xl max-md:drop-shadow-md max-sm:drop-shadow-sm">
            Reach your goals with DietCraft
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 drop-shadow-md">
            Develop healthy habits with an all-in-one tracker for food,
            exercise, and calories.
          </p>
          <Link
            href="/diet-recommendation"
            className="text-white flex gap-2 items-center justify-center px-6 py-4 rounded-lg text-xl font-semibold mt-4 btn-grad w-fit mx-auto"
          >
            <IoMdFitness className="w-7 h-7" />
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

// bg-gradient-to-tr from-green-700 via-green-500 to-emerald-400
// bg-gradient-to-r from-[#38ef7d] to-[#11998e]
