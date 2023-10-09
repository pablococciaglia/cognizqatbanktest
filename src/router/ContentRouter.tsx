import { Routes, Route } from "react-router-dom";
import { Blogs } from "../components/ContentBox/Blogs/Blogs";
import { LinkTo } from "../constants/constants";
import { Overview } from "../components/ContentBox/Dashboard/Overview";
import { Calendar } from "antd";
import { ScheduleActions } from "../components/ContentBox/Dashboard/ScheduleActions";
import { LiveAlerts } from "../components/ContentBox/Dashboard/LiveAlerts";
import { PostEdition } from "../components/ContentBox/Blogs/PostEdition";

export const ContentRouter = () => {
  return (
    <Routes>
      <Route path={LinkTo.OVERWIEW} element={<Overview />}></Route>
      <Route path={LinkTo.CALENDAR} element={<Calendar />}></Route>
      <Route
        path={LinkTo.SCHEDULE_ACTIONS}
        element={<ScheduleActions />}
      ></Route>
      <Route path={LinkTo.LIVE_ALERTS} element={<LiveAlerts />}></Route>
      <Route path={LinkTo.BLOGS} element={<Blogs />}></Route>
      <Route path={`${LinkTo.POST}/:id`} element={<PostEdition />}></Route>
    </Routes>
  );
};
