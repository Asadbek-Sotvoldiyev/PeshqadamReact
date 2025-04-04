import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Title from "../title";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Yangi shisha xizmatlari kompaniyasi ochish uchun qanday qadamlar kerak?",
    answer: "Kitoblarni barcha hududlarga birday yetkazib berishning asosiy omili kutubxonalaridir. Bizning maqsadimiz esa mana shunday bepul kutubxonalarni sonini ko'paytirish.",
  },
  { question: "Sizning kompaniyangiz qanday innovatsion xizmatlar taklif etadi?", answer: "" },
  { question: "Sizning xizmat markazingiz qayerda joylashgan va qanday transport imkoniyatlari mavjud?", answer: "" },
  { question: "Ish vaqtlariingizni qanday qilib moslashtirasiz?", answer: "" },
  { question: "Mijozlar bilan aloqa o‘rnatish uchun qanday usullarni qo‘llaysiz?", answer: "" },
  { question: "Xizmatni bajarish jarayoni odatda qancha vaqt oladi?", answer: "" },
  { question: "Sizning xizmatlaringiz uchun qanday kafolatlar mavjud?", answer: "" },
  { question: "Xavfsizlikni ta’minlash uchun qanday chora-tadbirlar ko‘rasiz?", answer: "" },
  { question: "Agar kerakli mahsulot mavjud bo‘lmasa, qanday alternativalar taklif qilasiz?", answer: "" },
  { question: "Sizning xizmatlaringizda qanday noyob afzalliklar mavjud?", answer: "" },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Title className="text-secondary text-center my-[20px]">Tez-Tez So‘raladigan Savollar</Title>
      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 cursor-pointer pb-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="sm:text-cormorantSmall lg:text-cormorantBig font-cormorant text-qora">{item.question}</p>
              {openIndex === index ? (
                <FaMinus className="text-[#01434F]" />
              ) : (
                <FaPlus className="text-[#01434F]" />
              )}
            </div>
            {openIndex === index && (
              <p className="sm:text-cormorantSmall lg:text-cormorantBig text-qora">{item.answer || "Javob hozircha mavjud emas."}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
