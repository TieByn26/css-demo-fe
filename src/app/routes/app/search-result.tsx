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
      <div className="grid shadow max-[420px]:gap-y-7 max-[420px]:grid-cols-1 max-[640px]:grid-cols-2 max-[640px]:gap-[8px] max-[640px]:gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10">
        {test.map((t, index) => (
          <CardProduct
            key={index}
            product={t}
          />
        ))}
      </div>
    </>
  );
};
