
import style from "./myProject.module.css"



interface CardProp {
    // imgSrc: string;
    imgSrcBottom: string,
    altText: string;
    title: string;
    description: string;
}

const MyProjectCard: React.FC<CardProp> = ({ imgSrcBottom, altText, title, description }) =>{
    return(
        <div className={style.myProjectCard}>
            {/* <img src={imgSrc} alt={altText} height={411} width={340}></img> */}
            <img src={imgSrcBottom} alt={altText} height={500} width={340}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MyProjectCard