import { useCallback, useState } from "react";

export function useUserAvatar() {
  const userData = {
    name: "Delicious Burger",
    avatar: "",
  };

  const menuOptions = ["Profile", "Settings", "Logout"];

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const handleUserClick = useCallback(() => {
    setIsOptionsOpen(!isOptionsOpen);
  }, [isOptionsOpen]);

  return {
    data: {
      isOptionsOpen,
      userData,
      menuOptions,
    },
    actions: {
      handleUserClick,
    },
  };
}
