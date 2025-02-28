import { useState } from "react";
import { Button } from "../button";
import { LocalIcon } from "src/assets/local-icon";
import { Input, Select, SelectTransparent, SelectSearch } from "../input";

type FilterBoxProps = {
  selected: string;
  setSelected: (value: string) => void;
};

export const FilterBox = ({ selected, setSelected }: FilterBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full rounded-[6px] bg-white px-4 sm:px-6">
      {/* Header */}
      <div className="flex z-[11] justify-between items-center pt-[10px]">
        <SelectTransparent selected={selected} setSelected={setSelected} />
        <Button variant="transparent" onClick={() => setIsOpen(!isOpen)}>
          <LocalIcon iconName="filter_icon" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Dropdown container */}
      <div
        className={`grid z-[10] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[15px] gap-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"
        }`}
      >
        <SelectSearch
          options={["Free shipping", "Standard shipping", "Express shipping"]}
          placeholder="Seller"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          options={["Free shipping", "Standard shipping", "Express shipping"]}
          placeholder="Shipping Cost"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          options={["New", "Used", "Refurbished"]}
          placeholder="Condition"
          selected={selected}
          setSelected={setSelected}
        />

        {/* Price filter - responsive layout */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Input placeholder="Min price" containerClass="w-full sm:w-[120px] h-[36.5px]" />
          <Input placeholder="Max price" containerClass="w-full sm:w-[120px] h-[36.5px]" />
          <Button className="h-[36.5px] w-full sm:w-auto">Fil   </Button>
        </div>
      </div>
    </div>
  );
};
