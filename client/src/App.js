import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="h-screen w-fit">
        <Navbar />
        <Hero />
        <Content />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
