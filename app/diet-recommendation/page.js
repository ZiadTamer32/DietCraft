import { guest } from "../_library/action";

export default async function Page() {
  const guests = await guest();
  return (
    <div>
      <h2>Diet Page</h2>
      <h2>{guests.map((guest) => guest.fullName)}</h2>
    </div>
  );
}
