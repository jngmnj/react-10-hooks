import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      // function이냐를 왜 묻는거지?
      willUpdate = validator(value); // true면 setValue하게됨
    }
    if (willUpdate) {
      setValue(value);
      console.log(value.length);
    }
  };
  return { value, onChange };
};
