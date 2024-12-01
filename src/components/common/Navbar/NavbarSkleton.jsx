import { Skeleton, Space } from "antd";

const NavbarSkleton = () => (
  <Space>
    <Skeleton.Input
      style={{
        height: "20px",
        marginBottom: "20px",
        marginLeft: "12px",
        marginTop: "10px",
        width: "220px",
      }}
      active
      size="large"
    />
  </Space>
);

export default NavbarSkleton;
