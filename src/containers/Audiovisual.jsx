import "../assets/css/Audiovisual.css"
import DetalleAudiovisual from "../components/DetalleAudiovisual"
import DataAudiovisual from "../DataAudiovisual"

export default function Audiovisual() {

  const dataAudiovisualList= DataAudiovisual.map(data => {
    return <DetalleAudiovisual key={data.titulo} titulo={data.titulo} video={data.video} texto={data.texto}/>
})

  return (
    <>
      <div className="container-detalle-audiovisual">
        {dataAudiovisualList}
      </div>
    </>
  )
}
