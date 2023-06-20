import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../components/commonComponents/ProfileNav";
import BookingNav from "../components/commonComponents/BookingNav";

export default function RequestPage() {
  const [myRequests, setMyRequests] = useState([]);
  useEffect(() => {
    getMyRequest();
  }, []);

  function getMyRequest() {
    axios.get("/myrequests").then(({ data }) => setMyRequests(data));
  }

  // status: 0 - in process, 1 - approved, 2 - dismissed
  async function handleStatus(ev, status, ownerId, bookingId) {
    ev.preventDefault();
    await axios.put("/myrequest", { status, ownerId, bookingId });
    getMyRequest();
  }
  return (
    <div>
      <ProfileNav />
      <BookingNav />
      {myRequests.length > 0 &&
        myRequests.map((booking) => (
          <Link
            className="flex h-40 my-4 p-2 bg-gray-300 w-full rounded-2xl gap-2"
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
                  onClick={(ev) =>
                    handleStatus(ev, 1, booking.place.owner, booking._id)
                  }
                  className="bg-green-400 rounded-2xl py-2 px-4 text-white mb-4"
                >
                  Approve
                </button>
                <button
                  onClick={(ev) =>
                    handleStatus(ev, 2, booking.place.owner, booking._id)
                  }
                  className="bg-primary rounded-2xl py-2 px-4 text-white"
                >
                  Dismiss
                </button>
              </div>

              <p className="">
                <span className="font-bold">Name:</span> {booking.name}
              </p>
              <p className="">
                <span className="font-bold">Check in:</span>{" "}
                {new Date(booking.checkIn).toLocaleDateString("en-US")}
              </p>
              <p>
                <span className="font-bold">Check out:</span>{" "}
                {new Date(booking.checkOut).toLocaleDateString("en-US")}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {booking.phone}
              </p>
              <p>
                <span className="font-bold">Number of the guests:</span>{" "}
                {booking.guests}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
