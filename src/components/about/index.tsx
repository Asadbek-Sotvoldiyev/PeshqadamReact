import React from "react";
import Container from "../container";

const About: React.FC = () => {
  return (
    <div
      className="relative bg-gradient-to-t from-[#01434F] to-[#029AB5] bg-contain bg-bottom bg-no-repeat text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-end justify-end gap-8 my-[50px]"
      style={{
        backgroundImage:
          "url('/bg4.png'), linear-gradient(to bottom, #01434F, #029AB5)",
      }}
    >
      <Container className="w-[70%] mr-[60px]">
        <h2 className="font-cinzel font-bold text-primary text-middleSize mb-6">
          SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF
        </h2>
        <ul className="text-cormorantSmall mb-6 font-cormorant">
          <li className="flex items-center">
            <img src="/naqshcha.png" alt="" /> Oʻrta Osiyo va Qozoqiston
            musulmonlari diniy boshqarmasining muftiyi
          </li>
          <li className="flex items-center">
            <img src="/naqshcha.png" alt="" /> Islom ulamolari mualliflaridan
            biri
          </li>
          <li className="flex items-center">
            <img src="/naqshcha.png" alt="" /> Mashhur olim va Balxdan chiqqan
            shayxlar bilan aloqada boʻlgan
          </li>
          <li className="flex items-center">
            <img src="/naqshcha.png" alt="" /> Shayx Muhammad Sodiq Muhammad
            Yusuf Jamoatul Tabligh Tarkiya Akademiyasini tashkil qilgan
          </li>
        </ul>

        <div className="flex gap-8 text-cormorantSmall font-cormorant">
          <div>
            <p>Maqolalar</p>
            <p className="font-cinzel font-bold text-primary text-middleSize">
              30
            </p>
          </div>
          <div>
            <p>Kitoblar</p>
            <p className="font-cinzel font-bold text-primary text-middleSize">
              25
            </p>
          </div>
          <div>
            <p>Risolalar</p>
            <p className="font-cinzel font-bold text-primary text-middleSize">
              15
            </p>
          </div>
        </div>
      </Container>
      {/* image */}
      <img
        src="/chap.png"
        alt="shayx"
        className="absolute bottom-[-40px] left-60 mx-auto sm:w-1/4 md:w-1/4 z-10"
      />
    </div>
  );
};

export default About;
