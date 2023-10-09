import { CSSProperties, FC } from "react";

import { Typography } from "antd";

const { Title } = Typography;

interface SidebarSectionsProps {
  children: JSX.Element[];
  title: string;
}

const selectionContainerStyle: CSSProperties = {
  marginTop: 20,
  paddingBottom: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
};

export const SidebarSections: FC<SidebarSectionsProps> = ({
  title,
  children,
}) => {
  return (
    <div style={selectionContainerStyle}>
      <Title level={5} style={{ paddingLeft: 20, margin: 0, fontWeight: 700 }}>
        {title}
      </Title>
      {children}
    </div>
  );
};
