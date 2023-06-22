import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useEffect } from "react";

export default function BookingForm({
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  idPlace,
  showError,
  owner,
}) {
  const [guests, setGuests] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [myBookings, setMyBookings] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      axios.get("/bookings").then(({ data }) => {
        setMyBookings(data);
      });
    }
  }, []);

  function bookThePlace(ev) {
    ev.preventDefault();

    checkingForErrors();

    axios.post("/booking", {
      user: user._id,
      place: idPlace,
      guests: guests,
      checkIn: checkIn,
      checkOut: checkOut,
      firstName: firstName,
      phone: phone,
      owner: owner,
    });
  }

  function checkingForErrors() {
    //errors: 1 - not logged in, 2 - owner, 3 - wrong with the dates, 4 - already have booked, 5 - limit is exceeded
    if (!user?._id) {
      showError(1);
      return 0;
    } else if (user?._id === owner) {
      showError(2);
      return 0;
    } else if (dateValidation() === false) {
      showError(3);
      return 0;
    } else if (hasBeenBooked() === false) {
      showError(4);
      return 0;
    } else if (isLimitExceeded() === false) {
      showError(5);
      return 0;
    }
  }

  function dateValidation() {
    const today = new Date();
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    if (today > inDate || inDate >= outDate) {
      return false;
    } else {
      return true;
    }
  }

  function formField(
    pName,
    iType,
    iValue,
    iOnChange,
    iPlaceholder = undefined
  ) {
    return (
      <>
        <p className="font-bold text-sm">{pName}:</p>
        <input
          type={iType}
          value={iValue}
          placeholder={iPlaceholder}
          onChange={(ev) => iOnChange(ev.target.value)}
          required
        />
      </>
    );
  }

  function hasBeenBooked() {
    if (myBookings && myBookings.length > 0) {
      for (const element of myBookings) {
        if (element.user === user._id) {
          return false;
        }
      }
    }
    return true;
  }

  function isLimitExceeded() {
    if (myBookings && myBookings.length > 0) {
      if (myBookings.length > 2) {
        return false;
      } else {
        return true;
      }
    }
  }

  return (
    <form onSubmit={(ev) => bookThePlace(ev)}>
      <div className="border border-gray-300 rounded-2xl grid grid-cols-2 overflow-hidden ">
        <div className="p-2 py-3 border-r border-inherit ">
          {formField("Check in", "date", checkIn, setCheckIn)}
        </div>
        <div className="p-2 py-3">
          {formField("Check out", "date", checkOut, setCheckOut)}
        </div>
        <div className=" col-span-2 p-2 py-3 border-t border-inherit">
          {formField(
            "Number of guests",
            "number",
            guests,
            setGuests,
            "type the number"
          )}
        </div>
        <div className="col-span-2 p-2 py-3 border-t border-inherit">
          {formField(
            "Your firstname",
            "text",
            firstName,
            setFirstName,
            "John Doe"
          )}

          {formField(
            "Your phone number",
            "number",
            phone,
            setPhone,
            "79131231322"
          )}
        </div>
      </div>
      <button className=" text-center w-full bg-primary mt-4 py-3 rounded-xl font-bold text-white mb-2">
        Reserve
      </button>
    </form>
  );
}
