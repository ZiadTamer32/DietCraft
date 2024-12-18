"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ label, children, onClick }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn-grad focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      disabled={pending}
      type="submit"
      onClick={onClick}
    >
      {pending ? label : children}
    </button>
  );
}

export default SubmitButton;
