import React from "react";

export default function AdaptiveBookingBar({
  price,
  openModalBooking,
  isShown,
}) {
  // Оформить этот бар и клавишу как то прихерачить к ней чтобы по клику выводило в модульном окне резервацию
  return (
    <div
      className={
        " fixed left-0 bottom-0 min-w-full h-20 border-t px-8 bg-white " +
        (isShown ? "block lg:hidden" : "hidden")
      }
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full gap-4 ">
        <span className=" align-baseline text-lg whitespace-nowrap">
          <b className="text-2xl ">$ {price?.toLocaleString("en-IN")}</b> per
          night
        </span>
        <button onClick={openModalBooking} className="primary max-w-xs text-lg">
          Reserve
        </button>
      </div>
    </div>
  );
}
