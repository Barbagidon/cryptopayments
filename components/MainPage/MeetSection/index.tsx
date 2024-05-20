import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import { getEvents } from "@/actions/getEvents";
import MeetHeader from "./MeetHeader"
import MeetGeat from "./MeetGear"

const MeetSection = async () => {
  const events = await getEvents();
  const sortedEvents = events?.sort((a, b) => a.id - b.id);

  return (
    <section className={styles.meetSection}>
      <div className={styles.content}>
        <MeetHeader />
        {sortedEvents && (
          <ul className={styles.cardList}>
            {sortedEvents.map((card, i) => {
              return <Card cmsUrl={process.env.CMS_URL} cardData={card.attributes} key={i} />
            })}

            <MeetGeat />
          </ul>
        )}
      </div>
    </section>
  );
};

export default MeetSection;
