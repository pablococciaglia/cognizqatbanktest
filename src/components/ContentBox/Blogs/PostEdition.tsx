import { useLocation } from "react-router-dom";

import { BlogEntry } from "./BlogEntry";
import { useAppSelector } from "../../../hooks/hooks";
import { selectPost } from "../../../selectors/seletors";

export const PostEdition = () => {
  const { pathname } = useLocation();
  const arrayPath = pathname.split("/");
  const post = useAppSelector((state) =>
    selectPost(state, Number(arrayPath[2]))
  );
  if (!post) return null;
  return (
    <div>
      <BlogEntry
        body={post.body}
        date={post.date}
        photoId={post.photoId}
        title={post.title}
        id={post.id}
        editionMode
      />
    </div>
  );
};
