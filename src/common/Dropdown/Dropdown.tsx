import React, { useState, FC, useEffect } from "react";
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";
import Item from "./component/Item";

interface DropdownProps {
  valueSelect: string;
  changeRegion: (v: string) => void;
  placeholder: string;
  isClearValue?: boolean;
  iconLeft?: JSX.Element;
  items: Array<[string, string, JSX.Element?]>;
}

const Dropdown: FC<DropdownProps> = ({
  valueSelect,
  changeRegion,
  placeholder,
  isClearValue,
  iconLeft,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerSetOpen = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".dropdown__icon-right");
    const chevron = items[items.length - 1];
    const handler = () => setIsOpen(false);
    if (isOpen) {
      chevron.classList.add("rotate");
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    } else {
      chevron.classList.remove("rotate");
    }
  }, [isOpen]);

  const clearValue = (e: React.MouseEvent<SVGElement, MouseEvent>): void => {
    e.stopPropagation();
    const close = document.querySelectorAll(".dropdown__icon-close")[0];
    if (Boolean(valueSelect)) {
      close.classList.add("rotate");
      changeRegion("");
    }
  };

  return (
    <div
      className={`dropdown ${!!iconLeft ? "dropdown__p-left" : ""}`}
      onClick={(e) => handlerSetOpen(e)}
    >
      {iconLeft && <div className="dropdown__icon-left">{iconLeft}</div>}
      <span>{valueSelect || placeholder}</span>
      <div className="dropdown__icon-right-item">
        {isClearValue && (
          <>
            <IoCloseOutline
              className="dropdown__icon-close"
              size="18px"
              onClick={(e) => clearValue(e)}
            />
            <span className="vertical-line"></span>
          </>
        )}
        <IoChevronDownOutline className="dropdown__icon-right" size="18px" />
      </div>
      {isOpen && (
        <ul className="down-list">
          {items.map(([value, label, icon]) => (
            <Item
              key={value}
              value={value}
              label={label}
              icon={icon}
              handlerValue={changeRegion}
              selected={valueSelect === value}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
