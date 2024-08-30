import style from "./myProject.module.css"
import AppDesign from "../pictures/AppDesign.png"
import landingPage from "../pictures/landingPage.png"
import landingPageBottom from "../pictures/landingPageBottmo.png"


import MyProjectCard from "./myProjectCard";
import { useState } from "react";

const MyProject: React.FC = () => {
    
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={style.ProjectMainDiv}>
            <div className={style.sec}>
                <h2 className={style.h2}>My Project</h2>
                <p className={style.p}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.</p>
            </div>
            <ul className={style.listButton}>
            {['All', 'UI/UX', 'Website Design', 'App Design', 'Graphic Design'].map((item, index) => (
                <li
                    key={index}
                    className={activeIndex === index ? `${style.active}` : ''}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </li>
            ))}
            </ul>
            <div className={style.myProjectCardBlock}>
                <MyProjectCard              
                    //imgSrc={landingPage}
                    imgSrcBottom={landingPageBottom} 
                    altText="landingPageImage" 
                    title="UI/UX" 
                    description="AirCalling Landing Page Design "/>
                <MyProjectCard              
                    //imgSrc={landingPage}
                    imgSrcBottom={landingPageBottom} 
                    altText="landingPageImage" 
                    title="UI/UX" 
                    description="AirCalling Landing Page Design "/>
                <MyProjectCard              
                    // imgSrc={landingPage}
                    imgSrcBottom={landingPageBottom} 
                    altText="landingPageImage" 
                    title="UI/UX" 
                    description="AirCalling Landing Page Design"/>
            </div>
        </div>
    );
};

export default MyProject;
