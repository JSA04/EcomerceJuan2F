import style from './footer.module.css'
import codigobarras from '../../assets/codigobarrasfooter.png'
function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.geral}>
                <h1 className={style.title}>Exclusive</h1>
                <p className={style.subtitle}>Subscribe</p>
                <p className={style.text}>Get 10% yout first order</p>
            </div>
            <div className={style.geral}>
                <p className={style.subtitle}>Support</p>
                <p className={style.text}>11 Bijoy sarani, Dhaka,Dh 1515, Bangladesh.</p>
                <p className={style.text}>exclusive@gmail.com</p>
                <p className={style.text}>+88015-88888-9999</p>
            </div>
            <div className={style.geral}>
                <p className={style.text}>Account</p>
                <p className={style.text}>My account</p>
                <p className={style.text}>Login / Register</p>
                <p className={style.text}>Cart</p>
                <p className={style.text}>Wishlist</p>
                <p className={style.text}>Shop</p>
            </div>
            <div className={style.geral}>
                <p className={style.text}>Quick Link</p>
                <p className={style.text}>Privacy Policy</p>
                <p className={style.text}>Term Of Use</p>
                <p className={style.text}>FAQ</p>
                <p className={style.text}>Contact</p>
            </div>
            <div className={style.geral}>
                <p className={style.text}>Download App</p>
                <img src={codigobarras}></img>
            </div>
        </div>
    )
}
export default Footer