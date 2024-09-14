import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox_container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
