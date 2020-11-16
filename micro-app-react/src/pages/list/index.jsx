// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Card, Table, Avatar } from "antd";
// eslint-disable-next-line
import fetch from "isomorphic-fetch";

// const fetchVegetable = (page, pageSize) => {
//   return fetch("http://dev-api.jt-gmall.com/mall", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // graphql 的查询风格
//     body: JSON.stringify({
//       query: `{ vegetableList (page: ${page}, pageSize: ${pageSize}) { page, pageSize, total, items { _id, name, poster, price } } }`,
//     }),
//   }).then((res) => res.json());
// };

// const { Column } = Table;
// const List = () => {
//   // 设置列表信息
//   const [data, setData] = useState([]);
//   // 设置页码信息
//   const [page, setPage] = useState(1);
//   const [pageInfo, setPageInfo] = useState();

//   useEffect(() => {
//     console.log({ page });
//     (async () => {
//       const result = await fetchVegetable(page, 10);
//       const { vegetableList } = result.data;
//       setData(() => vegetableList.items);
//       setPageInfo(() => ({
//         current: vegetableList.page,
//         pageSize: vegetableList.pageSize,
//         total: vegetableList.total,
//         onChange: (page) => setPage(page),
//       }));
//     })();
//   }, [page]);

//   return (
//     <Card title="React 子应用列表页">
//       <Table rowKey="_id" dataSource={data} pagination={pageInfo}>
//         <Column dataIndex="poster" render={(text) => <Avatar src={text} />} />
//         <Column dataIndex="name" />
//         <Column dataIndex="price" render={(text) => <>￥ {text}</>} />
//       </Table>
//     </Card>
//   );
// };


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const List = () => {
  return(
    <Card title="React 子应用列表页">
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default List;
