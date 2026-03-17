import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import About from "./components/About";
import Certificates from "./components/Certificates";
import CursorGlow from "./components/CursorGlow";
import Achievements from "./components/Achievements";
import LiveBackground from "./components/LiveBackground";
import Hobbies from "./components/Hobbies"
function App(){

return(
<div className="text-white">

      <LiveBackground />


<Navbar/>
<CursorGlow />
<Hero/>
<About />
<Skills/>
<Hobbies />
<Projects/>
<Education/>
<Certificates />
<Achievements />
<Contact/>
</div>

)

}

export default App