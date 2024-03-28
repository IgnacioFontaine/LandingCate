import "./cate.css"
import Hero from "../../Components/Hero/hero";
import Groups from "../../Components/Groups/groups";
import cateImage from "../../assets/LogoBlancoCruz.png"

const Cate = () => {

  const cate_groups =
    [ { id: 1, nombre: "CAFEDI", significado: "Construyendo Amistad en la Fe de Dios" },
      { id: 2, nombre: "NUCAVI", significado: "Nuestro Camino, Verdad y Vida" },
      { id: 3, nombre: "TALOCU", significado: "Testigos de tu Amor y Locura" },
      { id: 4, nombre: "TESANTU", significado: "Testigos del Santo Espíritu" },
      { id: 5, nombre: "SENOGUI", significado: "El Señor nos Guía" },
      { id: 6, nombre: "CONJUFE", significado: "Contagiamos Juntos la Fe" },
      { id: 7, nombre: "FEJUDI", significado: "Felices Junto a Dios" },
      { id: 8, nombre: "UCOFE", significado: "Unidos Compartiendo la Fe" },
      { id: 9, nombre: "CAMIFE", significado: "Caminantes en la Vida y la Fe" },
      { id: 10, nombre: "AMIDIOS", significado: "Admirando la Humildad de Dios" },
      { id: 11, nombre: "SOSACRU", significado: "Soldados de la Santa Cruz" },
      { id: 12, nombre: "TUFEGUI", significado: "Tu Fe nos Guiará" },
      { id: 13, nombre: "SINADI", significado: "Sinceros ante el Amor de Dios" },
      { id: 14, nombre: "JUCADI", significado: "Juntos en el Camino de Dios" },
      { id: 15, nombre: "MACADI", significado: "Con María Caminamos hacia Dios" },
      { id: 16, nombre: "REPADI", significado: "Reunidos para Dios" },
      { id: 17, nombre: "EMAUS", significado:"En manos de Jesús" },]

  return (
    <section className="cate-container">
      <Hero title={"Grupos Cate"} imagen={cateImage} />
      <Groups grupos={cate_groups} />
    </section>
  )
}

export default Cate;