import React from "react";

export default function PlacesPage() {
  return (
    <div>
      <form>
        <h2 className="text-2xl mt-2">Title</h2>
        <p className="text-gray-500 text-sm">name somehow your place</p>
        <input
          className="text-gray-500"
          type="text"
          placeholder="title, for example: My trash pit"
        />
        <h2 className="text-2xl mt-2">Address</h2>
        <p className="text-gray-500 text-sm">An address of a location</p>
        <input
          className="text-gray-500"
          type="text"
          placeholder="address, type it here"
        />
        <h2 className="text-2xl mt-2">Photos</h2>
        <p className="text-gray-500 text-sm">Photos of your place</p>
        <div className="flex gap-2">
          <input
            className="text-gray-500"
            type="text"
            placeholder="put here a link of a photo"
          />
          <button className="bg-gray-200 px-4 rounded-2xl">
            Add&nbsp;photo
          </button>
        </div>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="border bg-transparent rounded-2xl p-8 text-lg flex justify-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </button>
        </div>
        <h2 className="text-2xl mt-2">Photos</h2>
        <p className="text-gray-500 text-sm">Photos of your place</p>
        <textarea />
        <h2 className="text-2xl mt-2">Perks</h2>
        <p className="text-gray-500 text-sm">select all perks that fit</p>
      </form>
    </div>
  );
}
