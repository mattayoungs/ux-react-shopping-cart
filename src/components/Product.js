import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  const handleIncrement = () => props.onIncrementQuantity(props.item.id);
  const handleDecrement = () => props.onDecrementQuantity(props.item.id);
  return (
    <span>
      {props.item.name} - {props.item.price} -
      <Quantity
        item={props.item}
        onIncrementQuantity={handleIncrement}
        onDecrementQuantity={handleDecrement}
      />
    </span>
  );
}

export default Product;
