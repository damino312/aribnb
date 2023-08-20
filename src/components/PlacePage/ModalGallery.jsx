import React from "react";
import { LINK } from "../../config/config";

export default function ModalGallery({ isShown, images, closeModalGallery }) {
  if (!isShown) return null;

  return (
    <div className="inset-0 fixed bg-black bg-opacity-100 overflow-auto">
      <div className="rounded-lg w-full max-w-screen-lg max-h-screen mx-auto ">
        <div className="p-4">
          <button
            onClick={closeModalGallery}
            className="p-2 hover:animate-[turnAround_1s_ease-in-out]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          {images.map((image) => (
            <img
              key={image}
              src={LINK + "/uploads/" + image}
              alt=""
              className="object-cover object-center w-full aspect-video mt-2 last:pb-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
