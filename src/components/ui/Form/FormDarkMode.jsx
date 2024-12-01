import { Form, Switch } from "antd";
import { useDarkMode } from "../../../context/DarkMode";

function FormDarkMode() {
  const { handleChange } = useDarkMode();

  return (
    <Form.Item className="mb-0 !mr-1" valuePropName="checked">
      <Switch
        onChange={handleChange}
        className="w-[75px] !outline font-bold !outline-1 !outline-skyBlue"
      />
    </Form.Item>
  );
}

export default FormDarkMode;
