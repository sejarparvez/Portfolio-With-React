import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Hero/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Project/Portfolio";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Works from "./Components/Work/Works";

export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />

      <Testimonial />
      <Contact />

      <Footer />
    </div>
  );
}
