import { PieChartOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Counter } from "./Counter";
import { Users } from "./Users";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Counter", "1", <PieChartOutlined />),
  getItem("List", "2", <OrderedListOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
            }}
          >
            <Counter />
          </div>
          <div
            style={{
              padding: 24,
            }}
          >
            <Users />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          German ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
