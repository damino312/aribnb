import React, { useState } from "react";
import BookingForm from "./BookingForm";

export default function Booking({ price, idPlace, showError, owner }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function countDaysBetween(checkIn, checkOut) {
    const diffInMilliseconds = Math.abs(new Date(checkIn) - new Date(checkOut));
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
  }

  return (
    <div className=" w-full lg:w-5/6 border rounded-3xl h-min px-4 py-6">
      <h3 className="text-lg mb-4">
        <span className="text-2xl font-bold">
          $ {price?.toLocaleString("en-IN")}
        </span>{" "}
        night
      </h3>
      <BookingForm
        checkIn={checkIn}
        checkOut={checkOut}
        setCheckIn={setCheckIn}
        setCheckOut={setCheckOut}
        idPlace={idPlace}
        showError={showError}
        owner={owner}
      />

      <div className="flex justify-between mt-2 pt-4 border-t border-gray-300">
        <span className="font-bold">Total:</span>
        <span className="font-bold">
          ${" "}
          {checkIn && checkOut
            ? countDaysBetween(checkIn, checkOut) * price
            : "0"}
        </span>
      </div>
    </div>
  );
}
