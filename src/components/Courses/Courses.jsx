
import "./style.css";
import { FaCalendarDays } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import courses from "../../assets/courses.jpg";
import Hope from "../Hope/Hope";

const CourseData=[
    {
        pic:"../../assets/courses.jpg",
        title:"Introductions to chemistry",
        start:"12/1/2025",
        end:"30/04/2025",
        left:"rate",
        right:"chat",
    },
    {
      pic:"../../assets/courses.jpg",
      title:"How to structure a good folder",
      start:"start Date",
      end:"01/06/2025",
      left:"rate",
      right:"chat",
  },
  {
    pic:"../../assets/courses.jpg",
    title:"How to become a better cook",
    start:"July 20, 2025",
    end:"01/08/2025",
    left:"rate",
    right:"chat",
},
{
  pic:"../../assets/courses.jpg",
  title:"How to become a better cook",
  start:"08/04/2024",
  end:"20/12/2025",
  left:"rate",
  right:"chat",
},
{
  pic:"../../assets/courses.jpg",
  title:"How to become a better cook",
  start:"25/07/2025",
  end:"22/09/2025",
  left:"rate",
  right:"chat",
},
{
  pic:"../../assets/courses.jpg",
  title:"How to become a better cook",
  start:"31/07/2024",
  end:"31/07/2025",
  left:"rate",
  right:"chat",
},
{
  pic:"../../assets/courses.jpg",
  title:"How to become a better cook",
  start:"20/07/2025",
  end:"30/07/2025",
  left:"rate",
  right:"chat",
},
{
  pic:"../../assets/courses.jpg",
  title:"How to become a better cook",
  start:"30/07/2025",
  end:"30/08/2025",
  left:"rate",
  right:"chat",
}
]
const Courses=({name})=>{
  const data="Popular Courses"
  const btnExplore="Explore Courses"
    return(
           <div className="courseCon">
             <div className="courseOne">
                <div className="popular">
                    <span>{data}</span>
                    <button>{btnExplore}</button>
                </div>
                <div className="contentCourses">
                    

                    {
                      CourseData.map((value)=>{
                        return (
                          <div className="coursesCard">
                          <div className="imgCon"> 
                            <img src={courses}/>
                          </div>
                          <span>{value.title}</span>
                          <div className="dateCon">
                             <div>
                             <FaCalendarDays />
                             <span >{value.start}</span>
                             </div>
                             <div>
                             <FaCalendarDays />
                             <span >{value.end}</span>
                             </div>
                          </div>
                          <hr/>
                          <div className="dateCon">
                            <div style={{border:"1px solid gray",backgroundColor:"whitesmoke",borderRadius:"10px",padding:"7px"}}>
                            <MdStarRate />
                            <span style={{fontWeight:"300"}}>{value.left}</span>
                            </div>
                            <div style={{border:"1px solid gray",backgroundColor:"whitesmoke",borderRadius:"10px",padding:"7px"}}>
                            <MdRateReview />
                             <span style={{fontWeight:"300"}}>{value.right}</span>
                            </div>
                          </div>
                      </div>
                        )
                      })
                    }
                    
                </div>
             </div>
             {/* <Hope well={btnExplore} /> */}
           </div>
    );
};
export default Courses;