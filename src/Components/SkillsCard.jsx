const SkillsCard = () => {
    return ( 
        <div className="p-4 border-2 rounded-lg flex flex-col gap-4">
            <h1 className="font-semibold text-2xl" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Skills</h1>
            <div className="flex gap-2 flex-wrap">
                <SkillIcon skill="React.js"/>
                <SkillIcon skill="Nest.js"/>
                <SkillIcon skill="TypeORM"/>
                <SkillIcon skill="TypeScript"/>
                <SkillIcon skill="GraphQL"/>
                <SkillIcon skill="Python"/>
                <SkillIcon skill="Docker"/>
                <SkillIcon skill="Storybook"/>
                <SkillIcon skill="Jest"/>
                <SkillIcon skill="PostgreSQL"/>
                <SkillIcon skill="Flask"/>
                <SkillIcon skill="Gatsby"/>
            </div>
        </div>
     );
}

const SkillIcon = ( {skill} ) => {
    return ( 
        <div className="bg-gray-100 inline-block py-1 px-3 text-xs text-gray-400 rounded-lg">
            <h1>{skill}</h1>
        </div>
     );
}
 
export default SkillsCard;