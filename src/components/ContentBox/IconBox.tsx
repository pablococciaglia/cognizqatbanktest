import { CSSProperties, FC } from "react";

import { Typography } from "antd";

import { useAppSelector } from "../../hooks/hooks";
import { buttonSelected } from "../../selectors/seletors";
import { iconSelector } from "../../helpers/iconSelector";
import {
  IconVariants,
  QATAR_DEVELOPMENT_BANK,
} from "../../constants/constants";
import { getColorIcon } from "../../helpers/getColorIcon";

const { Text, Title } = Typography;

const iconBoxStyle: CSSProperties = {
  backgroundColor: "#397bf6",
  borderRadius: 15,
  color: "#FFF",
  display: "flex",
  fontSize: 40,
  height: 70,
  justifyContent: "center",
  marginRight: "15px",
  width: 70,
};

interface IconBoxProps {
  type?: IconVariants;
  callback?: () => void;
}
export const IconBox: FC<IconBoxProps> = ({ type, callback }) => {
  const selection = useAppSelector(buttonSelected);
  const icon = iconSelector(type ? type : selection);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: type ? "pointer" : "unset",
      }}
      onClick={callback}
    >
      <div style={{ ...iconBoxStyle, backgroundColor: getColorIcon(type) }}>
        {icon}
      </div>
      {!type && (
        <div>
          <Title style={{ margin: "0px" }} level={3}>
            {selection}
          </Title>
          <Text>{QATAR_DEVELOPMENT_BANK}</Text>
        </div>
      )}
    </div>
  );
};
