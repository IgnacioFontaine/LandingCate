import "./description.css"
import laCateLogo from "../../assets/LogoBlancoCruz.png"

function Description() {
  
  return (
    <div className="description">
      <section  id="description-cate" className="description-cate"  >
          <h2 >¿Qué es la Cate?</h2>
          <p className="description-parragraph" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto, magnam ipsum aliquid voluptates fugiat quo velit ab necessitatibus praesentium obcaecati et cupiditate placeat ea aut optio voluptatem odit. Sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati fugit accusantium aspernatur tempore suscipit, eligendi molestiae modi nostrum quas reiciendis excepturi perferendis eos error asperiores unde. Aut, rem placeat?
        </p>
      </section>
      <section className="description-logo">
        <img src={laCateLogo} alt="La Cate logo" />
      </section>
    </div>
  )
}

export default Description;