import React from "react";
import { useEffect } from "react";

export default function Perks({ selected, onChange }) {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("WIFI")}
          name="WIFI"
          onChange={handleCbClick}
        />
        <span>WIFI</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("Parking")}
          name="Parking"
          onChange={handleCbClick}
        />
        <span>Free parking lot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("TV")}
          name="TV"
          onChange={handleCbClick}
        />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("Radio")}
          name="Radio"
          onChange={handleCbClick}
        />
        <span>Radio</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("Playstation")}
          name="Playstation"
          onChange={handleCbClick}
        />
        <span>PlayStation</span>
      </label>
    </>
  );
}
