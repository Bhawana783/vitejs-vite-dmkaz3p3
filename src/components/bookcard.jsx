// write the book component code here
// cart/bookcard.jsx
import React from "react";

const BookCard = ({ title, author, year, cover }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-xs">
      <img src={cover} alt={title} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">by {author}</p>
      <p className="text-gray-500">Published: {year}</p>
    </div>
  );
};

export default BookCard;
