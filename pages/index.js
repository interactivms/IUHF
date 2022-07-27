import Head from "next/head";
import Header from "../src/components/header";
import MainContent from "../src/components/mainContent";
import Education from "../src/components/education";
import Talent from "../src/components/talent";
import OurTeachers from "../src/components/teachers";
import Incubator from "../src/components/incubator";
import History from "../src/components/history";
import Future from "../src/components/future";
import Contact from "../src/components/contact";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Instituo Universitario de las Habilidades del Futuro</title>
        <meta
          name="description"
          content="Instituo Universitario de las Habilidades del Futuro IUHF"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />

        <MainContent />
        <div id="education">
          <Education />
        </div>
        <div id="talent">
          <Talent />
        </div>
        <div className="sectionSeparator">
          <p>Nuestros Docentes</p>
        </div>
        <div id="teachers">
          <OurTeachers />
        </div>
        <div id="incubator">
          <Incubator />
        </div>
        <div id="ourHistory">
          <History />
        </div>
        <div id="future">
          <Future />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
