import { FC } from "react";

import { Typography } from "antd";

import { LinkTo, MenuButton } from "../../constants/constants";
import { buttonSelected } from "../../selectors/seletors";
import { iconSelector } from "../../helpers/iconSelector";
import { setActiveButton } from "../../slices/menuSidebarSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

interface SidebarButtonsProps {
  buttonText: MenuButton;
  linkTo: LinkTo;
}

const { Text } = Typography;

export const SidebarButtons: FC<SidebarButtonsProps> = ({
  buttonText,
  linkTo,
}) => {
  const navigate = useNavigate();
  const buttonInStore = useAppSelector(buttonSelected);
  const dispatch = useAppDispatch();

  const setButtonInStore = () => {
    navigate(linkTo);
    dispatch(setActiveButton(buttonText));
  };

  const isSelectedButton = buttonInStore === buttonText;

  return (
    <div
      style={{
        backgroundColor: isSelectedButton ? "#e3f6fd" : undefined,
        color: isSelectedButton ? "#407ff7" : "#aea599",
        cursor: "pointer",
        display: "flex",
        fontSize: 17,
        padding: "10px 20px",
        width: "100%",
      }}
      onClick={setButtonInStore}
    >
      {iconSelector(buttonText)}
      <Text
        style={{
          color: isSelectedButton ? "#407ff7" : "#aea599",
          fontSize: 17,
          fontWeight: isSelectedButton ? 500 : undefined,
          marginLeft: 10,
        }}
      >
        {buttonText}
      </Text>
    </div>
  );
};
