import { useCallback, useState } from "react";
import { ChevronDownIcon } from "../../../../../../assets/icons/svgIcons/ChevronDownIcon";
import { Link } from "react-router";

// TODO:
// - Options close upon clicking outside it.

export function UserAvatar() {
  const userData = {
    name: "Delicious Burger",
    avatar: "",
  };

  const menuOptions = ["Profile", "Settings", "Logout"];

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const handleUserClick = useCallback(() => {
    setIsOptionsOpen(!isOptionsOpen);
  }, [isOptionsOpen]);

  return (
    <div className="relative">
      <button
        className="flex items-center text-[#1F384C] "
        onClick={handleUserClick}
      >
        <div className="w-8 h-8 bg-[#FFE6CC] rounded-full flex justify-center items-center mr-3">
          <p>🍔</p>
        </div>
        <p className="hidden mr-3 lg:inline-block whitespace-nowrap">{userData.name}</p>
        <div
          className={`${
            isOptionsOpen ? "rotate-180" : ""
          } transition-all hidden lg:inline-block `}
        >
          <ChevronDownIcon />
        </div>
      </button>

      {isOptionsOpen ? (
        <div className="absolute bg-[#F1F2F7] w-[200px] mt-4 rounded-lg right-0">
          {menuOptions.map((item, index) => (
            <div key={item} className="px-8">
              <Link
                to="/"
                className="w-full py-4 inline-block hover:bg-[#707FDD20]"
              >
                {item}
              </Link>
              {index !== menuOptions.length - 1 ? (
                <hr className="text-[#C8CBD9]" />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
