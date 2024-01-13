import "../assets/css/Layout.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Botonwhatsapp from "./Botonwhatsapp"




export default function Layout(props) {
  const {children}=props
  return (
    <>
      <Header></Header>
        {children}
      <Botonwhatsapp></Botonwhatsapp>
      <Footer></Footer>


    </>
  )
}

