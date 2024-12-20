import Link from "next/link";
import SpinnerMini from "./SpinnerMini";
import { SignUpGuest } from "../_library/action";
import CreateAccountButton from "./CreateAccountButton";

function SignUpForm({ register, handleSubmit, errors, watch }) {
  return (
    <form className="space-y-4 md:space-y-6" action={handleSubmit(SignUpGuest)}>
      <div className="grid grid-cols-2 gap-3">
        {/* First Name Input */}
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.firstName ? (
              <p className="text-red-500 text-xs text-nowrap">
                {errors.firstName.message}
              </p>
            ) : (
              <p>First Name</p>
            )}
          </label>
          <input
            type="text"
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your First Name"
            {...register("firstName", {
              required: "First Name is required"
            })}
          />
        </div>
        {/* Last Name Input */}
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.lastName ? (
              <p className="text-red-500 text-xs text-nowrap">
                {errors.lastName.message}
              </p>
            ) : (
              <p>Last Name</p>
            )}
          </label>
          <input
            type="text"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Last Name"
            {...register("lastName", {
              required: "Last Name is required"
            })}
          />
        </div>
      </div>
      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {errors.email ? (
            <p className="text-red-500 text-xs text-nowrap">
              {errors.email.message}
            </p>
          ) : (
            <p>Your Email</p>
          )}
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@example.com"
          {...register("email", { required: "Email is required" })}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.password ? (
              <p className="text-red-500 text-xs text-nowrap">
                {errors.password.message}
              </p>
            ) : (
              <p>Password</p>
            )}
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              },
              maxLength: {
                value: 12,
                message: "Password cannot be longer than 12 characters"
              }
            })}
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.confirmPassword ? (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            ) : (
              <p>Confirm Password</p>
            )}
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords do not match"
            })}
          />
        </div>
      </div>
      {/* Terms Checkbox */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            {...register("terms", { required: "You must accept the terms" })}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the
            <Link
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              {" "}
              Terms and Conditions
            </Link>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <CreateAccountButton
        label={<SpinnerMini />}
        className="bg-[#10151c] hover:bg-[#06080b] transition font-medium rounded-lg text-sm w-full px-5 py-2.5 flex justify-center items-center"
      >
        Create an account
      </CreateAccountButton>
    </form>
  );
}

export default SignUpForm;
