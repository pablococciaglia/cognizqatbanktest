import { FC } from "react";
import { CSSProperties } from "react";

import { Dropdown, MenuProps, Space, Typography } from "antd";

import { CaretDownFilled } from "@ant-design/icons";

const { Title } = Typography;

interface DropdownButtonProps {
  menuProps: MenuProps;
  textButton: string | JSX.Element;
  bold?: boolean;
  large?: boolean;
}

const spaceStyle: CSSProperties = {
  width: "100%",
  paddingRight: 10,
  paddingLeft: 10,
  display: "flex",
  justifyContent: "space-between",
};

export const DropdownButton: FC<DropdownButtonProps> = ({
  bold,
  large,
  menuProps,
  textButton,
}) => {
  return (
    <Dropdown menu={menuProps}>
      <Space style={large ? spaceStyle : {}}>
        <Title
          level={5}
          style={{ margin: 0, fontWeight: bold ? 700 : undefined }}
        >
          {textButton}
        </Title>
        <CaretDownFilled style={{ color: "#bebebe" }} />
      </Space>
    </Dropdown>
  );
};
