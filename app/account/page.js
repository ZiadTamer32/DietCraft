import { auth } from "@/app/_library/auth";
import SignOutButton from "../_components/SignOutButton";
import AccountPage from "../_components/AccountPage";
import { getCurrentUser } from "../_library/action";

export default async function Page() {
  const session = await auth();
  const user = await getCurrentUser();

  return (
    <div className="px-4 py-6 flex flex-col gap-6 text-black">
      {user && <AccountPage user={user} />}
      {session && <p>Welcome, {session?.user?.name}!</p>}
      <SignOutButton />
    </div>
  );
}
