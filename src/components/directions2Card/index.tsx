import React from "react";

interface DirectionCardProps {
  title: string;
  description: string;
  image: string;
}

const DirectionCard: React.FC<DirectionCardProps> = ({ title, description, image }) => {
  return (
    <div className="hover:shadow-xl p-6 flex flex-col gap-[20px] bg-white">
      <div className="flex items-center gap-[10px]">
      <img src={image} alt={title} className="w-20 h-16 mb-4" />
      <h3 className="sm:text-cormorantSmall md:text-cormorantBig font-bold text-qora font-cinzel">{title}</h3>
      </div>
      <p className="sm:text-cormorantSmall lg:text-cormorantBig text-qora font-cormorant">{description}</p>
      <a href="#" className="text-sariq">
        Batafsil &gt;
      </a>
    </div>
  );
};

export default DirectionCard;
