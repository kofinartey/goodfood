import { useCallback, useEffect, useState } from "react";

type Result = {
  data: { searchValue: string };
  actions: {
    handleSearchInput: (val: string) => void;
    handleSearchClick: () => void;
  };
};

export function useSearch(): Result {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("seraching", searchValue);
  }, [searchValue]);

  const handleSearchInput = useCallback((val: string) => {
    setSearchValue(val);
  }, []);

  const handleSearchClick = useCallback(() => {
    console.log("searching...");
  }, []);

  return {
    data: {
      searchValue,
    },
    actions: {
      handleSearchClick,
      handleSearchInput,
    },
  };
}
