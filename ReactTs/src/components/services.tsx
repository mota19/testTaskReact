import style from "./services.module.css"
import WebDesign from "../pictures/WebDesign.png"
import UIicon from "../pictures/UIUX.png"
import GraphicDesign from "../pictures/GraphicDesign.png";
import AppDesign from "../pictures/AppDesign.png"

import Block from "./block";

const Services: React.FC = () =>{
    return(
    <div className={style.serviceMainDiv}>
        <div className={style.sec}>
            <h2 className={style.h2}>Services</h2>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
        </div>
        <div className={style.blocks}>
            <Block 
                imgSrc={UIicon} 
                altText="UI UX Icon" 
                title="UI/UX" 
                description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
            />
            <Block 
                imgSrc={WebDesign} 
                altText="WebDesign Icon" 
                title="WebDesign" 
                description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
            />
            <Block 
                imgSrc={AppDesign} 
                altText="AppDesign Icon" 
                title="AppDesign" 
                description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
            />
            <Block 
                imgSrc={GraphicDesign} 
                altText="GraphicDesign Icon" 
                title="GraphicDesign" 
                description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
            />
            
        </div>
    </div>

    );
};

export default Services