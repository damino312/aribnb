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
  const [closing, setClosing] = useState(false); // straight below the if

  //to not close the modal window by clicking any area but just by the container
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeAnim();
    }
  };

  const closeAnim = () => {
    setClosing(true);
    setTimeout(() => {
      closeModalBooking(); // so that It did not close before the anim ends
    }, 500);
  };
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 bg-black ${
        closing ? " opacity-0" : "animate-[fade_0.5s]"
      } flex justify-center items-center transition duration-500`}
      onClick={handleBackdropClick}
    >
      <div className="max-h-full overflow-auto w-2/3 bg-white rounded-3xl animate-[popUp_0.5s_ease-in-out]">
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
