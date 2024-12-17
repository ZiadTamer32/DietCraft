import SignInButton from "@/app/_components/SignInButton";
import SignInButtonFaceBook from "../_components/SignInButtonFaceBook";

export default function Page() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center">
      <SignInButton />
      <SignInButtonFaceBook />
    </div>
  );
}
