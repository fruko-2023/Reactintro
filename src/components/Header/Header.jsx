import "./style.css";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = ({userData}) => {

  const [fullName,setFullName] =useState("Frank Rukoroba");
  const[email,setEmail]=useState("frukoroba@gmail.com")
  return (
    <div>
      <header className="header">
        <div className="subHeader">
          <div className="logo">
            <p>
              <span style={{ backgroundColor: "darkGreen", color: "white", paddingLeft: "12px" }}>
                E
              </span>
              don
            </p>
          </div>

          <nav className="navBar">
            <Link style={{textDecoration:"none",color:"black"}} to="/"> <span>Home</span></Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/services"> <span>Service</span></Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/about"> <span>About</span></Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/blog"> <span>Blog</span></Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/contact" > <span>Contact</span></Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/counter" > <span>Counter</span></Link>
           
            
          </nav>
          <div className="holder">
              {fullName} {email}
            <MdOutlineShoppingCart />

            <div className="iconInput">
              <input placeholder="search" />
              <CiSearch />
            </div>
          </div>

          <IoMenu className="burgerMenu" style={{ color: "green", fontSize: "30px" }} />
        </div>
      </header>
    </div>
  );
};

export default Header;
