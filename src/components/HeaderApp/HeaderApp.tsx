import { FC, CSSProperties } from "react";
import { Avatar, Layout, MenuProps, Input, Space, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectUserData } from "../../selectors/seletors";
import { logOut } from "../../slices/dataUserSlice";
import { LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import { DropdownButton } from "../Sidebar/DropdownButton";
import { openModal } from "../../slices/blogsSlice";

const { Header } = Layout;

const headerStyle: CSSProperties = {
  alignItems: "center",
  backgroundColor: "#fff",
  display: "flex",
  height: 64,
  justifyContent: "flex-end",
  textAlign: "center",
};

export const HeaderApp: FC = () => {
  const { id } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

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
  const openModalForEdit = () => {
    dispatch(openModal());
  };
  return (
    <Header style={headerStyle}>
      <Space.Compact size="large" style={{ marginRight: "auto" }}>
        <Input addonBefore={<SearchOutlined />} placeholder="large size" />
      </Space.Compact>
      <Button
        onClick={openModalForEdit}
        type="text"
        size={"large"}
        style={{ fontWeight: 700 }}
      >
        + Add
      </Button>
      <DropdownButton
        menuProps={menuProps}
        textButton={<Avatar size="large" src={`./assets/avatar-${id}.png`} />}
      />
    </Header>
  );
};
