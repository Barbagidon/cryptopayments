import { getFaqPageData } from "@/actions/getFaqPageData";
import FaqLegal from "@/components/FaqLegal";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(7);
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

import React from "react";

const Faq = async () => {
  const seoData = await getSeo(7);

  const faqData = await getFaqPageData();

  return (
    <>
      {seoData?.structuredData && (
        <StructuredData id="faq page" structuredData={seoData.structuredData} />
      )}
      <FaqLegal data={faqData} />;
    </>
  );
};

export default Faq;
