const AboutMeCard = () => {
    return ( 
        <div className="flex items-center p-4 border-2 rounded-lg justify-between">
            <div className="bg-black h-48 w-48 rounded-xl flex-shrink-0"></div>
            <div className="inline-block w-3/4">
                <h1 className="font-semibold text-2xl tracking-tighter" style={{ fontFamily: '"Times New Roman", Times, serif' }}>About Me</h1>
                <p className="text-slate-500 text-wrap">I'm a Full-Stack Developer with a focus on Frontend. I have 2 years of expertise in JavaScript and specialize in creating engaging user interfaces. I have also worked in Backend and developed full-stack applications with React and Flask for 4 years.</p>
            </div>
        </div>
     );
}
 
export default AboutMeCard;