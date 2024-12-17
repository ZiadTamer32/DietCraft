import { auth } from "@/app/_library/auth";
import SignOutButton from "../_components/SignOutButton";

export default async function Page() {
  const session = await auth();
  console.log(session);
  if (!session) {
    return <p>You are not signed in.</p>;
  }

  return (
    <div className="px-4 py-6 flex flex-col gap-6">
      <p>Welcome, {session.user.name}!</p>
      <p>{session.user.email}</p>
      <SignOutButton />
    </div>
  );
}
