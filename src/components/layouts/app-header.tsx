import { useState, useEffect, useRef } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { Input, Button, SelectCountry, Link } from "../ui";
import { useNavigate, useSearchParams } from "react-router-dom";

export const AppHeader = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (window.location.pathname.includes("result")) {
      if (inputRef.current) inputRef.current.value = query;
    } else {
      if (inputRef.current) inputRef.current.value = "";
    }
  }, [window.location.pathname]);

  const search = () => {
    if (inputRef.current) {
      const query = inputRef.current?.value.trim();
      if (query) navigate(`result?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="flex flex-col px-4 pb-4 bg-white shadow-md">
      {/* Header top: Logo & Icons */}
      <div className="flex justify-between items-center h-[60px]">
        <Link to="/" className="flex items-center">
          <LocalIcon iconName="logo_icon" width={40} height={40} />
          <span className="font-bold text-lg ml-2">WWEBSITEE</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Toggle search bar (only visible on mobile) */}
          <button
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="sm:hidden"
          >
            <LocalIcon iconName="search_icon" />
          </button>

          {/* Country selector */}
          <SelectCountry />
        </div>
      </div>

      {/* Search bar: Always visible on desktop, toggle on mobile */}
      <div
        className={`flex items-center justify-stretch gap-4 overflow-hidden transition-all duration-300 ${
          isSearchVisible ? "max-h-[60px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 sm:max-h-full sm:opacity-100 sm:translate-y-0"
        }`}
      >
        <Input
          className="w-full sm:flex-1"
          containerClass="w-full sm:flex-1 h-[50px]"
          placeholder="What are you looking for?"
          ref={inputRef}
        />
        <Button className="h-[50px] w-[120px]" onClick={search}>
          Search
        </Button>
      </div>
    </header>
  );
};
