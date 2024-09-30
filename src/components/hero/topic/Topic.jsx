import style from './Topic.module.css'

function Topic({src,title,text}){
    return(
        <div className={style.geral}>
            <img src={src} className={style.img}></img>
            <h1 className={style.title}>{title}</h1>
            <p className={style.text}>{text}</p>
        </div>
    )
}
export default Topic;