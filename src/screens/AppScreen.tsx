import { FC } from "react";
import { Layout, Space } from "antd";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ContentBox } from "../components/ContentBox/ContentBox";
import { HeaderApp } from "../components/HeaderApp/HeaderApp";

export const AppScreen: FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <HeaderApp />
        <ContentBox />
      </Layout>
    </Layout>
  </Space>
);
