import { CardProduct } from "src/components/ui";
import { FilterBox } from "src/components/ui/filter";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

let test: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

export const SearchResultRouter = () => {
  const [selected, setSelected] = useState("");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
      console.log(selected);
      console.log(query);
  }, [selected]);

  return (
    <>
      <FilterBox 
        selected={selected}
        setSelected={setSelected}
       />
      <div className="flex items-center justify-center flex-wrap gap-[3%] gap-y-6">
        {test.map((t, index) => (
            <CardProduct key={index}/>
        ))}
      </div>
    </>
  );
};
