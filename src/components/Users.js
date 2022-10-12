import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, selectorUsers } from "../features/users";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => selectorUsers(state));
  console.log(users);
  useEffect(() => {
    dispatch(actionCreators.list());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return (
    <Table
      dataSource={users.dataSource}
      columns={columns}
      loading={users.isLoading}
      rowKey={"id"}
      pagination={users.dataSource.length}
    />
  );
};
