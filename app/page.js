import Link from "next/link";
import { IoMdFitness } from "react-icons/io";

export default async function Page() {
  return (
    <main>
      <div className="relative flex flex-col image items-center justify-center h-screen px-4 sm:px-8 lg:px-16 text-[#313121]">
        <div className="text-center max-w-[37.5rem] z-10">
          <h1 className="sm:text-[2.25rem] text-2xl leading-relaxed sm:mb-5 max-lg:drop-shadow-xl max-md:drop-shadow-md max-sm:drop-shadow-sm">
            Welcome to DietCraft – Your journey to a healthier lifestyle starts
            here !
          </h1>
          <Link
            href="/diet-recommendation"
            className="text-white flex gap-2 items-center justify-center sm:px-6 px-3 sm:py-4 py-2 rounded-lg sm:text-xl text-md font-semibold mt-4 btn-grad w-fit mx-auto"
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
