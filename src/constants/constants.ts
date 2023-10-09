export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const USER_LENGTH = 10;

export const PICTURES_IN_STORE = 15;

export enum FetchStatus {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export enum IconVariants {
  BACK = "back",
  DELETE = "delete",
  EDIT = "edit",
  ARCHIVED = "archived",
  UNARCHIVE = "unarchive",
}

export enum MenuButton {
  OVERWIEW = "Overview",
  CALENDAR = "Calendar",
  SCHEDULE_ACTIONS = "Schedule Actions",
  LIVE_ALERTS = "Live Alerts",
  ALL = "All",
  LATEST = "Latest",
  ARCHIVED = "Archived",
}

export enum LinkTo {
  OVERWIEW = "overview",
  CALENDAR = "calendar",
  SCHEDULE_ACTIONS = "schedule-actions",
  LIVE_ALERTS = "live-alerts",
  BLOGS = "blogs",
  LOGIN = "login",
  POST = "post",
}

export const QATAR_DEVELOPMENT_BANK = "Qatar Development Bank";

export const YEAR_MILISECONDS = 31556900000;

export const POSTS_PER_PAGE = 3;
