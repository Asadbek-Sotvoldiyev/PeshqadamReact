import React from "react";
import Container from "../container";
import Title from "../title";

const LibraryShowcase: React.FC = () => {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-20 px-8 py-4 md:py-6 lg:mt-[50px]">
      {/* Left Side - Text */}
      <div className="lg:w-1/2">
        <Title className="text-secondary">
          Kutubxonalar tashkil qilish va ularni kitoblar bilan ta’minlash
        </Title>
        <p className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
          Kutubxonalar tashkil etish va ularni kitoblar bilan ta’minlash
          yoʻnalishi loyihaning birinchi yoʻnalishi hisoblanib, oʻz oldiga
          kitobxonlar uchun bepul kitoblarni yetkazib berishni maqsad
          qilgan.Hozirda loyihaning 43 ta a’zosi va 60 dan ortiq kutubxonasi
          mavjud.Kutunxonalar Turkiya, Rossiya, Misr, Qirgʻiziston
          respublikalarida shuningdek, respublikamizning 10 ta viloyatida
          joylashgan.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/3 relative">
        <img
          className="absolute -top-14 -left-14 z-[-1] hidden lg:block"
          src="/naqsh.png"
          alt="naqsh"
        />
        <img
          src="/maktaba.png"
          alt="maktaba"
          className="rounded-lg shadow-lg relative md:hidden lg:block"
        />
      </div>
    </Container>
  );
};

export default LibraryShowcase;
