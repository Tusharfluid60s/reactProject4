import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
  
} from "react-icons/ai";


const img= "https://cdn-icons-png.flaticon.com/512/149/149071.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
        />

        <h2>Tushar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
         
          
          <a href="https://instagram.com/_tushar_kumar_______" target={"_blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
