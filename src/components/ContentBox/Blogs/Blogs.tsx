import { useCallback, useEffect } from "react";

import { BlogEntry } from "./BlogEntry";
import { Paginator } from "./Paginator";
import { FilterTabs } from "./FilterTabs";
import { getBlogsData } from "../../../slices/blogsSlice";
import { MenuButton, POSTS_PER_PAGE } from "../../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  buttonSelected,
  selectBlogs,
  selectPagination,
  selectUserData,
} from "../../../selectors/seletors";
import { Empty } from "antd";

export const Blogs = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectUserData);
  const button = useAppSelector(buttonSelected);
  const blogs = useAppSelector(selectBlogs);
  const pagination = useAppSelector(selectPagination);

  const fromPage = pagination * POSTS_PER_PAGE;
  const toPage = fromPage + 2;

  const setBlogsInStore = useCallback(() => {
    if (id && blogs.length === 0 && button === MenuButton.ALL) {
      dispatch(getBlogsData(id.toString()));
    }
  }, [blogs.length, button, dispatch, id]);

  useEffect(() => {
    setBlogsInStore();
  }, [setBlogsInStore]);

  const blogsToShow = blogs.filter(
    (_, index) => index >= fromPage && index <= toPage
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FilterTabs />
      <>
        {blogsToShow.length === 0 ? (
          <Empty />
        ) : (
          blogsToShow.map(({ title, id, body, photoId, date }) => (
            <BlogEntry
              key={`blogs-${id}`}
              title={title}
              body={body}
              photoId={photoId}
              date={date}
              id={id}
            />
          ))
        )}
      </>
      <Paginator blogs={blogs} />
    </div>
  );
};
