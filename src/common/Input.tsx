import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  changeSerch: (v: string) => void;
  className?: string;
  error?: string;
  customPlaceholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  value,
  changeSerch,
  className,
  error,
  customPlaceholder,
  type,
  ...props
}) => (
  <div className="input-field">
    <input
      onChange={(e) => changeSerch(e.target.value)}
      value={value}
      className={`input-field__input ${error ? "error" : ""}`}
      type={type}
      {...props}
      required
    />
    <label className={`input-field__placeholder ${error ? "error" : ""}`}>
      {customPlaceholder}
    </label>
    {error && <p className="input-field__error-message error">{error}</p>}
  </div>
);

export default Input;
