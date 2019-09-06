import { useState } from "react";

export default function useQuantity() {
  const [value, setValue] = useState(1);

  function onChange(e) {
    if (!(+e.target.value >= 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  }

  return {
    value,
    setValue,
    onChange
  };
}
