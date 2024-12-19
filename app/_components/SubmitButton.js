"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ label, children, onClick, className }) {
  const { pending } = useFormStatus();
  return (
    <button
      className={className}
      disabled={pending}
      type="submit"
      onClick={onClick}
    >
      {pending ? label : children}
    </button>
  );
}

export default SubmitButton;
//  bg-[#095c43] hover:bg-[#053728] transition
