import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(11);
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

const RiskDisclaimer = async () => {
  const seoData = await getSeo(11);

  const pageIdInStrapi = 8;
  const pageData = await getLegalPage(pageIdInStrapi);
  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="risj page"
          structuredData={seoData.structuredData}
        />
      )}
      <Legal data={pageData} />
    </>
  );
};

export default RiskDisclaimer;
