import { useLocation, useNavigate } from "react-router-dom";

import { IconBox } from "../IconBox";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { IconVariants } from "../../../constants/constants";
import {
  archivePostFromStore,
  deletePostFromStore,
  openModal,
  unarchivePostFromStore,
} from "../../../slices/blogsSlice";
import { selectPost } from "../../../selectors/seletors";

export const EditionIcons = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const post = useAppSelector((store) => selectPost(store, Number(path[2])));

  const goBack = () => {
    navigate(-1);
  };

  const deletePost = () => {
    navigate(-1);
    dispatch(deletePostFromStore(Number(path[2])));
  };

  const archivePost = () => {
    dispatch(archivePostFromStore(Number(path[2])));
  };

  const unarchivePost = () => {
    dispatch(unarchivePostFromStore(Number(path[2])));
  };

  const openModalForEdit = () => {
    dispatch(openModal());
  };

  return (
    <div style={{ display: "flex" }}>
      <IconBox type={IconVariants.BACK} callback={goBack} />
      {post?.archived ? (
        <IconBox type={IconVariants.UNARCHIVE} callback={unarchivePost} />
      ) : (
        <>
          <IconBox type={IconVariants.EDIT} callback={openModalForEdit} />
          <IconBox type={IconVariants.DELETE} callback={deletePost} />
          <IconBox type={IconVariants.ARCHIVED} callback={archivePost} />
        </>
      )}
    </div>
  );
};
