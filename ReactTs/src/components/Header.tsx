import React from "react"



const Header: React.FC = () =>{
    return(
        <header className="header">
          <nav className="nav">
          <h1 className="muhamed"><span>M</span>uhamed</h1>
          <div className="navigationDiv">
            <div >Home</div>  
            <div>About</div>  
            <div>Services</div>  
            <div>Projects</div>  
            <div>Testimonials</div>  
            <div>Contact Us</div>
          </div>  
            </nav>
          <button>Download CV</button>
        </header>
    )
}

export default Header
