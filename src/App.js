import Features from "./components/features";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Workflow from "./components/workflow";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
    </>
  );
}

export default App;
