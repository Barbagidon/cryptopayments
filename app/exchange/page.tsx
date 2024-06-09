import React from "react";
import styles from "./page.module.css";
import Secure from "@/components/Exchange/Secure";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import Transactions from "@/components/Exchange/Transactions";
import ExchangeSection from "@/components/Exchange/ExchangeSection";
import Choose from "@/components/Exchange/Choose";
import AnimWrap from "@/components/ui/AnimWrap";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(3);
  if (seoData) {
    const { metaTitle, metaDescription, metaImage, canonicalURL, keywords } =
      seoData;
    return {
      title: metaTitle,
      description: metaDescription,
      keywords: keywords,
      openGraph: {
        images: metaImage.data
          ? process.env.CMS_URL + metaImage.data.attributes.url
          : null,
      },
      alternates: {
        canonical: canonicalURL,
      },
    };
  }
}

const Exchange = async () => {
  const seoData = await getSeo(3);

  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="exchange page"
          structuredData={seoData.structuredData}
        />
      )}
      <AnimWrap className={styles.exchange}>
        <Transactions />
        <ExchangeSection />
        <Secure />
        <Choose />
        <GetStartedSection />
      </AnimWrap>
    </>
  );
};

export default Exchange;
