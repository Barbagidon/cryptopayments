import React from "react";
import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(9);
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

const PrivacyPolicy = async () => {
  const seoData = await getSeo(9);

  const pageIdInStrapi = 6;
  const pageData = await getLegalPage(pageIdInStrapi);
  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="privacy page"
          structuredData={seoData.structuredData}
        />
      )}
      <Legal data={pageData} />;
    </>
  );
};

export default PrivacyPolicy;
