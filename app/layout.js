import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Navigation from "./_components/Navigation";

const joesfinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "DietCraft"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${joesfinSans.className}  text-white`}>
        <div>
          <Navigation />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
