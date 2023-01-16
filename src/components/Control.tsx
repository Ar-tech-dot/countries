import React, { useState, useEffect, FC } from "react";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown/Dropdown";
import { IoEarthSharp } from "react-icons/io5";

const world = <IoEarthSharp />;

const dropdown: Array<[string, string, JSX.Element?]> = [
  ["Africa", "Africa", world],
  ["America", "America", world],
  ["Asia", "Asia", world],
  ["Europe", "Europe", world],
  ["Oceania", "Oceania", world],
];

interface ControlProps {
  onSearch: (v: string, k: string) => void;
  error?: string;
}

const Control: FC<ControlProps> = ({ onSearch, error }) => {
  const [search, setSerch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  return (
    <div className="countries-item__control">
      <Input
        value={search}
        changeSerch={setSerch}
        customPlaceholder="Search for a country..."
        type="search"
        error={error}
      />
      <Dropdown
        valueSelect={region}
        changeRegion={setRegion}
        placeholder="Filter by Region"
        isClearValue
        iconLeft={world}
        items={dropdown}
      />
    </div>
  );
};

export default Control;
