import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';

const Carousel = () => {
    const carouselRef = useRef(null);
    const [size, setSize] = useState({ height: 0, width: 0 });

    useEffect(() => {
        const element = carouselRef.current;
        if (element) {
            // Get the actual dimensions of the carousel div
            setSize({
                height: element.offsetHeight,
                width: element.offsetWidth,
            });
        }
    }, []); // Run this effect once when the component mounts

    return ( 
        <div style={{ position:'relative' }}>
            <div ref={carouselRef} id="carousel" className="bg-black p-4 flex flex-col gap-3 rounded-xl" style={{ position: 'absolute', top: 0, left:0 }}>
                <div><SkillIcon skill={"React.JS"} /></div>
                <h1 className="text-white text-2xl">Give me some food</h1>
                <p className="text-white mb-10 text-sm">This is a React JS application which gives you information about the food items when a food emoji is given as input.</p>
                <div className='flex justify-end' >
                    <Icon icon="fa:linkedin-square" width="24" height="24" color='white' className='relative right-0 inline'/>
                </div>
                {/* <Icon icon="fa:linkedin-square" width="24" height="24" color='white' className='relative right-0 block'/> */}
            </div>
            <div
                className="bg-black rounded-xl"
                style={{ height: `${size.height}px`, width: `${size.width}px`, opacity: 0.3, position: 'absolute', top: 10, left:10}}
            ></div>
            <div
                className="bg-black rounded-xl"
                style={{ height: `${size.height}px`, width: `${size.width}px`, opacity: 0.1, position: 'absolute', top: 20, left:20}}
            ></div>
        </div>
    );
};

const SkillIcon = ({ skill }) => {
    return ( 
        <div className="bg-black border border-gray-500 inline-block py-1 px-3 text-xs text-gray-400 rounded-lg">
            <h1>{skill}</h1>
        </div>
    );
};

export default Carousel;
