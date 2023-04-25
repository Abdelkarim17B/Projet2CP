

interface ContactsProps {
    mailIcon : string;
    phoneIcon ?: string;
    locationIcon ?: string;
    phoneNumber ?: string;
    location ?: string;
    mailAdress ?: string;
}

function Contacts(props: ContactsProps){
  return (
    <div className="flex items-center gap-[7vw] justify-center pt-20">
        <div className="flex gap-[3.1vw] items-center">
          <img src={props.phoneIcon} />
          <p className="text-[2rem]">{props.phoneNumber}</p>
        </div>
        <div className="flex gap-[3.1vw] items-center">
          <img src={props.locationIcon} />
          <p className="text-[2rem]">{props.location}</p>
        </div>
        <div className="flex gap-[3.1vw] items-center">
          <img src={props.mailIcon} />
          <p className="text-[2rem]" >{props.mailAdress}</p>
        </div>
    </div>
  );
};

export default Contacts;