import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <FirstScreen />
    </div>
  );
}
