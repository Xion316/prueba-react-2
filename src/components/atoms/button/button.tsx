import React from "react";
import { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: "add" | "delete";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, buttonType="add", onClick }) => {
  return (
    <button onClick={onClick} className={`button button--${buttonType}`}>
      <label className="button__label button__label--red">{children}</label>
    </button>
  );
};

export default Button;
