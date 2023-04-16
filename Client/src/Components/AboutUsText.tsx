import React from "react";

interface AboutUsTextProps {
  text1: string;
  text2Title: string;
  text2Content : string;
  image1Src: string;
  image2Src: string;
}

const AboutUsText: React.FC<AboutUsTextProps> = ({
  text1,
  text2Title,
  text2Content,
  image1Src,
  image2Src,
}) => {
  return (
    <div>
      <div className="relative">
        <img className="object-fill w-[1920px] h-[737px]" src={image1Src} />
        <p className="absolute text-6xl text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px]">{text1}</p>
      </div>  
      <div className="flex items-center">
        <img src={image2Src} />
        <div>
          <p className="absolute text-[68px] translate-x-1/4 -translate-y-56">{text2Title}</p>
          <p className="absolute text-[32px] w-[604px] h-[384px] translate-x-32 -translate-y-28">{text2Content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;