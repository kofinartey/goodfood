import { SearchIcon } from "../../../../../../assets/icons";
import { useSearch } from "./hooks/useSearch";

export function Search() {
  const {
    actions: { handleSearchClick, handleSearchInput },
  } = useSearch();

  return (
    <div className="w-full relative max-w-[625px]">
      <input
        placeholder="Search"
        className="peer bg-[#F6F6FB] placeholder:text-sm py-1 pl-4 pr-10 rounded-l w-full focus-within:outline-[#5A6ACF]"
        onChange={(event) => {
          handleSearchInput(event?.target.value);
        }}
      />
      <button
        className="absolute h-full w-10 right-0 "
        onClick={handleSearchClick}
        aria-label="Search Button"
      >
        <div className=" w-full h-full  flex justify-center items-center hover:bg-[#5A6ACF20]">
          <SearchIcon />
        </div>
      </button>
    </div>
  );
}
