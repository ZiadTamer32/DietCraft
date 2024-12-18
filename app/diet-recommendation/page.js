import DietForm from "../_components/DietForm";
import { getGuest } from "../_library/action";
import { auth } from "../_library/auth";

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  console.log(guest);
  return <DietForm session={session} guest={guest} />;
}
