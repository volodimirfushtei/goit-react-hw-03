import s from "./SearchBox.module.css";

import { Formik, Field } from "formik";

const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { resetForm }) => {
          // Виклик функції, що передана як пропс
          onSearch(values.search);
          resetForm(); // Очищення поля після відправки
        }}
      >
        <Field
          type="text"
          name="search"
          className={s.searchBox}
          placeholder="Search..."
        />
      </Formik>
    </div>
  );
};

export default SearchBox;
