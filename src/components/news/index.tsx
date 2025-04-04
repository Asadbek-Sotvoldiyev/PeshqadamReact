import React from "react";
import Container from "../container";
import Title from "../title";
import Button from "../button";
import NewsCard from "../newsCard";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: "12.04.2025 yil",
    title: "SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF HAYOTLARI",
    image: "/newsImg.png",
    link: "/news/1",
  },
  {
    id: 2,
    date: "12.04.2025 yil",
    title: "SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF HAYOTLARI",
    image: "/newsImg.png",
    link: "/news/2",
  },
  {
    id: 3,
    date: "12.04.2025 yil",
    title: "SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF HAYOTLARI",
    image: "/newsImg.png",
    link: "/news/3",
  },
  {
    id: 4,
    date: "12.04.2025 yil",
    title: "SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF HAYOTLARI",
    image: "/newsImg.png",
    link: "/news/4",
  },
];

const NewsSection: React.FC = () => {
  return (
    <Container className="py-4 md:py-10 px-6">
      {/* Section Title */}
      <div className="flex justify-between items-center flex-wrap">
        <Title className="text-secondary sm:text-cormorantSmall md:text-cormorantBig lg:text-middleSize">YANGILIKLAR</Title>
        <Link to={`/yangiliklar`}><Button>Barchasini ko‘rish</Button></Link>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {newsData.map((news) => (
            <NewsCard
            key={news?.id}
              id={news?.id}
              image={news?.image}
              title={news?.title}
              date={news?.date}
              link={news?.link}
            />
        ))}
      </div>
    </Container>
  );
};

export default NewsSection;
