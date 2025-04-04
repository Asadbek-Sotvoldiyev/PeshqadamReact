import { useState } from "react";
import Container from "../container";
import Title from "../title";
import Button from "../button";

const sections: Record<string, { img: string; title: string }[]> = {
  Azolar: [
    { img: "/rasm1.png", title: "'Har kuni rivojlanishga muhtojmiz' - Charos Abdullayeva" },
    { img: "/rasm2.png", title: "Meni qayta dunyoga keltirgan va takror o'qishdan charchamaydigan kitobim bu..." },
  ],
  Yangiliklar: [
    { img: "/rasm2.png", title: "Yangiliklar Post 1" },
    { img: "/rasm1.png", title: "Yangiliklar Post 2" },
  ],
  Videolar: [
    { img: "/rasm1.png", title: "Videolar Post 1" },
    { img: "/rasm2.png", title: "Videolar Post 2" },
  ],
};

const ComponentWithSwitchButton: React.FC = () => {
  const [selected, setSelected] = useState<string>("Azolar");
  // const selectedData = sections[selected as keyof typeof sections];

  return (
    <Container className="py-4 lg:py-[50px] px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Title className="text-secondary">YO'NALISHLAR</Title>
        {/* Segmented Control */}
        <div className="mt-4 flex justify-center bg-[#F9F9F9] rounded-[5px] p-1">
          {Object.keys(sections).map((option) =>
            selected === option ? (
              <Button key={option} onClick={() => setSelected(option)}>
                {option}
              </Button>
            ) : (
              <a
                key={option}
                onClick={() => setSelected(option)}
                className="px-4 py-3 rounded-[5px] transition-all"
              >
                {option}
              </a>
            )
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {sections[selected].map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 md:h-60 object-cover rounded-[5px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
              <p className="text-white font-semibold w-[80%]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ComponentWithSwitchButton;
