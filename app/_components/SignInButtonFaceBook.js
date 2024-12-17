import { signInActionsFaceBook } from "../_library/action";

export default function SignInButtonFaceBook() {
  return (
    <form action={signInActionsFaceBook}>
      <button className="flex items-center gap-6 text-lg max-w-96 border border-primary-300 px-10 py-4 font-medium">
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
