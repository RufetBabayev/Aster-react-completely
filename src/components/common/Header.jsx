import { FiUser } from "react-icons/fi";
import DropdownMenu from "../ui/dropdown";
import menus from "../../routers/menus";
import { NavLink } from "react-router-dom";
import FormSearch from "../ui/Form/FormSearch";
import { getStorage } from "../../storage/storage";
import ModalForLogin from "../ui/modal";
import ToggleMenu from "./Navbar/ToggleMenu";
import FormDarkMode from "../ui/Form/FormDarkMode";

function Header() {
  const token = getStorage("token");
  const user = getStorage("user");
  return (
    <div
      className="lg:flex lg:justify-between pt-[23px] pb-[42px] top-[-8px] fixed bg-[#F4F9F8]
   lg:w-[1024px] w-full z-50 left-0 xl:left-[301px] md:left-[240px] md:w-[1024px] darkMode"
    >
      <div className="flex space-x-2 items-center mb-4 lg:mb-0 justify-between w-full ">
        <ToggleMenu />
        <FormSearch />
        <FormDarkMode />
      </div>

      <div className="flex items-center sm:justify-center md:justify-normal ml-2  md:ml-16 lg:space-x-5  lg:mt-0 mt-1 lg:justify-between lg:mx-3 justify-between mr-1 ">
        <div className="order-1 lg:text-[16px] md:ml-2 text-sm lg:ml-10 ">
          {token ? (
            <DropdownMenu
              helperBlock={
                <div className="flex items-center space-x-2 border-b ">
                  <figure className="size-[40px] rounded-full p-1">
                    <img
                      className="img-cover overflow-hidden rounded-full"
                      src={user?.photo}
                      alt=""
                    />
                  </figure>
                  <div className="font-medium pr-2">
                    {user?.name + " " + user?.surname}
                  </div>
                </div>
              }
            >
              <span className="flex items-center  ml-2">
                <span>
                  <FiUser className="lg:text-[24px] mr-1 text-[16px]" />
                </span>
                <span className="whitespace-nowrap mt-1">Profilim</span>
              </span>
            </DropdownMenu>
          ) : (
            <ModalForLogin />
          )}
        </div>
        <div className=" menu-link ">
          {menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className="flex items-center lg:text-[16px] md:text-[16px] text-[15px] "
            >
              <span>{menu.icon}</span>
              <span className="flex items-center px-1 whitespace-nowrap">
                {menu.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
