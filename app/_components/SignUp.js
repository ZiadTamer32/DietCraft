"use client";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  return (
    <section className="flex-1">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6 pt-6 space-y-4 md:space-y-6 sm:px-8 sm:pt-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <SignUpForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              watch={watch}
            />
          </div>
          {/* <div className="flex items-center justify-center mt-4">
            <SignInButton />
          </div> */}
          <div className="text-sm font-light text-gray-500 dark:text-gray-400 px-4 my-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
