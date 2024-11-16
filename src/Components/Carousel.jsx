const Carousel = () => {
    return ( 
        <div>
            <div className="bg-black p-4 flex flex-col gap-3 rounded-xl">
                <div><SkillIcon skill={"React.JS"}/></div>
                <h1 className="text-white text-2xl">Give me some food</h1>
                <p className="text-white mb-10 text-sm">This is a React JS application which gives you information about the food items when a food emoji is given as input.</p>
            </div>
            <div className="bg-gray-500"></div>
            <div className="bg-gray-100"></div>
        </div>
     );
}
 
export default Carousel;

const SkillIcon = ( {skill} ) => {
    return ( 
        <div className="bg-black border border-gray-500 inline-block py-1 px-3 text-xs text-gray-400 rounded-lg">
            <h1>{skill}</h1>
        </div>
     );
}