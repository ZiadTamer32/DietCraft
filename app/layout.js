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
        {/* <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "18px",
              maxWidth: "500px",
              padding: "18px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)"
            }
          }}
        /> */}
      </body>
    </html>
  );
}
