import Hero from "../../Components/Hero/hero";
import "./iniciate.css"
import iniciateImage from "../../assets/LogoBlancoCruz.png"
import Groups from "../../Components/Groups/groups";
import Testimonios from "../../Components/Testimonios/testimonios";

const Iniciate = () => {

  const frase = "…si no os volvéis y os hacéis como niños, no entraréis en el reino de los cielos. Mateo 18:3-4"
  const iniciate_groups =
    [ { id: 1, nombre: "HELAFE", significado: "Hermanos en la Fe" },
      { id: 2, nombre: "MIFEDIOS ", significado: "Misioneros de la Felicidad de Dios" },
      { id: 3, nombre: "FRACODI ", significado: "Fraterno Corazón de Jesús" },
      { id: 4, nombre: "COMADI", significado: "Nuestro Corazon en las manos de Dios" },
      { id: 5, nombre: "LUDECRI", significado: "Luces de Cristo" },]
  
  const testimonios_iniciate = [{id:60, nombre:"Tristán Dellavedova", años:"1986 1998" ,experiencia:"La Cate me dió un grupo de amigos  que conservo hasta hoy, con quienes crecí, compartiendo valores, y la experiencia de comunidad en la Fe, o sea, ser Iglesia!"},]

  return (
    <section className="iniciate-container">
      <Hero title={"Grupos Iniciate"} imagen={iniciateImage} frase={frase} />
      <Groups grupos={iniciate_groups} />
      {/* <Testimonios testimonios={testimonios_iniciate} /> */}
    </section>
  )
}

export default Iniciate;