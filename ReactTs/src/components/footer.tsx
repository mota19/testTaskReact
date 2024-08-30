import style from "./footer.module.css"

import SvgSection from "./svgSection"


interface FooterProps {
    isDarkTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({isDarkTheme}) =>{
    return (
        <footer className={isDarkTheme ? style.footerDark : style.footer}>
             <h1 className={style.muhamed}><span>M</span>uhamed</h1>
        <div className={style.navigationDiv}>
            <div >Home</div>  
            <div>About</div>  
            <div>Services</div>  
            <div>Projects</div>  
            <div>Testimonials</div>  
            <div>Contact Us</div>
          </div>
          <div className={style.svgBlocks}>
            <SvgSection/>
            </div>
        
        </footer>
        

    )
}

export default Footer