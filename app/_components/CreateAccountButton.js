"use client";
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";
function CreateAccountButton({ label, children, className }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={className}
      disabled={pending}
      type="submit"
      onClick={() => redirect("/account")}
    >
      {pending ? label : children}
    </button>
  );
}

export default CreateAccountButton;
