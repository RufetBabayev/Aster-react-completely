import { Skeleton, Space } from "antd";

function NewsSkleton({ image = true }) {
  return (
    <div className="mb-[15px]">
      <div className="flex space-x-2">
        <Skeleton active paragraph={{ rows: 3, width: [210, 200] }} />
        {image && <Skeleton.Image active />}
      </div>
      <div className="mt-[10px]">
        <Space className="flex justify-between">
          <Skeleton.Input active size="small" />
          {image && <Skeleton.Input active size="small" />}
        </Space>
      </div>
    </div>
  );
}

export default NewsSkleton;
