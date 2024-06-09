import React from "react";
import styles from "./page.module.css";
import ReceivePayments from "@/components/Processing/ReceivePayments";
import Footer from "@/components/Footer";
import AdvList from "@/components/Processing/AdvList";
import Integrate from "@/components/Processing/Integrate";
import Slider from "@/components/Processing/Slider";
import AnimWrap from "@/components/ui/AnimWrap";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(10);
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

const Processing = async () => {
  const seoData = await getSeo(10);

  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="processing page"
          structuredData={seoData.structuredData}
        />
      )}
      <AnimWrap className={styles.processing}>
        <div className={styles.darkThemeBgWrapper}>
          <ReceivePayments />
          <AdvList />
        </div>
        <Integrate />
        <Slider />
      </AnimWrap>
    </>
  );
};

export default Processing;
