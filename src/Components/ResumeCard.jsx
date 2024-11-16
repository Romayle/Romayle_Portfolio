const ResumeCard = () => {
    return ( 
        <div className="p-4 border-2 rounded-lg flex items-center justify-between">
            <h1 className="font-semibold text-2xl tracking-tight" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Resume</h1>
            <div className="flex bg-black h-10 w-3/4 rounded-xl p-6 items-center">
                <h2 className="text-white text-xs">More details about my carrer</h2>
                <button className="bg-white text-xs rounded py-1 px-3">Open</button>
            </div>
        </div>
     );
}
 
export default ResumeCard;