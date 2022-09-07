import Header from "../src/components/header";
import MainContent from "../src/components/mainContent";
import Education from "../src/components/education";
import Talent from "../src/components/talent";
import OurTeachers from "../src/components/teachers";
import History from "../src/components/history";
import Future from "../src/components/future";
import Footer from "../src/components/footer";
export default function Home() {
  return (
    <div className="main">
      <Header />
      <MainContent />
      <div className="row mx-0">
          <iframe className="w-100 p-0 videoBanner mobileNotActive" src="https://player.vimeo.com/video/746943912?h=35382f53a1&background=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
          </iframe>
          <iframe className="w-100 p-0 videoBannerMobile mobileActive" src="https://player.vimeo.com/video/746943748?h=0b9b804721&background=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
          </iframe>
          <script src="https://player.vimeo.com/api/player.js%22%3E"></script>
        </div>
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

      <Footer />
    </div>
  );
}
