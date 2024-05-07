import React from "react";
import styles from "./page.module.css";
import Filters from "@/components/Blog/Filters";
import Card from "@/components/Blog/Card";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import CircleIcon from "@/components/Blog/icons/circleIcon";
import { getArticles } from "@/actions/getArticles";
import { IBlogFilters } from "@/components/Blog/types";
import AnimWrap from "@/components/ui/AnimWrap";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(2);
  if (seoData) {
    const { metaTitle, metaDescription, metaImage, canonicalURL, keywords } =
      seoData;
    return {
      title: metaTitle,
      description: metaDescription,
      keywords: keywords,
      openGraph: {
        images: process.env.CMS_URL + metaImage.data.attributes.url,
      },
      alternates: {
        canonical: canonicalURL,
      },
    };
  }
}

interface Props {
  searchParams: { filter: IBlogFilters };
}

const Blog = async ({ searchParams }: Props) => {
  const seoData = await getSeo(2);
  {
    seoData && (
      <StructuredData
        id="blog page"
        structuredData={seoData.structuredData}
      />
    )
  }

  const articlesData = await getArticles(searchParams.filter);

  const showCards = articlesData && articlesData?.length > 0;
  return (
    <AnimWrap className={styles.blog}>
      <section className={styles.blogSection}>
        <div className={styles.content}>
          <Filters currentFilter={searchParams.filter} />

          <div className={styles.cardList}>
            {showCards &&
              articlesData.map((card, i) => {
                return (
                  <Card
                    currentFilter={searchParams.filter}
                    cardData={card}
                    key={i}
                  />
                );
              })}
          </div>
          {showCards && <CircleIcon className={styles.circleIcon} />}
        </div>
      </section>
      {showCards && (
        <>
          <YellowGearIcon className={styles.gearIcon} />
          <TriangleIcon className={styles.triangleIcon} />
        </>
      )}
    </AnimWrap>
  );
};

export default Blog;
