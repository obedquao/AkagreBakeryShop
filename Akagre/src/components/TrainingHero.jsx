import React, { useState, useEffect } from 'react';
import './TrainingHero.css';
import { motion } from 'framer-motion';

export default function TrainingHero() {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    '/images/traininghero/traininghero1.webp',
    '/images/traininghero/traininghero2.webp',
    '/images/traininghero/traininghero3.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="training-hero">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="traininghero-overlay"></div>

      {/* Content */}
      <motion.div className="traininghero-content"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}>

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}>
          TURN YOUR PASSION<br />
          INTO A PROFESSION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>
            Join our hands-on baking classes and discover how to create, decorate, and grow your craft</motion.p>
        <motion.button  className="btn-join" onClick={() => window.open('https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20would%20like%20to%20join%20your%20next%20baking%20class', '_blank')}
           initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}>
          <span className="icon">🎓</span> JOIN OUR NEXT CLASS
        </motion.button>
      </motion.div>

      
    </section>
  );
}