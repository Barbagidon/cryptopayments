import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import SecondScreen from "@/components/MainPage/SecondScreen";
import ThirdScreen from "@/components/MainPage/ThirdScreen";
import FourthScreen from "@/components/MainPage/FourthScreen";
import Faq from "@/components/MainPage/Faq";
import MeetSection from "@/components/MainPage/MeetSection";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import AnimWrap from "@/components/ui/AnimWrap";
import { getSeo } from "@/actions/getSeo";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata() {
  const seoData = await getSeo(1);
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

export default async function Home() {
  const seoData = await getSeo(1);

  return (
    <>
      {seoData && (
        <StructuredData
          id="main page"
          structuredData={seoData.structuredData}
        />
      )}
      <AnimWrap className={styles.mainPage}>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <Faq />
        <MeetSection />
        <GetStartedSection />
      </AnimWrap>
    </>
  );
}
