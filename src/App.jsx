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

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <AboutUs />
      <OurService />
      <Partners />
      <Events />
      <Knowledge />
      <LeaderShip />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
