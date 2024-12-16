import { auth } from "../_library/auth";
import NavBar from "./NavBar";

async function Navigation() {
  const session = await auth();
  return (
    <div className="border-b border-primary-900">
      <NavBar session={session} />
    </div>
  );
}

export default Navigation;
