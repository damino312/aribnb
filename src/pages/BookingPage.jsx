import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";

export default function BookingPage() {
  const [bookings, setBookings] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get("/bookings").then(({ data }) => {
      setBookings(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {bookings.length > 0 &&
        bookings.map((booking) => <div>{booking.name}</div>)}
    </div>
  );
}
