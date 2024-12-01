import { GiWorld } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiAmazongames } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdNature } from "react-icons/md";
import { GiTeamUpgrade } from "react-icons/gi";
import { useFetchCategoryList } from "../../../hooks/useFetch";
import { useEffect } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { findParam } from "../../../utils/helpers";
import { saveStorage } from "../../../storage/storage";
import NavbarSkleton from "./NavbarSkleton";
import Logo from "../Logo";

function Icon({ slug }) {
  const icons = {
    world: <GiWorld />,
    politics: <FaFileContract />,
    sports: <MdOutlineSportsBasketball />,
    technology: <FaRobot />,
    economy: <GiTakeMyMoney />,
    entertainment: <SiAmazongames />,
    health: <MdHealthAndSafety />,
    science: <MdOutlineScience />,
    culture: <GiTeamUpgrade />,
    environment: <MdNature />,
  };
  return icons[slug];
}

function NavbarComponent({ classForResponsive, setOpen }) {
  const [categories, fetchCategories, loading] = useFetchCategoryList();

  saveStorage("categories", categories);

  const params = findParam();

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div
        className={`pr-[17px] ${classForResponsive} darkMode sticky inset-0 `}
      >
        <div className="hidden lg:inline-block md:inline-block md:mt-5 lg:mt-0">
          <Logo />
        </div>
        {categories.map((category, index) => (
          <div key={index}>
            {loading ? (
              <NavbarSkleton />
            ) : (
              <NavLink
                onClick={setOpen ? () => setOpen(false) : ""}
                to={"/search/" + category.slug}
                className={classNames({
                  "flex items-center h-[50px] dark:text-white rounded-tr-full relative rounded-br-full pl-[33px] text-amberBlack space-x-[22px]": true,
                  "bg-[#e0f0f8] text-skyBlue font-bold after:content-[''] after:absolute after:left-[15px] after:size-2 dark:bg-sky-900 after:rounded-full after:bg-skyBlue":
                    params === category.slug,
                })}
              >
                <span className="text-[24px]">
                  <Icon slug={category.slug} />
                </span>
                <span>{category.name}</span>
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default NavbarComponent;
