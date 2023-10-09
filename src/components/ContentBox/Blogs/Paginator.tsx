import { FC, useEffect, useState } from "react";

import { Pagination, PaginationProps } from "antd";

import { useAppDispatch } from "../../../hooks/hooks";
import { POSTS_PER_PAGE } from "../../../constants/constants";
import { setPagination } from "../../../slices/blogsSlice";
import { BlogsPlusDateAndImage } from "../../../types/blogsTypes";

interface PaginatorProps {
  blogs: BlogsPlusDateAndImage;
}
export const Paginator: FC<PaginatorProps> = ({ blogs }) => {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(1);

  const numberOfPosts = blogs.length;

  useEffect(() => {
    dispatch(setPagination(1));
  }, [dispatch, numberOfPosts]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    dispatch(setPagination(page));
  };

  return (
    <Pagination
      style={{ marginTop: 20 }}
      current={current}
      defaultCurrent={current}
      onChange={onChange}
      total={numberOfPosts}
      defaultPageSize={POSTS_PER_PAGE}
    />
  );
};
