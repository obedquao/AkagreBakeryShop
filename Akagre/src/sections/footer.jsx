   import "./footer.css"
  import { IoCall } from "react-icons/io5";
  import { FaLocationDot } from "react-icons/fa6";
  import { MdArrowOutward } from "react-icons/md";

   
   function Footer(){


    return(
      <section className="footer" id="Contact">
         <div className="footerimage">
            <img src="./images/footerimage.webp" alt="footer image"/>
         </div>
         <div className="footer-content">
            <div className="footer-contact-nav">
                <div className="footer-contact">
                     <h4>Contact</h4>
                     <p><IoCall /> 024 009 1201</p>
                     <p><FaLocationDot /> Mallam Junction, Accra</p>
                     <button onClick={() => window.open('https://www.google.com/maps/dir//George+W.+Bush+Hwy,+Accra/@5.5727663,-0.3666102,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xfdf994d0409354d:0xe081c5954155dc8!2m2!1d-0.2842082!2d5.572772?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D', '_blank')}>
                        Google maps <MdArrowOutward /></button>
                </div>
                  <div className="footer-navigation">
                     <h4>Navigation</h4>
                     <ul className="footer-links">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Training">Training</a></li>
                        <li><a href="#Contact">Contact Us</a></li>
                     </ul>
                  </div>
            </div>
           <div className="socials">
            <h3>Follow our socials</h3>
            <div className="socials-icons">
                <a href='https://www.tiktok.com/@akagrebakeryshop28?is_from_webapp=1&sender_device=pc'><img src="images/icons/tiktok.png"/></a>
            <a href='https://www.snapchat.com/add/akagre30'><img src="images/icons/snapchat.png"/></a>
            <a href='https://https://www.instagram.com/akagres_bakes?igsh=OWF5OTUxcnN3cHQw/'><img src="images/icons/instagram.png"/></a>
            <a href='https://wa.me/233240091201'><img src="images/icons/whatsapp.png"/></a> 
            </div>
           

           </div>
         </div>
        
      </section>
    
  );
    
   }
      export default Footer