import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(6);
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

const CookiesPolicy = async () => {
  const seoData = await getSeo(6);

  const pageIdInStrapi = 5;
  const pageData = await getLegalPage(pageIdInStrapi);

  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="cookies page"
          structuredData={seoData.structuredData}
        />
      )}
      <Legal data={pageData} />
    </>
  );
};

export default CookiesPolicy;
