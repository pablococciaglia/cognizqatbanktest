import { FC, Fragment } from "react";

import { Divider, MenuProps } from "antd";

import { WarningOutlined } from "@ant-design/icons";

import { DropdownButton } from "./DropdownButton";

export const DropdownButtonsSection: FC = () => {
  const items: MenuProps["items"] = [
    {
      label: "Under construction",
      key: "1",
      icon: <WarningOutlined />,
    },
  ];

  const menuProps = {
    items,
  };

  const textsForButtons = ["DOCUMENTATION", "REPORTS", "NEED HELP?"];
  return (
    <div style={{ width: "100%", marginTop: 10 }}>
      {textsForButtons.map((textButton) => (
        <Fragment key={`DropdownButtonsSection-${textButton}`}>
          <DropdownButton
            menuProps={menuProps}
            textButton={textButton}
            bold
            large
          />
          <Divider style={{ marginTop: 5 }} />
        </Fragment>
      ))}
    </div>
  );
};
