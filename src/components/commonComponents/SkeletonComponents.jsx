import React from "react";

export function SkeletonImgPlace() {
  return (
    <>
      <div className=" h-60 mb-3 bg-gray-300 animate-pulse rounded-2xl"></div>
    </>
  );
}

export function SkeletonText({ width }) {
  return (
    <>
      <div className={" h-3 mb-3 bg-gray-300 animate-pulse " + width}></div>
    </>
  );
}
