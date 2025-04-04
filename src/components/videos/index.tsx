import React from "react";
import Container from "../container";
import Title from "../title";
import Button from "../button";
import { Link } from "react-router-dom";

interface VideosItem {
  id: number;
  image: string;
}

const videosData: VideosItem[] = [
  {
    id: 1,
    image: "/newsImg.png",
  },
  {
    id: 2,
    image: "/newsImg.png",
  },
  {
    id: 3,
    image: "/newsImg.png",
  },
  {
    id: 4,
    image: "/newsImg.png",
  },
  {
    id: 1,
    image: "/newsImg.png",
  },
  {
    id: 2,
    image: "/newsImg.png",
  },
  {
    id: 3,
    image: "/newsImg.png",
  },
  {
    id: 4,
    image: "/newsImg.png",
  },
  {
    id: 1,
    image: "/newsImg.png",
  },
  {
    id: 2,
    image: "/newsImg.png",
  },
  {
    id: 3,
    image: "/newsImg.png",
  },
  {
    id: 4,
    image: "/newsImg.png",
  },
  {
    id: 1,
    image: "/newsImg.png",
  },
  {
    id: 2,
    image: "/newsImg.png",
  },
  {
    id: 3,
    image: "/newsImg.png",
  },
  {
    id: 4,
    image: "/newsImg.png",
  },
  {
    id: 1,
    image: "/newsImg.png",
  },
  {
    id: 2,
    image: "/newsImg.png",
  },
  {
    id: 3,
    image: "/newsImg.png",
  },
  {
    id: 4,
    image: "/newsImg.png",
  },
];

const VideosSection: React.FC = () => {
  return (
    <Container className="py-10 flex justify-between items-center flex-col gap-[30px]">
      <Title className="text-secondary">Videolar</Title>
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videosData.map((news) => (
          <Link to={`/videolar`} key={news?.id} className="">
            <img
              src={news?.image}
              alt={news?.id.toString()}
              className="w-full h-48 object-cover"
            />
          </Link>
        ))}
      </div>
      <Button>Ko’proq ko’rish</Button>
    </Container>
  );
};

export default VideosSection;
