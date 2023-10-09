import { Image } from "antd";
import image from "../../../assets/livealert.jpg";

export const LiveAlerts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image height={600} src={image} />
    </div>
  );
};
