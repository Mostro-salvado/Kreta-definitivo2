import "../assets/css/Footer.css"
import { Link } from 'react-router-dom';
import Instagram from "../assets/statics/instagram.png"
import Linkedin from "../assets/statics/linkedin.png"


export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="social">
                        <Link to="https://www.linkedin.com/company/kreta-dm/"><img src={Linkedin} className='linkedin' alt="Linkedin"/></Link>
                        <Link to="https://www.instagram.com/kreta_dm?igsh=ZjI0YjNmOWM5OA%3D%3D"><img src={Instagram} className='instagram' alt="Instagram"/></Link>
                    </div>
                    <p className="copyright">Somos Kreta</p>
                </div>
            </div>
        </>
    )
}
