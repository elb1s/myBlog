import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Whoami from "./components/Whoami";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whoami />
      <Technologies />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
