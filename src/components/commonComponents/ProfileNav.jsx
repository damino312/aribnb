import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProfileNav() {
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function linkClasses(type = null) {
    let classes = "py-2 px-6 rounded-full bg-gray-200";
    if (type === subpage) {
      classes += " bg-primary text-white";
    }
    return classes;
  }
  return (
    <nav className="flex justify-center mt-8 gap-2 ">
      <Link className={linkClasses("profile")} to={"/account"}>
        My profile
      </Link>
      <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        My bookings
      </Link>
      <Link className={linkClasses("requests")} to={"/account/requests"}>
        My requests
      </Link>
      <Link className={linkClasses("places")} to={"/account/places"}>
        My accommodations
      </Link>
    </nav>
  );
}
