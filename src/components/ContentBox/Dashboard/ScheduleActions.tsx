import { Image } from "antd";
import timetable from "../../../assets/timetable.jpg";

export const ScheduleActions = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image height={600} src={timetable} />
    </div>
  );
};
