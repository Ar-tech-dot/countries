import React, { FC } from "react";

interface ItemProps {
  value: string;
  label: string;
  icon?: JSX.Element;
  handlerValue: (v: string) => void;
  selected?: boolean;
}
const Item: FC<ItemProps> = ({
  value,
  label,
  icon,
  handlerValue,
  selected,
}) => {
  const handlerSetValue = (value: string): void => {
    handlerValue(value);
    const close = document.querySelectorAll(".dropdown__icon-close");
    if (close) {
      close[0].classList.remove("rotate");
    }
  };
  return (
    <li
      className={`down-list__item ${selected ? "selected" : ""}`}
      onClick={() => handlerSetValue(value)}
    >
      <div>{label}</div>
      {icon && <div className="down-list__item-icon">{icon}</div>}
    </li>
  );
};

export default Item;
