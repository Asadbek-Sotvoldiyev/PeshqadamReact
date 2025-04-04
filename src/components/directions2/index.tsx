import React from "react";
import DirectionCard from "../directions2Card";
import Title from "../title";
import Container from "../container";

const directions = [
  {
    title: "MEDIA YO‘NALISHI",
    description:
      "Media yo‘nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko‘rsatuvlar va smm mahsulotlari tayyorlandi.",
    image: "/media1.svg",
  },
  {
    title: "KITOBXONLIKNI RIVOJLANTIRISH",
    description:
      "Media yo‘nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko‘rsatuvlar va smm mahsulotlari tayyorlandi.",
    image: "/kitobxonlik1.svg",
  },
  {
    title: "MUTAXASSISLAR TAYYORLASH",
    description:
      "Media yo‘nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko‘rsatuvlar va smm mahsulotlari tayyorlandi.",
    image: "/mutaxassis1.svg",
  },
  {
    title: "ILMIY FAOLIYAT YO‘NALISHI",
    description:
      "Media yo‘nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko‘rsatuvlar va smm mahsulotlari tayyorlandi.",
    image: "/ilmmiy1.svg",
  },
  {
    title: "KUTUBXONALAR TASHKIL QILISH VA ULARNI KITOBLAR BILAN TA’MINLASH",
    description:
      "Media yo‘nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko‘rsatuvlar va smm mahsulotlari tayyorlandi.",
    image: "/maktaba1.svg",
  },
];

const Directions: React.FC = () => {
  return (
    <Container className="mx-auto py-8 md:py-12 bg-gray-100">
      <Title className="text-secondary mb-8 sm:text-cormorantSmall md:text-cormorantBig lg:text-middleSize">Yo'nalishlar</Title>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit">
          {directions.map((direction, index) => (
            <DirectionCard key={index} {...direction} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Directions;
