import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import Container from "../container";

const statistics = [
  {
    number: 43,
    text: "a'zosi"
  },
  {
    number: 60,
    text: "kutubxona"
  },
  {
    number: 4,
    text: "davlat"
  },
  {
    number: 10,
    text: "viloyatda joylashgan"
  },
];

const Statistics: React.FC = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <Container className="py-[20px] text-center">
      <div className="flex justify-center flex-wrap gap-6">
        {statistics.map((project, index) => (
          <div key={index} className="p-6 shadow-lg rounded-lg w-[280px]">
            <CountUp className="text-3xl font-bold text-center mb-2" end={project.number} duration={10} start={startCount ? 0 : undefined}></CountUp>
            <p className="text-gray-700 leading-relaxed mb-4">{project.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Statistics;