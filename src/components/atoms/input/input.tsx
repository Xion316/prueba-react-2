import { FC, KeyboardEvent } from "react";
import "./input.scss";

interface InputProps {
  value: string;
  name: string;
  onChange: (value:string) => void;
  placeholder: string;
  onKeyDown:(event: React.KeyboardEvent<HTMLDivElement>)=>void;
}

const Input: FC<InputProps> = ({ name, onChange, placeholder, value, onKeyDown }) => {
  return <input onKeyDown={onKeyDown} value={value} name={name} className="input" onChange={e=>onChange(e.target.value)} placeholder={placeholder} />;
};

export default Input;
