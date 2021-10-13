import React from "react";

function Item({ item }) {
  return (
    <div className="p-2">
      <q>{item.quote}</q> <strong className="text-danger">{item.author}</strong>
    </div>
  );
}

export default Item;
