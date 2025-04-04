import React from "react";
import Container from "../container";

const About2: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-8 md:py-12 px-6 md:px-16 flex flex-col md:flex-row items-end justify-end gap-8 my-[0px]"
      style={{
        backgroundImage:
          "url('/background.png')",
      }}
    >
      <Container className="lg:w-[70%] lg:mr-[20px]">
        <h2 className="font-cinzel font-bold text-primary mb-6 text-cormorantSmall md:text-cormorantBig lg:text-middleSize">
          SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF
        </h2>
        <ul className="sm:text-cormorantSmall lg:text-cormorantBig mb-6 font-cormorant">
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

      <img
        src="/bigLogo.png"
        alt="shayx"
        className="absolute bottom-[-25px] left-40 mx-auto sm:w-1/4 md:w-[36%] z-10 hidden lg:block"
      />
    </div>
  );
};

export default About2;
