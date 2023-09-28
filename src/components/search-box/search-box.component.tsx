import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


const SearchBox = ({ onChangeHandler, className, placeholder }: SearchBoxProps) => {
  return (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
    ></input>
  );
};

export default SearchBox;
