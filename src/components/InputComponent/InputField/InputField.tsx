import { ChangeEventHandler } from "react";
import SearchFilter from "../../SearchFilter/SearchFilter";
import { InputSubmit, InputWrapper } from "./styles/InputField.styles";

interface InputProps {
  inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  selectChangeHandler: ChangeEventHandler<HTMLSelectElement>;
}

const InputField = (props: InputProps) => {
  return (
    <InputWrapper>
      <div className="input-content">
        <input
          className="input-search"
          placeholder=" Search for a country by name..."
          onChange={props.inputChangeHandler}
        />
        <InputSubmit>Search</InputSubmit>
      </div>

      <SearchFilter selectChangeHandler={props.selectChangeHandler} />
    </InputWrapper>
  );
};

export default InputField;
