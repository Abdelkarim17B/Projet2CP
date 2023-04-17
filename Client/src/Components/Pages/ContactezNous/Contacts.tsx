import React from "react";

interface ContactsProps {
    mailIcon : string;
    phoneIcon ?: string;
    locationIcon ?: string;
    phoneNumber ?: string;
    location ?: string;
    mailAdress ?: string;
}

const Contacts: React.FC<ContactsProps> = ({
    mailIcon ,
    phoneIcon ,
    locationIcon,
    phoneNumber ,
    location ,
    mailAdress ,
}) => {
  return (
    <div className="flex items-center gap-[7vw] justify-center pt-20">
        <div className="flex gap-[3.1vw] items-center">
          <img src={phoneIcon} />
          <p className="text-[2rem]">{phoneNumber}</p>
        </div>
        <div className="flex gap-[3.1vw] items-center">
          <img src={locationIcon} />
          <p className="text-[2rem]">{location}</p>
        </div>
        <div className="flex gap-[3.1vw] items-center">
          <img src={mailIcon} />
          <p className="text-[2rem]" >{mailAdress}</p>
        </div>
    </div>
  );
};

export default Contacts;