import { IconVariants } from "../constants/constants";

export const getColorIcon = (type: IconVariants | undefined) => {
  let color;
  switch (type) {
    case IconVariants.EDIT:
      color = "#e29926";
      break;
    case IconVariants.DELETE:
      color = "#d32213";
      break;
    case IconVariants.BACK:
      color = "#397bf6";
      break;
    case IconVariants.UNARCHIVE:
    case IconVariants.ARCHIVED:
      color = "#6a9e32";
      break;
    default:
      color = "#397bf6";
      break;
  }
  return color;
};
