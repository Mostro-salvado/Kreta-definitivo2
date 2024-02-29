import "../assets/css/Fotografia.css"
import DetalleFotografia from "../components/DetalleFotografia"
import DataFotografia from "../DataFotografia"

export default function Fotografia() {

    const dataFotografiaList= DataFotografia.map(data => {
        return <DetalleFotografia key={data.titulo} titulo={data.titulo} fotografia={data.fotografia} texto={data.texto}/>
    })

    return (
        <>
            <div className="container-detalle-fotografia">
                {dataFotografiaList}
            </div>
        </>
    )
}
