import React from "react";
import { Field } from "formik";
function ContactInput({ placeholder, name, id, type, onChange, value }) {
  return (
    <Field
      placeholder={placeholder}
      className="bg-gray-100 rounded-tl-xl px-4 py-1 text-sm mt-2 w-full"
      name={name}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
}

export default ContactInput;
