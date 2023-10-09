import { CSSProperties, FC } from "react";

import { Avatar, Button, Layout, MenuProps, Typography } from "antd";

import { ContainerOutlined, LogoutOutlined } from "@ant-design/icons";

import QDBlogo from "../../assets/qdb-logo.svg";
import { DropdownButton } from "./DropdownButton";
import { SidebarButtons } from "./SidebarButtons";
import { logOut } from "../../slices/dataUserSlice";
import { SidebarSections } from "./SidebarSections";
import { LinkTo, MenuButton } from "../../constants/constants";
import { selectUserData } from "../../selectors/seletors";
import { DropdownButtonsSection } from "./DropdownButtonsSection";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const siderStyle: CSSProperties = {
  textAlign: "center",
  backgroundColor: "#FFF",
  height: "100%",
};

const conteinerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const { Sider } = Layout;
const { Text } = Typography;

export const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const { name, id } = useAppSelector(selectUserData);

  const items: MenuProps["items"] = [
    {
      label: "Log out",
      key: "1",
      icon: <LogoutOutlined />,
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    dispatch(logOut());
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Sider width={300} style={siderStyle}>
      <div
        style={{
          backgroundColor: "#397bf6",
          height: "65px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <img height={110} src={QDBlogo} className="App-logo" alt="logo" />
      </div>
      <div style={conteinerStyle}>
        <Avatar
          style={{ marginTop: "20px" }}
          size={100}
          src={`./assets/avatar-${id}.png`}
        />
        <Text type="secondary">Hello</Text>
        <DropdownButton menuProps={menuProps} textButton={name} />
        <Button type="primary" icon={<ContainerOutlined />} size={"large"}>
          Live matrics
        </Button>
        <SidebarSections title="Dashboards">
          <SidebarButtons
            buttonText={MenuButton.OVERWIEW}
            linkTo={LinkTo.OVERWIEW}
          />
          <SidebarButtons
            buttonText={MenuButton.CALENDAR}
            linkTo={LinkTo.CALENDAR}
          />
          <SidebarButtons
            buttonText={MenuButton.SCHEDULE_ACTIONS}
            linkTo={LinkTo.SCHEDULE_ACTIONS}
          />
          <SidebarButtons
            buttonText={MenuButton.LIVE_ALERTS}
            linkTo={LinkTo.LIVE_ALERTS}
          />
        </SidebarSections>
        <SidebarSections title="Blogs">
          <SidebarButtons buttonText={MenuButton.ALL} linkTo={LinkTo.BLOGS} />
          <SidebarButtons
            buttonText={MenuButton.LATEST}
            linkTo={LinkTo.BLOGS}
          />
          <SidebarButtons
            buttonText={MenuButton.ARCHIVED}
            linkTo={LinkTo.BLOGS}
          />
        </SidebarSections>
        <DropdownButtonsSection />
      </div>
    </Sider>
  );
};
