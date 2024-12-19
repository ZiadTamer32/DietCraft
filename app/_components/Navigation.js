import { auth } from "../_library/auth";
import NavBar from "./NavBar";

async function Navigation() {
  const session = await auth();
  return (
    <div>
      <NavBar session={session} />
    </div>
  );
}

export default Navigation;
