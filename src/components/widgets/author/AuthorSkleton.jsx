import { Skeleton } from "antd";

const AuthorSkleton = () => {
  return (
    <>
      <Skeleton.Image active />
      <Skeleton
        className="mt-1 "
        active
        paragraph={{ rows: 1, width: [100, 100] }}
      />
    </>
  );
};

export default AuthorSkleton;
