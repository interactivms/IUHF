import Head from "next/head";
import Header from "../src/components/header";
import MainContent from "../src/components/mainContent";
import Education from "../src/components/education";
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
        <div className="education">
          <Education />
        </div>
      </div>
    </div>
  );
}
