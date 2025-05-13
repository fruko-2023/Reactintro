import "./style.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { GiPerspectiveDiceTwo } from "react-icons/gi";

const Content=()=>
{
    return(
        <div>
       <div className="contentIcon">
         <div className="subContentIcon">
             <div className="showCon"> 
                  <div style={{width:"130px",height:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <FaShoppingBag style={{color:"green",fontSize:"40px"}}/>
                  </div>
                  <div style={{flex:"1",height:"100%",paddingTop:"10px",padding:"2px"}}>
                    <div style={{fontWeight:"900"}}>
                            Expose Learning
                    </div>
                      <div>
                          Our course makes you industry standard our course makes you
                      </div>
                  </div>
                  
             </div>
             <div className="showCon"> 
                  <div style={{width:"130px",height:"100%", display:"flex",justifyContent:"center",alignItems:"center" }}>
                  <GiPerspectiveDiceTwo style={{color:"green",fontSize:"40px"}}/>
                  </div>
                  <div style={{flex:"1",height:"100%",paddingTop:"10px",padding:"2px"}}>
                    <div style={{fontWeight:"900"}}>
                            Expose Learning
                    </div>
                      <div>
                          Our course makes you industry standard our course makes you
                      </div>
                  </div>
                  
             </div>
             <div className="showCon"> 
                  <div style={{width:"130px",height:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <FaCompass style={{color:"green",fontSize:"40px"}}/>
                  </div>
                  <div style={{flex:"1",height:"100%",paddingTop:"10px",padding:"2px"}}>
                    <div style={{fontWeight:"900"}}>
                            Expose Learning
                    </div>
                      <div>
                          Our course makes you industry standard our course makes you
                      </div>
                  </div>
                  
             </div>
         </div>
      </div>
        </div>
    );
};
export default Content;