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
    <div className="flex items-center justify-center pt-20">
        <img src={phoneIcon} />
        <p className="pr-28 pl-8">{phoneNumber}</p>
        <img src={locationIcon} />
        <p className="pr-28 pl-8">{location}</p>
        <img src={mailIcon} />
        <p className="pl-8" >{mailAdress}</p>
    </div>
  );
};

export default Contacts;