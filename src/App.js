import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Whoami from "./components/Whoami";
import Works from "./components/Works";
function App() {
  return (
    <div className="bg-gradient-to-t from-[#def3ffd8] bg-opacity-80 to-[#ffffff]">
      <Navbar />
      <Hero />
      <Whoami />
      <Technologies />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
