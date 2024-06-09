import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(5);
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

const Complaint = async () => {
  const seoData = await getSeo(5);

  const pageIdInStrapi = 4;
  const pageData = await getLegalPage(pageIdInStrapi);
  return (
    <>
      {seoData?.structuredData && (
        <StructuredData
          id="complaint page"
          structuredData={seoData.structuredData}
        />
      )}
      <Legal data={pageData} />
    </>
  );
};

export default Complaint;
