import React from "react";

export default function ModalDescription({ isShown, closeGallery }) {
  if (!isShown) return;
  return (
    <div className=" inset-0 fixed bg-black bg-opacity-50  flex justify-center items-center animate-[fade_0.5s_ease-in-out]">
      <div className=" h-3/4 w-1/2 bg-white rounded-lg animate-[popUp_0.5s_ease-in-out]">
        <div className="p-4  ">
          <button onClick={closeGallery} className="p-2 hover:animate-[turnAround_1s_ease-in-out] ">
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
      </div>
    </div>
  );
}
