import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(12);
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

const TermsOfService = async () => {
  const seoData = await getSeo(12);
  {
    seoData && (
      <StructuredData
        id="terms page"
        structuredData={seoData.structuredData}
      />
    )
  }
  const pageIdInStrapi = 7;
  const pageData = await getLegalPage(pageIdInStrapi);
  return <Legal data={pageData} />;
};

export default TermsOfService;
