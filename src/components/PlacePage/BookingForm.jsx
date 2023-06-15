import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export default function BookingForm({
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  idPlace,
}) {
  const [guests, setGuests] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const { user } = useContext(UserContext);

  function bookThePlace(ev) {
    ev.preventDefault();
    axios.post("/booking", {
      user: user._id,
      place: idPlace,
      guests: guests,
      checkIn: checkIn,
      checkOut: checkOut,
      firstName: firstName,
      phone: phone,
    });
  }
  return (
    <form onSubmit={(ev) => bookThePlace(ev)}>
      <div className="border border-gray-300 rounded-2xl grid grid-cols-2 overflow-hidden ">
        <div className="p-2 py-3 border-r border-inherit ">
          <p className="font-bold text-sm">Check in:</p>
          <input
            type="date"
            name="checkIn"
            value={checkIn}
            onChange={(ev) => setCheckIn(ev.target.value)}
          />
        </div>
        <div className="p-2 py-3">
          <p className="font-bold text-sm">Check out:</p>
          <input
            type="date"
            name="checkOut"
            value={checkOut}
            onChange={(ev) => setCheckOut(ev.target.value)}
          />
        </div>
        <div className=" col-span-2 p-2 py-3 border-t border-inherit">
          <p className="font-bold text-sm">Number of guests:</p>
          <input
            type="number"
            className="w-full"
            value={guests}
            onChange={(ev) => setGuests(ev.target.value)}
            placeholder="type the number"
          />
        </div>
        <div className="col-span-2 p-2 py-3 border-t border-inherit">
          <p className="font-bold text-sm">Your firstname:</p>
          <input
            type="text"
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
            placeholder="John Doe"
          />
          <p className="font-bold text-sm">Your phone number:</p>
          <input
            type="text"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            placeholder="+7913123132"
          />
        </div>
      </div>
      <button className=" text-center w-full bg-primary mt-4 py-3 rounded-xl font-bold text-white mb-2">
        Reserve
      </button>
    </form>
  );
}
