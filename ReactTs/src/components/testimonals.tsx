import TestimonalReview from "./testimonalsReview"

import style from "./testimonal.module.css"

import img from "../pictures/Image.png"

import { useState } from "react"

const Testimonials: React.FC = () =>{

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return(
        <div className={style.testimonalMainDiv}>
            <h2 className={style.h2}>Testimonals</h2>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <TestimonalReview 
                imgSrc={img} 
                description="Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis." 
                altText="Avatar"
                title="CEO"
            />
            <div className={style.listOfbutton}>
            {[...Array(4)].map((_, index) => (
                <button
                    key={index}
                    className={activeIndex === index ? `${style.active}` : ''}
                    onClick={() => handleClick(index)}
                ></button>
            ))}
            </div>
        </div>
    )
}

export default Testimonials