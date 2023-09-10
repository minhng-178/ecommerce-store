import { Category } from "@/types";

const URL =
  "http://localhost:3000/api/fd3f38b7-76db-4ca8-9e9b-aa800ba9be35/categories";

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
