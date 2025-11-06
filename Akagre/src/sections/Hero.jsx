import { motion } from "motion/react"
import './Hero.css';



function Hero() {
    return (
        <section className="hero"  id='Home'>
            
            <div className='hero-overlay'></div>
            <motion.div 
            className="hero-content"
            initial={{ opacity:0, y: 50}}
            animate={{ opacity:1, y: 0}}
            transition={{ duration: 1.2, ease: "easeOut"  }}
            >
                <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    Fresh Bakes. <br/>
                    Sweet Deals. Real Skills.
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}>
                    Freshly Baked Cakes, pastries and  Gift Baskets are available <br/>
                    Akagre Bakery Brings Sweetness to Your Table and Skills to Your Hands
                </motion.p>


                <motion.div
                 className="hero-buttons"                 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}>
                    <button className="hero-button-primary"  onClick={() => {
                        document.getElementById('Menu').scrollIntoView({ behavior: 'smooth' });
                    }}>Order Now</button>
                    <button className="hero-button-secondary" onClick={() => {
                            document.getElementById('Training').scrollIntoView({ behavior: 'smooth' });
                        }}>Join Our Baking Class</button>
                </motion.div>
                
            </motion.div>
        </section>
    )
}
export default Hero;