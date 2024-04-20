import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import SecondScreen from "@/components/MainPage/SecondScreen";
import ThirdScreen from "@/components/MainPage/ThirdScreen";
import FourthScreen from "@/components/MainPage/FourthScreen";
import Faq from "@/components/MainPage/Faq";
import MeetSection from "@/components/MainPage/MeetSection";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import AnimWrap from "@/components/ui/AnimWrap";
import AnimationPresence from "@/components/ui";

export default function Home() {
  return (
    <AnimWrap className={styles.mainPage}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Faq />
      <MeetSection />
      <GetStartedSection />
    </AnimWrap>
  );
}
