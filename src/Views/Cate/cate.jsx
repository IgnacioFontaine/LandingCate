import "./cate.css"
import Hero from "../../Components/Hero/hero";
import Groups from "../../Components/Groups/groups";
import cateImage from "../../assets/LogoBlancoCruz.png"

const Cate = () => {

  const cate_groups =
    [{ id: 1, nombre: "CAFEDI" },
      { id: 2, nombre: "TALOCU" },
      { id: 3, nombre: "SENOGUI" },
      { id: 4, nombre: "CAMIFE" },
      { id: 5, nombre: "SOSACRU" },
      { id: 6, nombre: "TUFEGUI" },
      { id: 7, nombre: "REPADI" },
      { id: 8, nombre: "REPADI" },
      { id: 9, nombre: "REPADI" },
      { id: 10, nombre: "REPADI" },
      { id: 11, nombre: "REPADI" },
      { id: 12, nombre: "CAMIFE" },]

  return (
    <section className="cate-container">
      <Hero title={"Grupos Cate"} imagen={cateImage} />
      <Groups grupos={cate_groups} />
    </section>
  )
}

export default Cate;