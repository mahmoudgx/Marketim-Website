import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Work />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default App;
