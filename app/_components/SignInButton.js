import { signInActions } from "../_library/action";

export default function SignInButton() {
  return (
    <form action={signInActions}>
      <button className="flex items-center gap-6 text-lg border border-black px-10 py-4 font-medium w-[22rem]">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
