import styles from "./subtitle.module.css"
import Time from "./time/Time"
import left from '../../../assets/setaesquerda.png'
import right from '../../../assets/setadireita.png'

function Subtitle(){
    return (
        <div className={styles.subtitle}>
            <p className={styles.text}>Today's</p>
            <div className={styles.second}>
                <div className={styles.doubleelements}>
                <h1 className={styles.text2}>Flash Sales</h1>
                <Time></Time>
                </div>
                <div>
                    <img src={left} alt="seta para direita" />
                    <img src={right} alt="seta para direita" />
                </div>
            </div>
        </div>
    )
}

export default Subtitle;