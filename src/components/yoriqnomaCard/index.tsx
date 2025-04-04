import React from "react";

interface DirectionCardProps {
  icon: string;
  number: string;
  text: string;
}

const YoriqnomaCard: React.FC<DirectionCardProps> = ({
  icon,
  number,
  text,
}) => {
  return (
    <div className=" p-6 w-[250px] flex items-center flex-col">
      <div className="flex items-center">
        <div className="relative w-fit">
          <img src="/star.svg" alt={text} className="relative" />
          <img
            src={icon}
            alt="icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5]"
          />
        </div>
        <h3 className="text-biggest font-bold text-kulrang font-cormorant">
          {number}
        </h3>
      </div>
      <p className="text-cormorantSmall text-qora font-cormorant">{text}</p>
    </div>
  );
};

export default YoriqnomaCard;
