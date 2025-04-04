import React from "react";
import Container from "../container";
import Button from "../button";

const Showcase: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#01434F] to-[#029AB5] bg-contain bg-bottom bg-no-repeat text-white py-12 sm:py-16 lg:py-20 min-h-[350px] md:min-h-[500px]" style={{ backgroundImage: "url('bg1.png'), linear-gradient(to bottom, #01434F, #029AB5)" }}>
      <div
        className="absolute left-80 bottom-20 right-0 w-1/4, h-1/4 bg-contain bg-no-repeat bg-center z-10 hidden lg:block"
        style={{ backgroundImage: "url('/bg2.png')" }}
      ></div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text Section */}
          <div>
            <h1 className="font-cinzel font-bold text-primary mb-6 text-cormorantSmall md:text-cormorantBig lg:text-biggest">
              PESHQADAM KARVONI
            </h1>
            <p className="sm:text-cormorantSmall lg:text-cormorantBig mb-6 font-cormorant">
              Shayx Muhammad Sodiq Muhammad Yusuf rahimahullohning muborak
              hayotlari va yorqin ilm yo‘llarini davom ettirish maqsadida qadam
              tashlang!
            </p>
            <Button>A’zo bo‘lish</Button>
          </div>

          {/* Image Section */}
          <img src="/shayx.png" alt="shayx" className="absolute bottom-[-100px] right-60 mx-auto sm:w-1/4 md:w-1/4 z-10 hidden md:block" />
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
