import { ChangeEventHandler } from "react";
import { FilterWrapper } from "./styles/SearchFilter.styles";

type Props = {
  selectChangeHandler: ChangeEventHandler<HTMLSelectElement>;
};

const SearchFilter = (props: Props) => {
  return (
    <FilterWrapper>
      <select
        onChange={props.selectChangeHandler}
        placeholder="Select option"
        className="select-input"
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </FilterWrapper>
  );
};

export default SearchFilter;
