import styles from './subtitle.module.css'

function Subtitle2({title,subtitle}){
    return (
        <div className={styles.subtitle}>
            <p className={styles.text}>{subtitle}</p>
            <div className={styles.second}>
                <div className={styles.doubleelements}>
                <h1 className={styles.text2}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Subtitle2;