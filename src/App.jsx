import "./App.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import StatRow from "./components/StatCounter/StatRow";
import PageSection from "./components/PageSection";
import Testimonials from "./components/Testimonials";
import Band from "./components/Band";
import FeatureSection from "./components/FeatureSection";
import Assessments from "./components/Assessments";
import content from "./content/home.json";

function App() {
  const {
    heroEyebrow,
    whatMakesUsDifferent,
    referredToUs,
    theTeamSection,
    whatWeDoSection,
    fromTheTeamSection,
    aboutCadence,
  } = content;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <HeroSection eyebrow={heroEyebrow} />
        <StatRow />
        <PageSection {...whatWeDoSection} />
        <Assessments />
        <Testimonials />
        <Band {...whatMakesUsDifferent} />
        <FeatureSection {...aboutCadence} />
        <PageSection {...theTeamSection} />
        <PageSection {...fromTheTeamSection} />
        <Band {...referredToUs} />
      </main>
      <Footer />
    </>
  );
}

export default App;
