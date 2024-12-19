"use client";
import { dietSubmission } from "../_library/action";
import SpinnerMini from "./SpinnerMini";
import RangeForm from "./RangeForm";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";
import Results from "./Results";
function DietForm() {
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (result) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [result]);

  function handleClick() {
    setResult(true);
  }
  return (
    <div className="py-5">
      <div className="text-center text-gray-900 px-5">
        <h1 className="font-bold lg:text-4xl text-xl mb-2">
          Automatic Diet Recommendation
        </h1>
        <h3 className="font-semibold sm:text-lg text-md sm:mb-5 mb-2">
          Get personalized diet recommendations based on your goals and
          lifestyle
        </h3>
      </div>
      <div className="block max-lg:box-shadow max-w-[850px] mx-auto sm:border sm:border-slate-200">
        <form action={dietSubmission} className="p-7">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="height"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                max={250}
                required
              />
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="bodyFat"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                body fat percentage (%)
              </label>
              <input
                type="number"
                id="bodyFat"
                name="bodyFat"
                max={100}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="activity"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Activity
            </label>
            <select
              id="activity"
              name="activity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="little">Little/no exercise</option>
              <option value="light">Light exercise</option>
              <option value="moderate">Moderate exercise</option>
              <option value="very_active">Very Active</option>
              <option value="extra_active">
                Extra active (very active & physical job)
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="plan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Choose your weight loss plan :
            </label>
            <select
              id="plan"
              name="plan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="maintain">Maintain Weight</option>
              <option value="mild">Mild Weight Loss</option>
              <option value="loss">Weight Loss</option>
              <option value="extreme">Extreme Weight Loss</option>
            </select>
          </div>
          <RangeForm />
          <div className="mb-6">
            <label
              htmlFor="duration"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Diet Duration
            </label>
            <input
              type="date"
              id="duration"
              name="duration"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <SubmitButton
            label={<SpinnerMini />}
            onClick={() => handleClick()}
            className="bg-[#095c43] hover:bg-[#053728] transition focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Generate
          </SubmitButton>
        </form>
      </div>
      {result && <Results />}
    </div>
  );
}

export default DietForm;
