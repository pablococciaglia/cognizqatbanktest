import { Image } from "antd";
import graph from "../../../assets/graph.jpg";

export const Overview = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image height={600} src={graph} />
    </div>
  );
};
