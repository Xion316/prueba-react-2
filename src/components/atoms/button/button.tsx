import React from "react";
import { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "large";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, size = "small", onClick }) => {
  return (
    <button onClick={onClick} className={`button button--${size}`}>
      <label className="button__label button__label--red">{children}</label>
    </button>
  );
};

export default Button;
