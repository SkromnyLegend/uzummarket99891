import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Fotter.css"
function Footer() {
    const {pathname} = useLocation()

    if(pathname.includes("login")){
        return <></>
    }
  return (
    <div className='container'>
        <br />
       <div className="Footer">
        <button className='footerbtn'>Показать ещё 20</button>
            <div className='footer'>
            <ul className="footeritems">
                <li className="footerliitems"><h2>О нас</h2></li>
                <br />
                <li className="footerliitems">Пункты выдачи</li>
                <li className="footerliitems">Вакансии</li>
            </ul>
            <ul className="footeritems">
                <li className="footerliitems"><h2>Пользователям</h2></li>
                <br />
                <li className="footerliitems">Связаться с нами</li>
                <li className="footerliitems">Вопрос - Ответ</li>
            </ul>
            <ul className="footeritems">
                <li className="footerliitems"><h2>Для предпринимателей</h2></li>
                <br />
                <li className="footerliitems">Продавайте на Uzum</li>
                <li className="footerliitems">Вход для продавцов</li>
            </ul>
            <ul className="footeritems2">
                <li className="footerliitems"><h2>Скачать приложение</h2></li>
                <br />
                <div className="gogo">

                <li className="footerliitems"><FaApple className="apple"/> AppStore</li>
                <li className="footerliitems"><FaGooglePlay className="gogleplay"/> Google Play</li>
                </div>
                <br />
                <li className='footerliitems'>Uzum в соцсетях</li>

                <div className="instagrauzum">
                <li className='footerliitems1'><FaInstagram className="insta"/></li>
                <li className='footerliitems1'><FaTelegram className="teg"/></li>
                <li className='footerliitems1'><FaYoutube className="yt"/></li>
                <li className='footerliitems1'><FaFacebookSquare className="fc"/></li>
                </div>
               
            </ul>
            </div>
       </div>
       <div className="footer__inner">
       <p>Соглашение о конфиденциальности</p>
       <p>Пользовательское соглашение</p>
       <p>«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
       </div>
    </div>
  )
}
export default Footer