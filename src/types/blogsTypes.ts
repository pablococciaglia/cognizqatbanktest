export type Blogs = Blog[];
export type BlogsPlusDateAndImage = BlogPlusDateAndImage[];

export interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPlusDateAndImage extends Blog {
  date: number;
  photoId: number;
  archived: boolean;
  editing?: boolean;
}
