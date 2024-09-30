import style from "./hero.module.css"
import hero from "../../assets/principal.png"
import Subtitle from './subtitle-time/Subtitle.jsx'
import Cardsell from './cardsell/Cardsell.jsx';
import control from '../../assets/controle.png'
import chair from '../../assets/cadeira.png'
import keyboard from '../../assets/teclado.png'
import monitor from '../../assets/monitor.png'
import Botton from './botton/botton.jsx'
import Subtitle2 from './subtitle/Subtitle.jsx'
import left from '../../assets/setaesquerda.png'
import right from '../../assets/setadireita.png'
import Bottonicon from "./bottonicon/Botton-icon.jsx";
import Phone from '../../assets/phone.png'
import Computer from '../../assets/computer.png'
import SmartWatch from '../../assets/smartwatch.png'
import HeadPhones from '../../assets/headphone.png'
import Gamepad from '../../assets/gamepad.png'
import Casaco from '../../assets/casaco.png'
import Bag from '../../assets/bolsa.png'
import Cooler from '../../assets/cooler.png'
import BookSelf from '../../assets/criadomudo.png'
import Banner from "../../assets/banner.png"
import Bannergrid from './gridbanner/Banner.jsx'
import services from "../../assets/Services.png"
import services1 from "../../assets/Services1.png"
import services2 from "../../assets/Services2.png"
import Topic from "./topic/Topic.jsx";


function Hero(){
    return(
        <div className={style.hero}>
            <img className={style.imgphone} src={hero} alt="imagem promocional celular"></img>
            <div className={style.sectionTime}>
                <Subtitle/>
                <div className={style.cards}>
                    <Cardsell title='HAVIT HV-G92 Gamepad' imgSrc={control} alt="controle video game" free='-40%' price='$120' pricedel='$160' numberstar='88'/>
                    <Cardsell title='AK-900 Wired Keyboard' imgSrc={keyboard} alt="controle video game" free='-35%' price='$960' pricedel='$1160' numberstar='75'/>
                    <Cardsell title='IPS LCD Gaming Monitor' imgSrc={monitor} alt="controle video game" free='-30%' price='$370' pricedel='$400' numberstar='99'/>
                    <Cardsell title='S-Series Comfort Chair' imgSrc={chair} alt="controle video game" free='-25%' price='$375' pricedel='$400' numberstar='99'/>
                </div>
                <Botton desc='View All Products'/>
            </div>
            <div className={style.section}>
                <Subtitle2 title='Browse By Category' subtitle='Categories'/>
                <div>
                    <img src={left} alt="seta para direita" />
                    <img src={right} alt="seta para direita" />
                </div>
            </div>
            <div className={style.cardsicons}>
                <Bottonicon desc='Phones' srcIcon={Phone}/>
                <Bottonicon desc='Computers' srcIcon={Computer}/>
                <Bottonicon desc='SmartWatch' srcIcon={SmartWatch}/>
                <Bottonicon desc='Camera' srcIcon={Phone}/>
                <Bottonicon desc='HeadPhones' srcIcon={HeadPhones}/>
                <Bottonicon desc='Gaming' srcIcon={Gamepad}/>
            </div>
            <div className={style.section}>
                <Subtitle2 title='Best Se lling Products' subtitle='This Month' />
                <div>
                    <img src={left} alt="seta para direita" />
                    <img src={right} alt="seta para direita" />
                </div>
            </div>
            <div className={style.cards}>
                <Cardsell title='The north coat' imgSrc={Casaco} alt="controle video game"  price='$260' pricedel='$360' numberstar='65'/>
                <Cardsell title='Gucci duffle bag' imgSrc={Bag} alt="controle video game"  price='$960' pricedel='$1160' numberstar='65'/>
                <Cardsell title='RGB liquid CPU Cooler' imgSrc={Cooler} alt="controle video game"  price='$160' pricedel='$170' numberstar='65'/>
                <Cardsell title='Small BookSelf' imgSrc={BookSelf} alt="controle video game"  price='$360'  numberstar='65'/>
            </div>
            <img className={style.imgphone} src={Banner}></img>
            <div className={style.section}>
                <Subtitle2 title='Explore Our Products' subtitle='Our Products'/>
                <div>
                    <img src={left} alt="seta para direita" />
                    <img src={right} alt="seta para direita" />
                </div>
            </div>
            <div className={style.cards}>
                <Cardsell title='The north coat' imgSrc={Casaco} alt="controle video game"  price='$260' pricedel='$360' numberstar='65'/>
                <Cardsell title='Gucci duffle bag' imgSrc={Bag} alt="controle video game"  price='$960' pricedel='$1160' numberstar='65'/>
                <Cardsell title='RGB liquid CPU Cooler' imgSrc={Cooler} alt="controle video game"  price='$160' pricedel='$170' numberstar='65'/>
                <Cardsell title='Small BookSelf' imgSrc={BookSelf} alt="controle video game"  price='$360'  numberstar='65'/>
            </div>
            <div className={style.cards}>
                <Cardsell title='The north coat' imgSrc={Casaco} alt="controle video game"  price='$260' pricedel='$360' numberstar='65'/>
                <Cardsell title='Gucci duffle bag' imgSrc={Bag} alt="controle video game"  price='$960' pricedel='$1160' numberstar='65'/>
                <Cardsell title='RGB liquid CPU Cooler' imgSrc={Cooler} alt="controle video game"  price='$160' pricedel='$170' numberstar='65'/>
                <Cardsell title='Small BookSelf' imgSrc={BookSelf} alt="controle video game"  price='$360'  numberstar='65'/>
            </div>
            <Botton desc='View All Products'/>
            <div className={style.section}>
                <Subtitle2 title='New Arrival' subtitle='Featured'/>
            </div>
            <Bannergrid/>
            <div className={style.topics}>
                <Topic src={services} title='FREE AND FAST DELIVERY' text='Free delivery for all orders over R$140'/>
                <Topic src={services1} title='24/7 CUSTOMER SERVICE' text='Friendly 24/7 custumer support'/>
                <Topic src={services2} title='MONEY BACK GUARANTEE' text='We reurn money within 30 days'/>
            </div>
        </div>
    )
}

export default Hero;