import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../components/commonComponents/ProfileNav";

export default function BookingPage() {
  const [bookings, setBookings] = useState("");

  useEffect(() => {
    getMyBookings();
  }, []);

  function getMyBookings() {
    axios.get("/bookings").then(({ data }) => {
      setBookings(data);
    });
  }

  async function handleDelete(ev, bookingId) {
    ev.preventDefault();
    await axios.delete("http://localhost:4000/booking/" + bookingId);
    getMyBookings();
  }

  function returnResultOfStatus(status, zero, one, two) {
    if (status === 0) {
      return zero;
    } else if (status === 1) {
      return one;
    } else {
      return two;
    }
  }

  function returnInfo(name, value) {
    return (
      <p className="">
        <span className="font-bold">{name}: </span>
        {value}
      </p>
    );
  }
  return (
    <div>
      <ProfileNav />
      {bookings.length > 0 &&
        bookings.map((booking) => (
          <Link
            className={
              "flex h-40 my-4 p-2 bg-gray-300 w-full rounded-2xl gap-2" +
              returnResultOfStatus(
                booking.status,
                "bg-gray-300",
                " bg-green-400",
                " bg-red-500"
              )
            }
            key={booking._id}
            to={"/place/" + booking.place._id}
          >
            <img
              src={"http://localhost:4000/uploads/" + booking.place.photos?.[0]}
              alt=""
            />
            <div className="grid grid-cols-layout grid-rows-3 w-full text-lg items-center  ">
              <h2 className="col-span-3 text-center text-2xl font-bold">
                {booking.place.title}
              </h2>
              <div className="row-span-3 justify-self-center ">
                <button
                  onClick={(ev) => handleDelete(ev, booking._id)}
                  className={
                    "bg-primary rounded-2xl py-2 px-4 text-white" +
                    returnResultOfStatus(
                      booking.status,
                      "bg-primary",
                      " bg-primary",
                      " bg-slate-950"
                    )
                  }
                >
                  Delete
                </button>
              </div>

              {returnInfo("Name", booking.name)}
              {returnInfo(
                "Check in",
                new Date(booking.checkIn).toLocaleDateString("en-US")
              )}
              {returnInfo(
                "Check out",
                new Date(booking.checkOut).toLocaleDateString("en-US")
              )}
              {returnInfo("Phone", booking.phone)}
              {returnInfo("Number of the guests", booking.guests)}
              {returnInfo(
                "Status",
                returnResultOfStatus(
                  booking.status,
                  "In process",
                  "Approved",
                  "Dismissed"
                )
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
