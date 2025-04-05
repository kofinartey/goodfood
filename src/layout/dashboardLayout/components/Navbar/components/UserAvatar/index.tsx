import { ChevronDownIcon } from "../../../../../../assets/icons/svgIcons/ChevronDownIcon";
import { Link } from "react-router";
import { useUserAvatar } from "./hooks/useUserAvatar";

export function UserAvatar() {
  const {
    data: { isOptionsOpen, menuOptions, userData },
    actions: { handleUserClick },
  } = useUserAvatar();

  return (
    <div className="">
      <button
        className="flex items-center text-[#1F384C] "
        onClick={handleUserClick}
      >
        <div className="w-8 h-8 bg-[#FFE6CC] rounded-full flex justify-center items-center mr-3">
          <p>🍔</p>
        </div>
        <p className="hidden mr-3 lg:inline-block whitespace-nowrap">
          {userData.name}
        </p>
        <div
          className={`${
            isOptionsOpen ? "rotate-180" : ""
          } transition-all hidden lg:inline-block `}
        >
          <ChevronDownIcon />
        </div>
      </button>

      {/* TODO: Move into separate component */}
      {isOptionsOpen ? (
        <>
          <div className="absolute z-10 bg-[#F1F2F7] w-[200px] md:w-[270px] mt-4 rounded-lg right-0">
            {menuOptions.map((item, index) => (
              <div key={item} className="px-8">
                <Link
                  to="/"
                  className="w-full py-4 inline-block hover:bg-[#707FDD20]"
                  onClick={handleUserClick}
                >
                  {item}
                </Link>
                {index !== menuOptions.length - 1 ? (
                  <hr className="text-[#C8CBD9]" />
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* Options overlay */}
      {isOptionsOpen ? (
        <div
          className="w-screen h-screen absolute left-0 top-0"
          onClick={handleUserClick}
        />
      ) : null}
    </div>
  );
}
