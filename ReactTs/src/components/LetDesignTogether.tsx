import style from "./LetDesignTogether.module.css"

const LetDesignTogether:React.FC = () =>{
    return(
        <div className={style.letDesignDiv}>
            <h2>Lets Design Together</h2>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <form >
                <input type="email" placeholder="Enter Your Email" className={style.inputText}/>
                <button type="submit" className={style.button}>Contact Me</button>

            </form>
        </div>
    )
    
}

export default LetDesignTogether