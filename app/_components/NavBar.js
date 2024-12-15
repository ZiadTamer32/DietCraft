"use client";

import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menu = [
    { id: 1, label: "Diet Recommendation", href: "/diet-recommendation" },
    { id: 2, label: "Custom Food Recommendation", href: "/custom-diet" },
    { id: 3, label: "Browse Foods", href: "/browse-foods" }
  ];

  function handleClick() {
    setMenuOpen(false);
  }
  return (
    <nav className="bg-[#095c43]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DietCraft
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="#"
            className="sm:flex hidden items-center gap-2 btn-grad px-3 py-2"
          >
            <FaSignInAlt />
            SignUp
          </Link>
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden text-white"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              {isMenuOpen ? (
                <RiCloseLargeFill />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row gap-4 font-medium sm:p-0 p-4 sm:mt-0 mt-5 max-sm:border max-sm:border-gray-500  max-sm:bg-[#074a36] rounded-lg">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={() => handleClick()}
                  href={item.href}
                  className={`block text-white py-[0.55rem] px-3 sm:mb-0 mb-2 ${
                    pathname === item.href
                      ? "bg-[#053728] sm:rounded-full rounded-lg"
                      : ""
                  } `}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link
              href="#"
              className="max-sm:flex hidden items-center justify-center gap-2 btn-grad px-3 py-2"
            >
              <FaSignInAlt />
              SignUp
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// #b1da96 095c43
// <div className="bg-[#095c43] flex items-center justify-between  text-white px-10 py-4">
// <Link href="/" className="text-xl font-semibold text-primary-100">
// DietCraft
// </Link>
// <nav className="hidden sm:block">
// <Navigation />
// </nav>
// <SignUp />
// </div>

{
  /* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<li>
  <Link
    href="/diet-recommendation"
    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    aria-current="page"
  >
    Diet Recommendation
  </Link>
</li>
<li>
  <Link
    href="/custom-diet"
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  >
    Custom Recommendation
  </Link>
</li>
<li>
  <Link
    href="/browse-foods"
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  >
    Browse Foods
  </Link>
</li>
</ul> */
}