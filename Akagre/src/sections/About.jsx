import { useState } from 'react';
import './About.css'
import { motion } from 'framer-motion';
import founder from '../assets/figfounder.jpg'
import { HeartHandshake,PartyPopper,ChevronLeft, ChevronRight } from 'lucide-react';
import { FaRegMoneyBill1} from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";



function About() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slide1.webp",
      alt: 'Baking class session',
     
    },
    {
      image: "/images/Slide2.webp",
      alt: 'Baking class session 2'
    },
    {
      image: "/images/slide3.webp",
      alt: 'Baking class session 3'
    }, 
    {
      image: "/images/slide4.webp",
      alt: 'Baking class session 4'
    },
    {
      image: "/images/slide5.webp",
      alt: 'Baking class session 5'
    },
    {
      image: "/images/slide6.webp",
      alt: 'Baking class session 6'
    }
  ];

    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


    return(
        <section className="about" id='About'>
            
      {/* About Description */}
      <motion.div 
      className="white-intro"
      initial={{ opacity: 0, y:50}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:1, ease: "easeOut"}}
      viewport={{ once: true }}
      >
              <motion.div 
              className="about-intro"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}>
                          <p className="about-text">
                            <span>Akagre Bakery is where passion meets perfection in
                            every bite. Founded by Richmond Akagre, our bakery
                            has become one of Accra’s favorite spots for delicious
                            cakes, pastries, and custom bakes that bring smiles to every 
                            occasion. Beyond just baking, we’re dedicated to making quality 
                            treats affordable for everyone and to inspiring the next generation of 
                            bakers through our hands-on training programs.</span> Whether you’re here for a 
                            special cake, a tasty snack, or to learn the art of baking, we are delighted 
                            to be part of your story.  
                          </p>
              </motion.div>

            {/* Stats */}
          <motion.div 
          className="stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}>
                  <div className="stat-item">
                      <h3 className="stat-number">1000+</h3>
                      <p className="stat-label">Happy Customers</p>
                  </div>
                <div className="stat-item">
                  <h3 className="stat-number">40+</h3>
                  <p className="stat-label">Trained Students</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
          </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
      className="mission-section"
       initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}>


        <h2 className="section-title">OUR MISSION</h2>
        <p className="mission-subtitle">Our mission is to provide quality, delicious bakery products to create joyful and happy moments in people’s lives and help reduce unemployment by supporting aspiring bakers and young talents</p>

        <div className="mission-cards">
          <motion.div 
          className="mission-card"
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}>
            <div className="mission-icon">
            <FaRegMoneyBill1 color="#895129" size={35}/>
            </div>
            <h4>AFFORDABILITY</h4>
            <p>Ensuring everyone in Accra can enjoy delicious treats without <br />worrying about high prices.</p>
          </motion.div>

          <motion.div 
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 , delay: 0.2,ease: "easeOut"}}
              viewport={{ once: true }}
          >
            <div className="mission-icon">
              <FaFireAlt color="#895129" size={35}/>
              </div>
            <h4>DELIVERED FRESH</h4>
            <p>Baking the tastiest and freshest cakes and pastries made <br />from quality ingredients every single day.</p>
          </motion.div>


          <motion.div
           className="mission-card"
           initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 , delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}>
            <div className="mission-icon">
              <HeartHandshake size={35} color="#895129" /></div>
            <h4>EMPOWERMENT</h4>
            <p>Training and mentoring passionate people so they can start <br /> and grow their own successful bakeries.</p>
          </motion.div>


          <motion.div 
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}>
            <div className="mission-icon"><PartyPopper size={35} strokeWidth={2.25} color="#895129" /></div>
            <h4>CELEBRATION</h4>
            <p>Making every birthday, wedding, and event extra special with beautifully crafted cakes and pastries.</p>
          </motion.div>


          <motion.div 
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay:0.8,ease: "easeOut" }}
              viewport={{ once: true }}>
            <div className="mission-icon"><IoIosPeople color="#895129" size={35}/></div>
            <h4>COMMUNITY</h4>
            <p>Innovation and unique flavors in every creation</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Founder Section */}
  <div className="founder-section">
        <motion.div 
        className="founder-content"
         initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <h3 className="founder-title">Meet the founder of Akagre BAKERY SHOP</h3>
          <p className="founder-text">
            Richmond Akagre Nsogurime is the founder and driving force behind AkagreBakeryShop.
             An award-winning entrepreneur and a remarkably self-taught baker, Richmond launched his journey in 2020 after a single homemade birthday 
             cake sparked a deep passion for the craft. With no formal training, he skillfully honed his expertise using online resources, transforming his 
             creative vision into a celebrated local brand.<br />
            Today, AkagreBakeryShop is renowned for its exceptional quality, accessible pricing, and its mission to empower the community. Richmond's practical training programs have equipped numerous aspiring bakers to launch their own businesses, cementing his legacy as both a master baker and a dedicated mentor. His story is a powerful testament to how innovation, dedication, and self-belief can build a remarkable enterprise from the ground up.
          </p>
          
        </motion.div>

        <motion.div 
        className="founder-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <img src={founder} alt="Richmond Akagre Nsogurime" loading="lazy" />
        </motion.div>
      </div>
      

      {/* Slider Section */}

      <motion.div 
      className="slider-container"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} >
        {/* Slides */}
        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={slide.alt} loading="lazy"/>
            </div>
          ))}
        </div>
           {/* Navigation Buttons */}
        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          <ChevronLeft size={32} color="#895129" />
        </button>
        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          <ChevronRight size={32} color="#895129" />
        </button>

        {/* Dot Indicators */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </motion.div>

    </section>
  )
}

export default About;