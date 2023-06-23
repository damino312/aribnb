import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BookingNav() {
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[3];
  if (subpage === undefined) {
    subpage = "requests";
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
      <Link className={linkClasses("requests")} to={"/account/requests"}>
        Current requests
      </Link>
      <Link className={linkClasses("history")} to={"/account/requests/history"}>
        History
      </Link>
    </nav>
  );
}
