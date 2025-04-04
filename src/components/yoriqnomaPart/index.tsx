import Container from "../container";
import Title from "../title";
import YoriqnomaCard from "../yoriqnomaCard";

const projects = [
  {
    icon: "icon.svg",
    number: "01",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "02",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "03",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "04",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "05",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "06",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "07",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "08",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "09",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
  {
    icon: "icon.svg",
    number: "10",
    text: "Ishtirokchilarning kutubxonasida kamida 100 ta yoki undan oshiq kitob bo‘lishi;",
  },
];

const YoriqnomaPart: React.FC = () => {
  return (
    <Container className="py-4 md:py-8 text-center flex flex-col gap-4 md:gap-8">
      <Title className="text-secondary">
        Yo'nalishga a'zo bo'lish yo'riqnomasi
      </Title>
      <div className="flex justify-center lg:gap-20 flex-wrap items-center">
        {projects.map((project, index) => (
          <div className="flex items-center gap-4 md:gap-8 justify-center">
            {/* Add image only between cards (not at start or end) */}
            {index > 0 && (
              <img src="/arrow.svg" alt="Separator" className="w-16 h-16 hidden" />
            )}
            <YoriqnomaCard key={index} {...project} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default YoriqnomaPart;
