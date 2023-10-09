import { IconVariants, MenuButton } from "../constants/constants";
import {
  BarChartOutlined,
  BellOutlined,
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
  FileProtectOutlined,
  InfoCircleOutlined,
  RollbackOutlined,
  SendOutlined,
  StarOutlined,
} from "@ant-design/icons";
export const iconSelector = (text: MenuButton | IconVariants) => {
  let icon;
  switch (text) {
    case MenuButton.ALL:
      icon = <StarOutlined />;
      break;
    case MenuButton.CALENDAR:
    case MenuButton.ARCHIVED:
      icon = <CalendarOutlined />;
      break;
    case MenuButton.LATEST:
      icon = <InfoCircleOutlined />;
      break;
    case MenuButton.LIVE_ALERTS:
      icon = <BellOutlined />;
      break;
    case MenuButton.OVERWIEW:
      icon = <BarChartOutlined />;
      break;
    case MenuButton.SCHEDULE_ACTIONS:
      icon = <SendOutlined />;
      break;
    case IconVariants.EDIT:
      icon = <EditOutlined />;
      break;
    case IconVariants.DELETE:
      icon = <DeleteOutlined />;
      break;
    case IconVariants.BACK:
      icon = <RollbackOutlined />;
      break;
    case IconVariants.ARCHIVED:
      icon = <FileProtectOutlined />;
      break;
    case IconVariants.UNARCHIVE:
      icon = <FileDoneOutlined />;
      break;

    default:
      icon = <StarOutlined />;
      break;
  }
  return icon;
};
