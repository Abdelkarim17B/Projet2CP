

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
    <div className="max-w-[82vw] flex md:flex-row flex-col items-center gap-[7vw] justify-center pt-20">
        <div className="flex md:gap-[2vw] items-center w-[50vw] md:max-w-[25vw] justify-between md:w-auto">
          <img className="lg:w-[5vw] md:w-[7vw] w-[10vw]" src={props.phoneIcon} />
          <p className="lg:text-[1.6rem] text-[1rem]">{props.phoneNumber}</p>
        </div>
        <div className="flex md:gap-[2vw] items-center w-[50vw] md:max-w-[25vw] justify-between md:w-auto">
          <img className="lg:w-[5vw] md:w-[7vw] w-[10vw]" src={props.locationIcon} />
          <p className="lg:text-[1.6rem] text-[1rem]">{props.location}</p>
        </div>
        <div className="flex md:gap-[2vw] items-center w-[50vw] md:max-w-[25vw] justify-between md:w-auto">
          <img className="lg:w-[5vw] md:w-[7vw] w-[10vw]" src={props.mailIcon} />
          <p className="lg:text-[1.6rem] text-[1rem]" >{props.mailAdress}</p>
        </div>
    </div>
  );
};

export default Contacts;