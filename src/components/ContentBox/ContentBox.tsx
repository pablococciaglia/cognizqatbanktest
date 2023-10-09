import { CSSProperties, FC } from "react";

import { Layout } from "antd";

import { ContentRouter } from "../../router/ContentRouter";
import { IconBox } from "./IconBox";
import { EditionIcons } from "./Blogs/EditionIcons";
import { useLocation } from "react-router-dom";
import { LinkTo } from "../../constants/constants";
import { ModalBlog } from "./Modal/ModalBlog";
import { useAppSelector } from "../../hooks/hooks";
import { selectModalState } from "../../selectors/seletors";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  padding: 40,
  backgroundColor: "#f0f3f8",
  boxShadow: "inset 5px 3px 15px 10px #e1e2e7",
};

export const ContentBox: FC = () => {
  const modalState = useAppSelector(selectModalState);

  const { pathname } = useLocation();
  const path = pathname.split("/");

  return (
    <Content style={contentStyle}>
      {modalState && <ModalBlog />}
      {path[1] === LinkTo.POST ? <EditionIcons /> : <IconBox />}
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 15,
          marginTop: 20,
          marginBottom: 20,
          padding: 20,
        }}
      >
        <ContentRouter />
      </div>
    </Content>
  );
};
