interface Props {
    imageUrl: string;
    BankName: string;
    BankLocation: string;
    BankPhone: string;
    BankFix: string;
    BankMail: string;
    BankWebsite: string;
  }


function InfoBank(props: Props) {
    return ( 
        <div className="flex flex-col gap-[17vh] w-[40vw] px-[4vw]">
            <img className="h-[10vh] w-auto" src={props.imageUrl} alt={"props.imageUrl"} />
            <div className="font-semibold text-[1.5rem] text-center flex flex-col gap-[3vh]">
                <h2>{props.BankName}</h2>
                <h2>{props.BankLocation}</h2>
                <h2>{props.BankPhone}</h2>
                <h2>{props.BankFix}</h2>
                <h2>{props.BankMail}</h2>
                <h2>{props.BankWebsite}</h2>
            </div>
        </div>
    )
}

export default InfoBank