"use client";

import { useState } from "react";

function RangeForm() {
  const [range, setRange] = useState(3);

  return (
    <div className="mb-6">
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Meals per day
      </label>
      <div className="flex items-center gap-2">
        <input
          id="default-range"
          name="meals_per_day"
          type="range"
          min="3"
          max="5"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#095c43]"
        />
      </div>
      <span className="block text-gray-900 text-sm font-medium mt-2">
        {range}
      </span>
    </div>
  );
}

export default RangeForm;
