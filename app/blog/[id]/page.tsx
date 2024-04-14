import React from "react";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import SectionWrap from "@/components/ui/SectionWrap";
import ArticleArrow from "@/components/Blog/icons/articleArrow";
import styles from "./page.module.css";
import Article from "@/components/Blog/Article";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getArticle } from "@/actions/getArticle";

interface Props {
  params: { id: string };
}

const ArticlePage = async ({ params }: Props) => {
  const articleData = await getArticle(params.id);

  if (!articleData) {
    redirect("/");
  }

  return (
    <SectionWrap tag="main" className={styles.articlePage}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          <Link href={"/blog"}>Blog</Link> <ArticleArrow /> <span>Article</span>
        </h1>

        <Article pageId={params.id} articleData={articleData} />
      </div>

      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
    </SectionWrap>
  );
};

export default ArticlePage;
