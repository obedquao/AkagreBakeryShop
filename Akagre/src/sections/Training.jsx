import TrainingHero from "../components/TrainingHero";
import "./Training.css";
import Gallery from "./Gallery";
import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import footeranimation from "../assets/footeranimation.json";

function Training() {
  const [showVideo, setShowVideo] = useState(false);
  const lottieRef = useRef();

  const handleMouseEnter = () => lottieRef.current?.playSegments([0, 238], true);

  // Animation variants for reusable smooth entrances
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section id="Training">
      {/* --- Hero Section --- */}
      <TrainingHero />

      {/* --- Program Highlights --- */}
      <motion.div
        className="program-highlight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="program-heading"
          variants={fadeUp}
        >
          Program Highlight
        </motion.h3>

        <div className="program-highlight-contents">
          <motion.div className="program-involves">
            <ul>
              {[
                {
                  title: "Hands-On Practical Training",
                  text: "Learn by doing, from baking techniques to decorating and packaging. Every session gives you real-world skills you can use right away.",
                },
                {
                  title: "Beginner to Professional Levels",
                  text: "Our courses are designed for everyone — whether you’re just starting out or looking to master advanced baking techniques.",
                },
                {
                  title: "Business & Branding Guidance",
                  text: "Go beyond the oven! Learn to price, market, and grow your own bakery brand with confidence.",
                },
                {
                  title: "One-on-One Mentorship",
                  text: "Get personal guidance from Richmond Akagre and other experienced instructors.",
                },
                {
                  title: "Affordable, Flexible Learning",
                  text: "High-quality training at pocket-friendly rates, with schedules that fit your lifestyle.",
                },
                {
                  title: "Certification of Completion",
                  text: "Earn an official certificate to kickstart your baking business.",
                },
                {
                  title: "Community & Support",
                  text: "Join a growing network of passionate bakers who share ideas and opportunities.",
                },
              ].map((item, i) => (
                <motion.li key={i} custom={i} variants={fadeUp}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="next-class"
            variants={fadeUp}
            custom={5}
          >
            <h4>Join our next Class</h4>
            <div className="next-class-container">
              <ul>
                <li className="canceled">Current class: Closed & Ongoing</li>
                <li>Next Class: Monday, 2nd February 2026</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Why Choose Akagre --- */}
      <motion.div
        className="why-choose-akagre"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeUp}>
          Why Choose <span>AkagreBakeryShop?</span>
        </motion.h2>

        <motion.p className="why-p" variants={fadeUp} custom={1}>
          At Akagre Bakery, we make learning fun, creative, and hands-on! Our training
          sessions help you fall in love with baking while gaining real skills to start
          your business or impress loved ones.
        </motion.p>

        <motion.div className="choose-cards" variants={fadeUp} custom={2}>
          {[
            {
              title: "Expert-led Hands on Training",
              text: "Learn directly from Richmond Akagre and other instructors. Every lesson is practical, personalized, and focused on real baking skills.",
            },
            {
              title: "Proven Success & Inspiration",
              text: "Join a community of learners who have gone on to start their own bakeries. Akagre’s training builds confidence and creativity.",
            },
            {
              title: "Quality & Affordability Combined",
              text: "Enjoy top-tier baking education at prices accessible to everyone. Excellence and affordability in one place.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="choose-single-card"
              custom={i}
              variants={fadeUp}
            >
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- Student Reviews --- */}
      <motion.div
        className="what-our"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeUp}>
          What our <br /> <span>Students are saying</span>
        </motion.h2>

        <motion.div
          className="image-video"
          variants={fadeUp}
          custom={1}
        >
          <img
            src="/images/imageplayback2.webp"
            alt="video of what students are saying"
          />
          <button
            className="image-video-btn"
            onClick={() => setShowVideo(true)}
          >
            <FaRegPlayCircle size={111} />
          </button>
        </motion.div>

        {/* --- Popup Modal --- */}
        {showVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="video-container">
              <button
                className="close-btn"
                onClick={() => setShowVideo(false)}
              >
                <IoClose size={32} />
              </button>
              <video
                src="/videos/whatour1.mp4"
                autoPlay
                controls
                className="modal-video"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
      {/* --- Gallery Section --- */}
      <Gallery />

      {/* --- Footer Animation --- */}
      <motion.div
        className="blackback"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="footer-animation"
          onMouseEnter={handleMouseEnter}
        >
          <Lottie
            className="footerlottie"
            lottieRef={lottieRef}
            animationData={footeranimation}
            autoPlay={false}
            loop={false}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Training;
