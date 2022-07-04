import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, className, placeholder }) => {
  return (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
