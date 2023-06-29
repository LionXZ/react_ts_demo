import { Table } from "antd";
import { useState } from "react";
const dataSource = [
    {
        key: "1",
        name: "Parent 1",
        children: [
            {
                key: "1-1",
                name: "Child 1",
                children: [
                    { key: "1-1-1", name: "Grandchild 1" },
                    { key: "1-1-2", name: "Grandchild 2" },
                ],
            },
            { key: "1-2", name: "Child 2" },
        ],
    },
    {
        key: "2",
        name: "Parent 2",
        children: [
            { key: "2-1", name: "Child 1" },
            { key: "2-2", name: "Child 2" },
        ],
    },
];
const columns = [{ title: "Name", dataIndex: "name", key: "name" }];
export default  App = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const handleExpand = (expanded, record) => {
    if (expanded) {
      const keys = getExpandedKeys(record);
      setExpandedRowKeys([...expandedRowKeys, ...keys]);
    } else {
      setExpandedRowKeys(expandedRowKeys.filter((key) => key !== record.key));
    }
  };
  const getExpandedKeys = (record) => {
    let keys = [];
    if (record.children) {
      keys.push(record.key);
      record.children.forEach((child) => {
        keys = [...keys, ...getExpandedKeys(child)];
      });
    }
    return keys;
  };
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      expandedRowKeys={expandedRowKeys}
      onExpand={handleExpand}
    />
  );
};
