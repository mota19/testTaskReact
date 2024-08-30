
import style from "./testimonal.module.css"

interface TestimonialReview {
    imgSrc: string;
    altText: string;
    title: string;
    description: string;
}

const TestimonalReview: React.FC<TestimonialReview> = ({ imgSrc, altText, title, description }) => {
    return(
        <div className={style.testimonialReviewDiv}>
            <img src={imgSrc} alt={altText} height={235} width={235}></img>
            <div>
                <blockquote className={style.quotes}>{description}</blockquote>
                <h3>Name</h3>
                <p>{title}</p>
                
            </div>
        </div>
    )
}

export default TestimonalReview