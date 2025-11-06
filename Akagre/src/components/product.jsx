import "./product.css"
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineLayers } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function Product({ image, price, layers, inches, link }) {

    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="product-item" onClick={() => window.open(link, '_blank')}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}>

      <img src={image} alt="Product Image" loading="lazy" />

      <h3>{price}</h3>

      <p><BsArrowsFullscreen size={10}/> {inches} inches 
       <span className="layers"><MdOutlineLayers size={12} /> {layers} layers</span></p>
      <button> {isHovered ? <><FaWhatsapp size={14} /> Click to buy on whatsapp
          </> : "Click to Order"}</button>
    </div>
  )
}
export default Product;