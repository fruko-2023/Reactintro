import Courses from "../../components/Courses/Courses"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"

const Home=()=>{
    const user={
        userName:"seniorDev",
        stack:"front end"
      }
    return (
        <div>
         <Header userData={user}/>
         <Hero/>
         <Courses/>1
        </div>
    )
}
export default Home