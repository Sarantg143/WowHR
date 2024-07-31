import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Events from "./Components/Events";
import Knowledge from "./Components/Knowledge";
import LeaderShip from "./Components/LeaderShip";
import OurService from "./Components/OurService";
import Partners from "./Components/Partners";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Banner from "./Components/Banner";

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
      <div className="py-20 overflow-hidden bg-red-500">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
