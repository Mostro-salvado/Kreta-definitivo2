import "../assets/css/Ubicacion.css"
import ubicacion from '../assets/statics/Ubicacion.png'

export default function Ubicacion() {
    return (
        <>
            <div className="ubicacion-wraper">
                <p className="texto-descripcion">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repudiandae officiis magni velit ex atque fuga sunt ea totam suscipit harum optio itaque cum voluptatem culpa aperiam, quas animi quod.
                </p>
                <div>
                    <div className="titulo-ubicacion">Nos encontrás acá</div>
                </div>
            </div>
            <div className="mapa">
                <img src={ubicacion} alt="" className="mapa" />
            </div>
        </>
    )
}
