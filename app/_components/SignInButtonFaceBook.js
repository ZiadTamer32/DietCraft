import { signInActionsFaceBook } from "../_library/action";

export default function SignInButtonFaceBook() {
  return (
    <form action={signInActionsFaceBook}>
      <button className="flex items-center gap-6 text-lg border border-white px-10 py-4 font-medium w-[22rem]">
        <img
          src="https://authjs.dev/img/providers/facebook.svg"
          alt="Facebook logo"
          height="24"
          width="24"
        />
        <span>Continue with Facebook</span>
      </button>
    </form>
  );
}
