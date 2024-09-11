import s from "./ContactForm.module.css";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
// Визначте схему валідації
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.number()
    .typeError("Must be a number")
    .required("Number is required"),
});

const ContactForm = () => {
  return (
    <div className={s.container}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Обробка даних форми
          console.log("Form data", values);

          // Очищення форми після відправки
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form_container}>
            <div className={s.name_container}>
              <span className={s.name}>Name</span>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className={s.number_container}>
              <span className={s.number}>Number</span>
              <Field
                className={s.input}
                type="number"
                name="number"
                placeholder="Your number"
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <button className={s.button} type="submit" disabled={isSubmitting}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
