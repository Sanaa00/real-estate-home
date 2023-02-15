import React from "react";
import ContactInput from "./ContactInput";
import ButtobBlue from "./ButtobBlue";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      textarea: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "must smaller than 15 letter")
        .required("required"),
      email: Yup.string().email("validate email").required("required"),
    }),
  });

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit}>
        <p className="font-bold">If You Have Any Question</p>
        <ContactInput
          placeholder="Your Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <p className="text-red-500 text-sm my-1 ml-1">{formik.errors.name}</p>
        ) : null}
        <ContactInput
          placeholder="Your Email"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <p className="text-red-500 text-sm my-1 ml-1">
            {formik.errors.email}
          </p>
        ) : null}
        <textarea
          name="comment"
          id="comment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comment}
          rows={4}
          placeholder="Your Messages"
          className="bg-gray-100 rounded-tl-xl px-4 py-1 text-sm mt-2 w-full"
        />
        <ButtobBlue text="Submit Now" width="full" type="submit" />
      </Form>
    </Formik>
  );
}

export default ContactForm;
