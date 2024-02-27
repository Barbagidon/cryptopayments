import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import SecondScreen from "@/components/MainPage/SecondScreen";
import ThirdScreen from "@/components/MainPage/ThirdScreen";
import FourthScreen from "@/components/MainPage/FourthScreen";

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
    </div>
  );
}
