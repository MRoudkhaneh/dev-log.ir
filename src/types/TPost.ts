export type TPost = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string;
  published: boolean;
  author: any;
  authorId: number;
} | null;
