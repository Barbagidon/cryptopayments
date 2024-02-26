import Header from "@/components/Header";
import FirstScreen from "@/components/MainPage/FirstScreen";

export default function Home() {
  return (
    <div
      style={{
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <FirstScreen />
    </div>
  );
}
