import React from "react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../container";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#01434F] to-[#029AB5] text-white py-10 bg-no-repeat bg-contain bg-bottom"
      style={{ backgroundImage: "url('footer.png'), linear-gradient(to bottom, #01434F, #029AB5)" }}>
      
      <Container className="flex flex-col gap-8">
        {/* Header Text and Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-6 md:gap-10">
          <div className="text-lg font-bold font-cinzel text-sariq max-w-xs">
            PESHQADAM KARVONIDA O‘Z QOBILIYATINGIZ
          </div>
          <div>
            <img src="/logo1.svg" alt="Peshqadam Karvoni" className="h-14 md:h-16" />
          </div>
          <div className="text-lg font-bold font-cinzel text-sariq max-w-xs">
            BILAN JAMİYAT RİVOJIGA HİSSA QO‘SHİNG!
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 font-cormorant text-lg">
          <Link to="/" className="hover:underline">Bosh sahifa</Link>
          <Link to="/yangiliklar" className="hover:underline">Yangiliklar</Link>
          <Link to="/yonalishlar" className="hover:underline">Yo‘nalishlar</Link>
          <Link to="/videolar" className="hover:underline">Videolar</Link>
          <Link to="/aloqa" className="hover:underline">Aloqa</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl md:text-2xl">
          <Link to="/telegram" className="hover:text-gray-300"><FaTelegram /></Link>
          <Link to="/instagram" className="hover:text-gray-300"><RiInstagramFill /></Link>
          <Link to="/facebook" className="hover:text-gray-300"><FaFacebookF /></Link>
          <Link to="/youTube" className="hover:text-gray-300"><FaYoutube /></Link>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm text-[#57A9B8]">
          Toshkent 2025
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
