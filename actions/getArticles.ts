import { IArticle } from "@/components/Blog/types";

export const getArticles = async (): Promise<IArticle[] | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}posts?populate=*&sort[0]=date:desc`, {
      cache: "no-store",
    });

    const articlesData = await result.json();
    return articlesData.data;
  } catch (error) {
    return;
  }
};
