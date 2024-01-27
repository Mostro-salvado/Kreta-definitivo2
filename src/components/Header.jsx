import "../assets/css/Header.css"
import { Link ,useNavigate } from "react-router-dom";
import Logo from "../assets/statics/Logo Kreta (colores RGB).svg"



export default function Header() {
    const Navigate = useNavigate();

    const redirectToHome = () => {
        Navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const redirectToAudiovisual = () => {
        Navigate("/audiovisual");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const redirectToFotografia = () => {
        Navigate("/fotografia");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const redirectToSomos = () => {
        Navigate("/");
        setTimeout(() => {
            const somosElement = document.getElementById("Somos-Kreta");
            if (somosElement) {
                somosElement.scrollIntoView({ behavior: "smooth" });
            }
            }, 100);
        };


    return (
        <>
            <div className="header">
                <div className="container">
                <img
                    src={Logo}
                    alt="Logo Kreta"
                    className="Logokreta"
                    onClick={redirectToHome}
                    style={{ cursor: "pointer" }}/>
                    <nav className="nav">
                        <span className="nav-link" onClick={redirectToHome}>Home</span>
                        <span className="nav-link" onClick={redirectToAudiovisual}>Audiovisual</span>
                        <span className="nav-link" onClick={redirectToFotografia}>Fotografía</span>
                        <span className="nav-link" onClick={redirectToSomos}>Somos Kreta</span>
                    </nav>
                </div>
            </div>
        </>
    )
}
