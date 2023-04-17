interface Props {
    imageUrl: string;
    nationalite: string;
    BankName: string;
    BankLocation: string;
    BankPhone: string;
    BankFix: string;
    BankMail: string;
    BankWebsite: string;
    Profile: boolean;
  }


function InfoBank(props: Props) {
    return ( 
        <div className="flex flex-col gap-[17vh] w-[40vw] px-[4vw] py-[20vh] items-center">
            <img className="h-[10vh] w-auto" src={props.imageUrl} alt={"props.imageUrl"} />
            {(props.Profile == true) ? <input className=" bg-Red w-[20vw] h-[10vh] font-bold px-[2vw] text-[1.5rem] text-white" type="button" value="Comparer" /> : <></>}
            <div className="font-semibold text-[1.5rem] text-center w-[35vw] flex flex-col gap-[3vh] text-BlueDark">
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.BankName}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light">
                    <div className="flex align-center gap-[1vw]">
                        <h2>{props.nationalite}</h2>
                        {(props.nationalite == "Française" ) ? <img src="/flagFrance.png" alt="français" /> : <img src="/flagAlgeria.png" alt="français" />}
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.BankPhone}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.BankFix}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.BankMail}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.BankWebsite}</h2></div>
            </div>
        </div>
    )
}

export default InfoBank