import { ISeoResponse } from "@/types";

export const getSeo = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.API_URL}pages-seos/${id}?populate=deep`,
      {
        next: { revalidate: 60 },
      }
    );

    const seoData: ISeoResponse = await result.json();

    return seoData.data.attributes.seo;
  } catch (error) {
    return;
  }
};
