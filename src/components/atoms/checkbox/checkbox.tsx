import { FC } from "react";
import "./checkbox.scss";

interface CheckboxProps {
  title: string;
  isChecked: boolean;
  handleCheck: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  title,
  isChecked = false,
  handleCheck,
}) => {
  return (
    <div className="checkbox">
      <input
        name={title}
        onChange={handleCheck}
        checked={isChecked}
        type="checkbox"
      />
      <label
        className={`checkbox__label ${
          isChecked ? "checkbox__label--checked" : ""
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
