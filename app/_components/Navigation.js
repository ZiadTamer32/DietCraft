"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navigation() {
  const [clicked, setIsClicked] = useState(null);
  const pathname = usePathname();

  const menu = [
    { id: 1, label: "Diet Recommendation", href: "/diet-recommendation" },
    { id: 2, label: "Custom Food Recommendation", href: "/custom-diet" },
    { id: 3, label: "Browse Foods", href: "/browse-foods" }
  ];

  function handleClicked(id) {
    setIsClicked(id);
  }

  useEffect(() => {
    if (
      pathname !== "/diet-recommendation" &&
      pathname !== "/custom-diet" &&
      pathname !== "/browse-foods"
    ) {
      setIsClicked(null);
    }
  }, [pathname]);

  return (
    <ul className="flex gap-7">
      {menu.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`py-[0.6rem] px-3 ${
              clicked === item.id ? "bg-[#053728] rounded-full" : ""
            } ${
              pathname === "/diet-recommendation" && item.id === 1
                ? "bg-[#053728] rounded-full"
                : ""
            }`}
            onClick={() => handleClicked(item.id)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
