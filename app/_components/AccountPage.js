export function AccountPage({ user }) {
  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <p>First Name: {user?.user_metadata?.firstName}</p>
      <p>Last Name: {user?.user_metadata?.lastName}</p>
    </div>
  );
}

export default AccountPage;
