import "./menu.css"
import Lottie from "lottie-react"
import { motion } from "framer-motion"
import banner from "../assets/banner.json"
import goldcake from "../assets/products/goldcake.jpg"
import Product from "../components/product.jsx"
import vanilla from "../assets/icons/vanilla.png"
import chocolate from "../assets/icons/chocolate-bar.png"
import redVelvet from "../assets/icons/red-velvet.png"
import carrot from "../assets/icons/carrot.png"
import orange from "../assets/icons/orange.png"
import Cupcake from "../components/capcake.jsx"

function Menu (){

    return(
        <section className="menu" id="Menu" >

            <motion.div 
            className="menu-title"
             initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}>
                <h2>OUR MENU</h2>
                <p>Basic cakes are simple and elegant, featuring minimal decoration and limited customization options.
                    Premium cakes offer more elaborate designs, with intricate details such as handcrafted flowers, textured patterns, or sculpted elements for a refined presentation.
                    For premium cakes, please call or WhatsApp us on 024 009 1201
                </p>

            </motion.div>

            <motion.div className="divider"
              initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
            </motion.div>


            <motion.div 
            className="flavors"
              initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}>
                <h3>FLAVORS AVAILABLE:</h3>
                <ul>
                    <li><img src={vanilla} alt="Vanilla" /> Vanilla</li>
                    <li><img src={chocolate} alt="Chocolate" /> Chocolate</li>
                    <li><img src={redVelvet} alt="Red Velvet" /> Red Velvet</li>
                    <li><img src={carrot} alt="Carrot" /> Carrot</li>
                    <li><img src={orange} alt="Orange" /> Orange</li>
                </ul>
            </motion.div>
            <motion.div 
            className="lottie-banner"
             initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}>
                <Lottie animationData={banner} loop={false} />
            </motion.div>

            <div className="prodTL">
                <p>Cup<span className="color-brown">Cakes</span></p>
            <div className="product-list">
                <Cupcake 
                    image="/images/products/6cupcake.webp" price="GH₵ 150" product="6 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Cupcakes"/>
                <Cupcake
                    image="/images/products/12cupcake.webp" price="GH₵ 300" product="12 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20Cupcakes"/>
                <Cupcake
                    image="/images/products/24cupcake.webp" price="GH₵ 500" product="24 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20Cupcakes"/>
                <Cupcake
                    image="/images/products/minicake.webp" price="GH₵ 150" product="Mini Cake" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Mini%20Cake"/>
                <Cupcake
                    image="/images/products/bw2.webp" price="GH₵ 200" product="Bento cake with 2 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Bento%20cake%20with%202%20cupcakes"/>
                <Cupcake
                    image="/images/products/bw5.webp" price="GH₵ 300" product="Bento cake with 5 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Bento%20cake%20with%205%20cupcakes"/>
                <Cupcake
                    image="/images/products/bw8.webp" price="GH₵ 350" product="Bento cake with 8 cupcakes" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Bento%20cake%20with%208%20cupcakes"/>
                <Cupcake
                    image="/images/products/cakeparfait.webp" price="GH₵ 50" product="Cake Parfait" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%20Cake%20Parfait"/>

            </div>
            </div>

               <div className="prodTL">
                <p>Cakes<span className="color-brown">(2-Layer)</span></p>
            <div className="product-list">
                <Product 
                    image="/images/products/5inch.webp" price="GH₵ 300" layers="2" inches="5" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%202-layer,%205%20inches%20cake"/>
                 <Product 
                    image="/images/products/6inch.webp" price="GH₵ 350" layers="2" inches="6" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%202-layer,%206%20inches%20cake"/>
                    <Product 
                    image="/images/products/7inch.webp" price="GH₵ 450" layers="2" inches="7" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%202-layer,%207%20inches%20cake"/>
                    <Product 
                    image="/images/products/8-inch.webp" price="GH₵ 550" layers="2" inches="8" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%202-layer,%208%20inches%20cake"/>
            </div>
            </div>

               <div className="prodTL">
                <p>Cake<span className="color-brown">(3-Layer)</span></p>
            <div className="product-list">
                <Product 
                    image="/images/products/3lay6.webp" price="GH₵ 300" layers="3" inches="6" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%203-layer,%206%20inches%20cake"/>
                 <Product 
                    image="/images/products/3lay7.webp" price="GH₵ 300" layers="3" inches="7" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%203-layer,%207%20inches%20cake"/>
                    <Product 
                    image="/images/products/3lay8.webp" price="GH₵ 300" layers="3" inches="8" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%203-layer,%208%20inches%20cake"/>
                    <Product 
                    image={goldcake} price="GH₵ 300" layers="3" inches="10" link="https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20buy%20a%203-layer,%2010%20inches%20cake"/>
            </div>
            </div>

              <div className="menu-footer">
                <p><span className="red-note">NOTE!!: </span>
                These are only few products. For custom cakes, enquiries, pastries or food baskets</p>
                <p className="rednote-contact">Call or whatsApp us on: 0240091201</p>
              </div>

        </section>
    )

}
export default Menu;
   