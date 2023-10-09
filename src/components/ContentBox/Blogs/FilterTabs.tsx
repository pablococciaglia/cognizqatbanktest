import { Tabs, TabsProps } from "antd";
import { MenuButton } from "../../../constants/constants";
import { setActiveButton } from "../../../slices/menuSidebarSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FC } from "react";
import { buttonSelected } from "../../../selectors/seletors";

const items: TabsProps["items"] = [
  {
    key: MenuButton.ALL,
    label: "ALL POSTS",
  },
  {
    key: MenuButton.LATEST,
    label: "LASTEST POSTS",
  },
  {
    key: MenuButton.ARCHIVED,
    label: "ARCHIVED",
  },
];

export const FilterTabs: FC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(buttonSelected);

  const onChange = (key: string) => {
    dispatch(setActiveButton(key as MenuButton));
  };
  return (
    <Tabs
      activeKey={activeTab}
      style={{ width: "100%" }}
      defaultActiveKey={MenuButton.ALL}
      items={items}
      onChange={onChange}
    />
  );
};
