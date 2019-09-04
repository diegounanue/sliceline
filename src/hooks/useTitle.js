import { useEffect } from "react";

export default function useTitle({ openFood, orders }) {
  // You can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `What's for dinner?`
          : `[${orders.length}] items in your order! `;
    }
  });
}
