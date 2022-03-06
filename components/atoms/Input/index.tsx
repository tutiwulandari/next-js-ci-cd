import React from "react";

interface FormInputProps {
    lable : string,
    placeholder : string
}

export default function Input(props: FormInputProps) {
    const {lable, placeholder, ...nativeProps} = props 
  return (
    <div>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
       {lable}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={placeholder}
        {...nativeProps}
      />
    </div>
  );
}
