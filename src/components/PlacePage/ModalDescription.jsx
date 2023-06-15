import React, { useEffect, useState } from "react";

export default function ModalDescription({
  isShown,
  closeModalDescription,
  description,
}) {
  
  if (!isShown) {
    return;
  }
  const [closing, setClosing] = useState(false) // straight below the if

  //to not close the modal window by clicking any area but just by the container
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeAnim();
    }
  };

  const closeAnim = () => {
    setClosing(true)
    setTimeout(() => {
      closeModalDescription(); // so that It did not close before the anim ends
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 bg-opacity-50 bg-black ${
        closing ? " opacity-0" : "animate-[fade_0.5s]"
      } flex justify-center items-center transition duration-500`}
      onClick={handleBackdropClick}
    >
      <div className=" h-3/4 max-h-full overflow-auto w-1/2 bg-white rounded-lg animate-[popUp_0.5s_ease-in-out] p-6">
        <div className="mt-22">
          <button
            onClick={closeAnim}
            className=" hover:animate-[turnAround_1s_ease-in-out] "
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
        <h2 className="text-3xl font-bold mb-4">About this place:</h2>
        <p className=" whitespace-pre-line text-justify">{description}</p>
      </div>
    </div>
  );
}
