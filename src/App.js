import Footer from "./Portfolio/Footers/Footer/Footer";
import Banner from "./Portfolio/Headers/Header/Banner/Banner";
import Topbar from "./Portfolio/Headers/Header/Topbar/Topbar";
// import Topbar from "./Portfolio/Headers/Header/Topbar/Topbar";
import About from "./Portfolio/Menus/Menu/About/About";
import Contact from "./Portfolio/Menus/Menu/Contact/Contact";
import Project from "./Portfolio/Menus/Menu/Project/Project";
import HowWork from "./Portfolio/Menus/Menu/Skils/HowWork/HowWork";
import Skils from "./Portfolio/Menus/Menu/Skils/Skils";


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Banner></Banner>
      <About></About>
      <HowWork></HowWork>
     <Project></Project>
      <Skils></Skils>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
