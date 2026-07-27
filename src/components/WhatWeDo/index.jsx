import Card from "../Card";
import styles from "./WhatWeDo.module.css";

const cardData = [
  {
    cardImg: {
      src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&h=450&q=85",
      alt: "Coaching",
    },
    cardLabel: "Coaching",
    cardTitle: "Senior leadership, one-on-one.",
    cardCopy:
      "Psychology-based coaching built for senior leaders navigating real pressure. Direct, substantive, and designed for change that outlasts the engagement.",
    cardLink: {
      src: "#",
      text: "Learn About Coaching",
    },
  },
  {
    cardImg: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=450&q=85",
      alt: "Courses",
    },
    cardLabel: "Courses",
    cardTitle: "Programs that read the room.",
    cardCopy:
      "Leadership and communication development that's relevant to what your team is actually dealing with. Not a catalogue — a curriculum built for the context.",
    cardLink: {
      src: "#",
      text: "See our courses",
    },
  },
  {
    cardImg: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=450&q=85",
      alt: "Courses",
    },
    cardLabel: "360 Assessments",
    cardTitle: "A process that goes deeper.",
    cardCopy:
      "Reaching peers, direct reports, and stakeholders — not just the leader. Every 360 opens more doors than it starts with, which means every engagement expands from there.",
    cardLink: {
      src: "#",
      text: "How it works",
    },
  },
];

const WhatWeDo = () => {
  return (
    <section className={`${styles.whatWeDo}`}>
      <div className="sectionPad container">
        <p className={styles.cornerTab}>What We do</p>
        <h2 className="sectionHeading">
          Four service areas. One connected approach.
        </h2>

        <p className="sectionIntro">
          In practice, coaching, group development, 360 assessments, and
          speaking aren't separate programs — they inform each other. That's by
          design.
        </p>

        <div className={styles.cardSection}>
          {
            cardData?.map( card => <Card { ...card } /> )
          }
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
