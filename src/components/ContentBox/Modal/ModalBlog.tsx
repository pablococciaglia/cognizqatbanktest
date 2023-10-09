import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectPost } from "../../../selectors/seletors";
import {
  closeModal,
  editPost,
  markForEditThisPost,
  createPost,
} from "../../../slices/blogsSlice";
import { Input } from "antd";
import { useLocation } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

export const ModalBlog: React.FC = () => {
  const { pathname } = useLocation();
  const postId = pathname.split("/")[2];
  const post = useAppSelector((store) => selectPost(store, Number(postId)));
  const dispatch = useAppDispatch();
  const initialState = {
    title: post?.title || "",
    body: post?.body || "",
  };
  const { form, handleInputChange } = useForm(initialState);

  const { TextArea } = Input;

  const close = () => {
    dispatch(closeModal());
  };

  const handleOk = () => {
    if (post) {
      dispatch(markForEditThisPost(post.id));

      dispatch(
        editPost({
          userId: post.userId,
          id: post.id,
          title: form.title,
          body: form.body,
        })
      );
    } else {
      dispatch(
        createPost({
          title: form.title,
          body: form.body,
        })
      );
    }
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <>
      <Modal
        title={post ? "Edit post" : "Create post"}
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          name="title"
          size="large"
          placeholder="Title"
          addonBefore={"Title"}
          value={form.title}
          onChange={handleInputChange}
        />
        <TextArea
          name="body"
          style={{ height: 120 }}
          value={form.body}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  );
};
