
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App =() =>{

    return(
        <Router>
        <Navbar logo={<Logo text={"Marbabel"} />}>
          <NavItem to={"/"} text={"Home"} />
          <NavItem to={"/about"} text={"About"} />
        </Navbar>
        <Routes>
          <Route path={"/about"} element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<HeroDetails />} />
        </Routes>
      </Router>
    )
}

export default App