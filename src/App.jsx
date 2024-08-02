import Header from "./Components/Header";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Partners from "./Components/Partners";
import Knowledge from "./Components/Knowledge";
import LeaderShip from "./Components/LeaderShip";
import OurService from "./Components/OurService";
import LandingPage from "./Components/LandingPage";
import Testimonials from "./Components/Testimonials";
// import LoadingPage from "./Components/LoadingPage";

function App() {
  return (
    <div>
      {/* <LoadingPage /> */}

      <Header />
      <LandingPage />
      <AboutUs />
      <OurService />
      <Partners />
      <LeaderShip />
      <Events />
      <Knowledge />
      <Testimonials />
      <div className="py-3 overflow-hidden sm:py-10 ">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
