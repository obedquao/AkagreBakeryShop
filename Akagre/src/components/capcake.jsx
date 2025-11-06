import "./product.css"
import { RiCake3Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function Cupcake({ image, price,  product, link }) {

    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="product-item" onClick={() => window.open(link, '_blank')}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}>

      <img src={image} alt="Product Image" loading="lazy" />

      <h3>{price}</h3>

      <p><RiCake3Fill size={10}/> {product} </p>
      <button> {isHovered ? <><FaWhatsapp size={14} /> Click to buy on whatsapp
          </> : "Click to Order"}</button>
    </div>
  )
}
export default Cupcake;