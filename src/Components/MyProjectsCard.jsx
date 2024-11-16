import Carousel from "./Carousel";

const MyProjectsCard = () => {
    return ( 
        <div className="p-4 border-2 rounded-lg">
            <h1 className="font-semibold text-2xl tracking-tight" style={{ fontFamily: '"Times New Roman", Times, serif' }}>My Projects</h1>
            {/* <div className="bg-black h-40 w-80 rounded-xl"></div> */}
            <Carousel />
        </div>
     );
}
 
export default MyProjectsCard;