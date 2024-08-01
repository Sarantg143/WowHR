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

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <AboutUs />
      <OurService />
      <Partners />
      <LeaderShip />
      <Knowledge />
      <Events />
      <Testimonials />
      <div className="py-3 overflow-hidden bg-red-500 sm:py-10 ">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
