import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Layout, Space } from "antd";
import { CSSProperties } from "react";

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div>
      <header className="App-header">
        <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Layout>
              <Header style={headerStyle}>cabecera???</Header>
              <Content style={contentStyle}>Content====</Content>
              <Footer style={footerStyle}>Footer</Footer>
            </Layout>
          </Layout>
        </Space>
        <Counter />
      </header>
    </div>
  );
}

export default App;

const headerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
