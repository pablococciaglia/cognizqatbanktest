import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { LinkTo } from "../../../constants/constants";

const { Text, Title } = Typography;
interface BlogEntryProps {
  body: string;
  date: number;
  photoId: number;
  title: string;
  id: number;
  editionMode?: boolean;
}
export const BlogEntry: FC<BlogEntryProps> = ({
  body,
  date,
  photoId,
  title,
  id,
  editionMode,
}) => {
  const navigate = useNavigate();
  const goToThePost = () => {
    navigate(`/${LinkTo.POST}/${id}`);
  };

  const dateOfThePost = new Date(date);
  const urlImage = editionMode
    ? `../assets/blog-${photoId}.jpg`
    : `./assets/blog-${photoId}.jpg`;
  return (
    <div
      style={{
        display: "flex",
        marginBottom: 15,
        cursor: "pointer",
        width: "100%",
      }}
      onClick={goToThePost}
    >
      <img
        alt="random miniature"
        src={urlImage}
        style={{ height: 150, width: 230 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 20,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          <Title
            style={{
              margin: 0,
              maxWidth: "30vw",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            level={3}
          >
            {title}
          </Title>
          <Text
            style={{
              alignSelf: "flex-end",
              marginLeft: "auto",
            }}
          >
            {dateOfThePost.toDateString().toUpperCase()}
          </Text>
        </div>
        <Text>{body}</Text>
        {!editionMode && (
          <Text
            style={{ color: "#397bf6", fontWeight: 600, marginTop: "auto" }}
          >
            Read more
          </Text>
        )}
      </div>
    </div>
  );
};
