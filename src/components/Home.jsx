import "./components.css";
import Welcome from "./Welcome";
import About from "./About";
import Locations from "./Locations";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="snap">
      <Welcome />
      <About />
      <Locations />
      <Contact />
    </div>
  );
}
