import React from "react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  title: string;
  image: string;
  id: number;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  image,
  id,
  date,
  link,
}) => {
  return (
    <Link to={`/yangiliklar/${id}`} key={id} className="">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-kulrang font-cormorant text-cormorantSmall">
          {date}
        </p>
        <h3 className="text-lg font-cinzel text-qora">
          <a href={link} className="hover:text-secondary transition sm:text-cormorantSmall md:text-cormorantBig lg:text-yigirma">
            {title}
          </a>
        </h3>
        <a
          href={link}
          className="text-sariq font-josefinSans mt-2 inline-block text-cormorantSmall"
        >
          Batafsil &gt;
        </a>
      </div>
    </Link>
  );
};

export default NewsCard;
