import Card from "../Card";
import Button from "../Button";
import CornerTab from "../CornerTab";
import styles from "./PageSection.module.css";

const PageSection = ({
  cta,
  background,
  cornerTab = "Corner Tab Title",
  sectionTitle = "Section Title Here",
  sectionIntro,
  sectionCopy,
  cards = [
    {
      cardImg: {
        id: "coaching",
        alt: "Coaching",
      },
      cardLabel: "Demo Card Label",
      cardTitle: "Card Title Here.",
      cardCopy:
        "Direct, substantive, and designed for change that outlasts the engagement.",
      cardLink: {
        src: "#",
        text: "Click this link",
      },
    },
    {
      cardImg: {
        id: "coaching",
        alt: "Coaching",
      },
      cardLabel: "Demo Card Label",
      cardTitle: "Card Title Here.",
      cardCopy:
        "Direct, substantive, and designed for change that outlasts the engagement.",
      cardLink: {
        src: "#",
        text: "Click this link",
      },
    },
    {
      cardImg: {
        id: "coaching",
        alt: "Coaching",
      },
      cardLabel: "Demo Card Label",
      cardTitle: "Card Title Here.",
      cardCopy:
        "Direct, substantive, and designed for change that outlasts the engagement.",
      cardLink: {
        src: "#",
        text: "Click this link",
      },
    },
  ],
}) => {
  return (
    <section className={`${styles.sectionWithCards} ${ background ? styles[background] : '' }`}>
      <div className={`${styles.sectionPad} container`}>
        <CornerTab tabText={cornerTab} />
        <div className={styles.sectionHeaderContainer}>
          <h2 className={`${styles.sectionHeading}`}>{sectionTitle}</h2>
          {
            cta && (
              <Button {...cta} />
            )
          }
        </div>
        
        {
          sectionIntro && <p className={styles.sectionIntro}>{sectionIntro}</p>
        }

        {
          sectionCopy && <p className={styles.sectionCopy}>{sectionCopy}</p>
        }

        <div className={styles.cardSection}>
          {cards?.map((card, index) => (
            <Card 
              {...card} 
              key={`${card.cardLabel}-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageSection;
