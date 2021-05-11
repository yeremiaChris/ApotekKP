import React from "react";

export default function QuantityInput() {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Kuantitas
      </label>
      <div className="flex items-center gap-2 mt-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <input
          style={{ MozAppearance: "textfield" }}
          type="number"
          name="kuantitas"
          id="kuantitas"
          className="shadow-sm w-14 focus:border-indigo-500 block border-gray-300 rounded-md text-center"
          placeholder="0"
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
