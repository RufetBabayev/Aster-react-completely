import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Popover } from "antd";
const content = (
  <div className="flex space-x-2 text-[18px] cursor-pointer">
    <FaWhatsapp className="text-[#24CC63] hover:text-[#2AB03D]" />
    <FaTelegramPlane className="text-[#32A4DE] hover:text-[#318BE6]" />
    <FaFacebook className="text-[#1873EB] hover:text-[#0862F7]" />
  </div>
);
const Popup = ({ children }) => (
  <Popover placement="topRight" content={content}>
    <span>{children}</span>
  </Popover>
);
export default Popup;
