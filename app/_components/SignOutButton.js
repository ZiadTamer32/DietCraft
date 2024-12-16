import { signOutActions } from "../_library/action";
import { FaSignOutAlt } from "react-icons/fa";

function SignOutButton() {
  return (
    <form action={signOutActions}>
      <button className="flex gap-3 items-center text-lg border border-primary-300 px-10 py-4 font-medium">
        <FaSignOutAlt />
        SignOut
      </button>
    </form>
  );
}

export default SignOutButton;
