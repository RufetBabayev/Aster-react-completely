import { FaAngleDown } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";

import { Dropdown, Menu, Space } from "antd";
import { removeStorage } from "../../../storage/storage";

const items = [
  {
    key: "profile",
    label: "Hesab",
    icon: <FiUser />,
  },
  {
    key: "Logout",
    label: "Çıxış et",
    icon: <FiLogOut />,
  },
];

const handleClick = (i) => {
  if (i.key == "Logout") {
    removeStorage("user");
    removeStorage("token");
    location.reload();
  }
};

const DropdownMenu = ({ children, helperBlock }) => (
  <Dropdown
    className="cursor-pointer !right-[20px] "
    overlay={
      <Menu className="darkMode">
        {helperBlock}
        {items.map((menu, index) => (
          <Menu.Item onClick={() => handleClick(menu)} key={index}>
            <button className="flex darkMode items-center space-x-[10px] text-[16px]">
              <span>{menu.icon}</span>
              <span> {menu.label}</span>
            </button>
          </Menu.Item>
        ))}
      </Menu>
    }
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {children}
        <FaAngleDown />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
