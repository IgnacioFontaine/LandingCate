import Hero from "../../Components/Hero/hero";
import "./iniciate.css"
import iniciateImage from "../../assets/LogoBlancoCruz.png"
import Groups from "../../Components/Groups/groups";

const Iniciate = () => {
  const iniciate_groups =
    [{ id: 1, nombre: "REPADI" },
      { id: 2, nombre: "MACADI" },
      { id: 3, nombre: "HELAFE" },
      { id: 4, nombre: "FRACODI" },
      { id: 5, nombre: "REPADI" },
      { id: 6, nombre: "REPADI" },
      { id: 7, nombre: "REPADI" },
      { id: 8, nombre: "REPADI" },
      { id: 9, nombre: "REPADI" },
      { id: 10, nombre: "REPADI" },
      { id: 11, nombre: "REPADI" },
      { id: 12, nombre: "REPADI" },]

  return (
    <section className="iniciate-container">
      <Hero title={"Grupos Iniciate"} imagen={iniciateImage} />
      <Groups grupos={iniciate_groups} />
    </section>
  )
}

export default Iniciate;