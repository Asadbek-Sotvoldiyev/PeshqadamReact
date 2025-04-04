import React from "react";
import Container from "../container";
import Button from "../button";
import Title from "../title";

const AboutUs: React.FC = () => {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-8 md:py-12 lg:mt-[50px]">
      {/* Left Side - Text */}
      <div className="md:w-1/2">
        <Title className="text-secondary sm:text-cormorantSmall md:text-cormorantBig lg:text-middleSize">BIZ HAQIMIZDA</Title>
        <p className="text-qora font-cormorant mb-6 sm:text-cormorantSmall lg:text-cormorantBig">
          Shayx Muhammad Sodiq Muhammad Yusuf rahimahulloh hazratlarining umr yo‘llari, 
          qoldirgan asarlari va undagi shiorlari, bergan saboq va nasihatlariga nazar 
          soladigan bo‘lsak, butun e’tiborlar xalqimiz ma’rifatiga qaratilganiga guvoh bo‘lamiz.
        </p>
        <Button>Batafsil</Button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img 
          src="/peshqadam.png" 
          alt="Peshqadam Karvoni" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </Container>
  );
};

export default AboutUs;
