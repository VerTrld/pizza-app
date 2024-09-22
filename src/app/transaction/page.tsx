"use client";
import React from "react";
import useStore from "../store/cart";

export default function Transaction() {
  const { addCart, setAddToCart } = useStore();

  console.log(addCart);
  return <div>Oppss! Something went wrong </div>;
}
