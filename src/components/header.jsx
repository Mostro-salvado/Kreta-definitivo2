import "../assets/css/Header.css"
import { Link } from "react-router-dom";
import Logo from "../assets/statics/Logo Kreta_Vertical_con transparencia.png"


export default function Header() {
    return (
        <>
            <div className="container">
                <img src={Logo} alt="Logo Kreta" className="Logokreta"/>
                <nav className="nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/audiovisual">Audiovisual</Link>
                    <Link className="nav-link" to="/fotografia">Fotografía</Link>
                </nav>
            </div>
        </>
    )
}
