import { notification } from "antd";
import { createContext, useContext } from "react";

const NotifyContext = createContext();

const NotifyProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Təşəkkürlər",
      description: "Müraciətiniz uğurla qeydə alındı",
    });
  };
  const data = {
    contextHolder,
    openNotificationWithIcon,
  };

  return (
    <NotifyContext.Provider value={data}>{children}</NotifyContext.Provider>
  );
};

export const useNotify = () => useContext(NotifyContext);

export default NotifyProvider;
