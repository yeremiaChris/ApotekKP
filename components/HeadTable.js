import React from "react";
import Link from "next/link";
export default function HeadTable(props) {
  return (
    <div className="py-3 px-2 border-b flex justify-between">
      <div className="flex items-center gap-2">
        <div className="mt-1">
          <input
            type="text"
            name="cari"
            id="cari"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Cari..."
          />
        </div>
      </div>
      <div>
        <div className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
          <Link href="/tambah">
            <a className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Tambah
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
