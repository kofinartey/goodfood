
export function Search() {
  return (
    <div className="w-full relative">
      {/* <img src={SearchIcon} className="absolute top-3 right-4" /> */}
      <input
        placeholder="Search"
        className="bg-[#F6F6FB] placeholder:text-sm py-1 px-4 rounded-l w-full focus-within:outline-[#5A6ACF]"
      />
    </div>
  );
}
