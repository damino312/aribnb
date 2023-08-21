import React, { useState, useEffect } from "react";
import Booking from "./Booking";

export default function ModalBooking({
  isShown,
  closeModalBooking,
  idPlace,
  showError,
  owner,
  price,
}) {
  if (!isShown) {
    return;
  }
  const [closing, setClosing] = useState(false); // Straight below the if

  //In order not to close the modal window by clicking any area but just by the container
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeAnim();
    }
  };

  const closeAnim = () => {
    setClosing(true);
    setTimeout(() => {
      closeModalBooking(); // So that It did not close before the anim ends
    }, 500);
  };
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 bg-black ${
        closing ? " opacity-0" : "animate-[fade_0.5s]"
      } flex justify-center items-center transition duration-500`}
      onClick={handleBackdropClick}
    >
      <div className="h-4/5 max-h-full overflow-auto w-5/6 bg-white rounded-3xl animate-[popUp_0.5s_ease-in-out]">
        <button
          onClick={() => {
            closeAnim();
          }}
          className=" hover:animate-[turnAround_1s_ease-in-out] mx-2 mt-4 p-1 "
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
        <Booking
          price={price}
          idPlace={idPlace}
          showError={showError}
          owner={owner}
        />
      </div>
    </div>
  );
}
