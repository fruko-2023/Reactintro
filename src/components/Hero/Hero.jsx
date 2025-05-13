import "./style.css"
import { CiSearch } from "react-icons/ci";
import studentPic from "../../assets/picha.png";
import { FaGraduationCap } from "react-icons/fa6";

const Hero = ({salamu}) => {
  let user = "josephat";
  let firstName = "Frank";
  return (
    <div>
      <div className="heroSection">
        <div className="subHero">
          {/* left hero section */}
          <section className="leftHero">
            {/* first content under leftHero */}
            <div className="contentLeft">
              <div style={{ color: "green" }}>
                Hello World {`${user} ${firstName}`}
              </div>
              <div style={{ fontSize: "60px", fontWeight: "900" }}>
                We have all kinds of <span>Courses</span> Collections
              </div>
              <div style={{ color: "black" }}>
                Our course makes your industry standard
              </div>
            </div>
            {/* second content under leftHero */}
            <div className="inputContainer">
              <input placeholder="CiSearch" />
              <CiSearch style={{ backgroundColor: "green", padding: "8px", color: "white" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px", gap: "5px" }}>
              <p style={{ color: "black" }}>People search:</p>
              <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "6px" }}>
                blog
              </span>
              <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "6px" }}>
                ui/ux
              </span>
              <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "6px" }}>
                front end
              </span>
              <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "6px" }}>
                back end
              </span>
              {salamu}
            </div>
          </section>
          {/* right hero section */}
          <section className="rightHero">
            <img src={studentPic} alt="" />
            <div className="smallcon">
              <div
                style={{
                  width: "100px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "50px 0 0 50px"
                }}
              >
                <FaGraduationCap style={{ color: "green", fontSize: "40px" }} />
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
