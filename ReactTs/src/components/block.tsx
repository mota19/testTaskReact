import style from './services.module.css'; 

interface BlockProps {
    imgSrc: string;
    altText: string;
    title: string;
    description: string;
}

const Block: React.FC<BlockProps> = ({ imgSrc, altText, title, description }) => {
    return (
        <div className={style.block}>
            <img src={imgSrc} alt={altText} height={70} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Block;