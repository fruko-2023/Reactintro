import "./App.css";
import { CiSearch } from "react-icons/ci";
import studentPic from "./assets/picha.png";
import { FaGraduationCap } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GiPerspectiveDiceTwo } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Categories from "./components/Categories/Categories";
import Home from "./pages/Home/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Counter from "./pages/Counter/Counter";


const App=()=>
{ //data
  const user={
    userName:"seniorDev",
    stack:"front end"
  }

  //data
  const greeting="Good evening"
  const datainfo="good day chaleen"
  return(
    <div>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={ <Home />}/>
           <Route path="/services" element={ <Services/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/counter" element={<Counter/>}/>
         </Routes>
      </BrowserRouter>
     
    </div>
  )
}
export default App;