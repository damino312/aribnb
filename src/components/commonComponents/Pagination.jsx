import React from "react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  function handlePage(ev, number) {
    ev.preventDefault();
    setCurrentPage(number);
  }

  return (
    <div className="flex gap-2 mt-4 justify-center">
      {pages.map((page) => (
        <button key={page} onClick={(ev) => handlePage(ev, page)} className={"border border-primary px-4 py-2" + (currentPage === page ? " bg-primary text-white " : "")}>
          {page}
        </button>
      ))}
    </div>
  );
}
