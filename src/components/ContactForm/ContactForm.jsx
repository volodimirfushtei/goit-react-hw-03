import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Визначте схему валідації
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\+?[0-9\s()-]+$/, "Must be a valid phone number") // Регулярний вираз для перевірки телефонного номера
    .required("Number is required")
    .min(3, "Too Short!") // Мінімальна кількість символів, наприклад, для міжнародного формату
    .max(50, "Too Long!"), //альна кількість символів
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onAddContact(values); // Виклик функції для додавання контакту
          resetForm(); // Очищення форми після сабміту
        }}
      >
        <Form className={s.form_container}>
          <div className={s.name_container}>
            <label className={s.label}>
              <span className={s.name}>Name</span>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorMessage_name}
              />
            </label>
          </div>
          <div className={s.number_container}>
            <label className={s.label}>
              <span className={s.number}>Number</span>
              <Field
                className={s.input}
                type="text" // Зміна типу на text, якщо потрібно приймати числові значення
                name="number"
                placeholder="Your Number"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={s.errorMessage_number}
              />
            </label>
          </div>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
