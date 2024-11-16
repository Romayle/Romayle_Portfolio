import AboutMeCard from "../Components/AboutMeCard";
import MyProjectsCard from "../Components/MyProjectsCard";
import ResumeCard from "../Components/ResumeCard";
import SkillsCard from "../Components/SkillsCard";

const Home = () => {
    return ( 
        <>
        <AboutMeCard />
        <div className='grid grid-cols-2 gap-4'>
            <MyProjectsCard />
            <div className="grid grid-rows-2 gap-4">
                <SkillsCard />
                <ResumeCard />
            </div>
        </div>
        </>
     );
}
 
export default Home;