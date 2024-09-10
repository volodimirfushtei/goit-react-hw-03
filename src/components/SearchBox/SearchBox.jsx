import s from "./SearchBox.module.css";

const SearchBox = () => {
  return <input type="text" className={s.searchBox} placeholder="Search..." />;
};
export default SearchBox;
