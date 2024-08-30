import style from "./aboutMe.module.css"
import img from "../pictures/SecondImageOfMan.png"

const AboutMe: React.FC = () =>{
    return (
    <div className={style.mainAboutMeDiv}>
        <img alt="Handsome Man" src={img}></img>
        <div className={style.textAbout}>
            <h2 className={style.h2}>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
            <div className={style.slideBar}>
                <p>UX</p>
                    <input type="range" className={style.slider}  min="0" max="100" value="80"/>            
                <p>Website Design</p>
                    <input type="range" className={style.slider}  min="0" max="100" value="80"/> 
                <p>App Design</p>
                    <input type="range" className={style.slider}  min="0" max="100" value="80"/> 
                <p>Graphic Design</p>
                    <input type="range" className={style.slider}  min="0" max="100" value="80"/> 
            </div>
        </div>
    </div>
    );
};

export default AboutMe