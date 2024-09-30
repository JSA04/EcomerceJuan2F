import style from './botton.module.css'

function Botton({desc}){
    return(
        <div className={style.botton}>
            {desc}
        </div>
    )
}

export default Botton;