import React from "react"
import style from "./section.module.css"
import img from "../pictures/imageOfMan.png"
import SvgSection from "./svgSection"


const Header: React.FC = () =>{
    return(
        <section className={style.mainSectionDiv}>
            <div className={style.textDiv}>
                <h2 className={style.Hi}>Hi I am</h2>
                <p className={style.muhamedBinJameel}>Muhammad Bin Jameel</p>
                <div className={style.hh}>
                    <p className={style.UIUX}>UI & UX</p>
                    <p className={style.designer}>Designer</p>
                </div>
                
                <p className={style.someTextInSection}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
                <button className={style.button}>Hire me</button>
            </div>
            <img alt="handsome man" src={img}></img>
            <div className={style.svgBlocks}>
            <SvgSection/>

            </div>
            
       
        </section>
    )
}

export default Header
