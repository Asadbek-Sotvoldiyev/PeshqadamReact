import Container from "../container";
import Title from "../title";

const directions = [
  {
    title: "MEDIA",
    description:
      "Media yo'nalishida shu paytgacha a’zolar tomonidan bir qancha ssenariylar, shorts videolar, ko’rsatuvlar va smm maxsulotlari tayyorlandi.",
    icon: "/media1.svg",
  },
  {
    title: "MUTAXASSISLAR TAYYORLASH",
    description:
      "Ushbu yoʻnalish oʻz sohasining yetuk (professional) mutaxassislari bilan hamkorlik qilishga qaratilgandir. Ishtirokchilar oʻz izdoshlariga kasbiy faoliyatlarida orttirgan tajribalari, sohalarining sir-sinoatlarini oʻrgatishlari kerak boʻladi.",
    icon: "/mutaxassis1.svg",
  },
  {
    title: "KUTUBXONALAR TASHKIL QILISH VA ULARNI KITOBLAR BILAN TA’MINLASH",
    description:
      "Kitoblarni barcha hududlarga birday yetkazib berishning asosiy omili kutubxonalardir. Bizning maqsadimiz esa mana shunday bepul kutubxonalarning sonini koʻpaytirish.",
    icon: "/maktaba1.svg",
  },
  {
    title: "KITOBXONLIKNI RIVOJLANTIRISH",
    description:
      "Ishtirokchilar kamida 200 ta kitob o‘qigan va o‘zi erishgan ko‘nikmalarni o‘rgatish qobiliyatiga ham ega bo‘lishlari talab etiladi.",
    icon: "/kitobxonlik1.svg",
  },
  {
    title: "ILMIY FAOLIYAT",
    description:
      "Mazkur yo‘nalish fazilatli shayx Muhammad Sodiq Muhammad Yusuf rahimahullohning ilmiy meroslarini o‘qib-o‘rganib, ular asosida turli tadqiqotlar olib borish, Hazratning shaxsiyatlari va faoliyatlarini dunyo hamjamiyatiga olib chiqishni maqsad qilgan.",
    icon: "/ilmmiy1.svg",
  },
];

const DirectionsSection: React.FC = () => {
  return (
    <Container className="py-10">
      <div className="mx-auto px-4">
        <Title className="text-secondary">YO'NALISHLAR</Title>
        <div className="grid md:grid-cols-2 gap-8">
          {directions.map((direction, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img className="" src={direction.icon}/>
              <div>
                <h3 className="font-bold font-cinzel text-qora text-yigirma">
                  {direction.title}
                </h3>
                <p className="font-cormorant text-qora text-cormorantSmall">{direction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DirectionsSection;