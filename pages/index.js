import Header from "../src/components/header";
import MainContent from "../src/components/mainContent";
import Education from "../src/components/education";
import Talent from "../src/components/talent";
import OurTeachers from "../src/components/teachers";
import Incubator from "../src/components/incubator";
import History from "../src/components/history";
import Future from "../src/components/future";
import Contact from "../src/components/contact";
import Footer from "../src/components/footer";
export default function Home() {
  return (
    <div className="main">
      <Header />
      <MainContent />
      <div id="Education">
        <Education />
      </div>
      <div id="Talent">
        <Talent />
      </div>
      <div className="sectionSeparator">
        <h2 className="white fontsize-3 py-2">Catedráticos</h2>
      </div>
      <div id="Teachers">
        <OurTeachers />
      </div>

      {/*
        <div id="Incubator">
          <Incubator />
        </div>
      */}

      <div id="OurHistory">
        <History />
      </div>
      <div id="Future">
          <Future page="index" />
        </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
