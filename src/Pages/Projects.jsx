const Projects = () => {
    return ( 
        <div className="flex flex-cols-2 gap-4">
            <div className="flex flex-col border-2 rounded-lg p-4">
                <div></div>
                <h1>Over the past few years, I've worked on various projects. Here's few of my best:</h1>
                <div className="flex justify-end">
                    <button className="border rounded-xl p-2">Get in touch</button>
                </div>
                
            </div>
            <div className="flex flex-col border-2 rounded-lg p-4">
                <div></div>
                <h1>Over the past few years, I've worked on various projects. Here's few of my best:</h1>
                <button>Get in touch</button>
            </div>
        </div>
     );
}
 
export default Projects;