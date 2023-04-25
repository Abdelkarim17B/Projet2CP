interface Props {
    Titre: string;
    Pro1: string;
    Pro2: string;
    Perso1: string;
    Perso2: string;
    Comp1: string;
    Comp2: string;
  }


function Results(props: Props) {
    return ( 
        <div className="flex flex-col gap-[4vh] py-[10vh]">
            <h2 className="font-semibold text-[2rem] text-center">{props.Titre}</h2>
            <div className="flex align-center justify-center items-center">
                <div className="w-[9vw] text-white">
                    <div className="w-[7vw] flex flex-col gap-[3vh]">
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Proffessionel</h5>
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Personnel</h5>
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Entreprise</h5>
                    </div>
                </div>

                <div className="w-[40vw] flex flex-col gap-[1.5vh] text-[1.7rem] align-center justify-center items-center text-BlueDark">
                        <h3 className="px-[1vw] py-[1vh]">{props.Pro1}</h3>
                        <h3 className="px-[1vw] py-[1vh]">{props.Perso1}</h3>
                        <h3 className="px-[1vw] py-[1vh]">{props.Comp1}</h3>
                </div>
                <div className="bg-BlueDark w-[1px] h-[25vh]"></div>
                <div className="w-[40vw] flex flex-col gap-[1.5vh] text-[1.7rem] align-center justify-center items-center text-BlueDark">
                        <h3 className="px-[1vw] py-[1vh]">{props.Pro2}</h3>
                        <h3 className="px-[1vw] py-[1vh]">{props.Perso2}</h3>
                        <h3 className="px-[1vw] py-[1vh]">{props.Comp2}</h3>
                </div>

                <div className="w-[9vw] text-white flex justify-end">
                    <div className="w-[7vw] flex flex-col gap-[3vh]">
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Proffessionel</h5>
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Personnel</h5>
                        <h5 className="px-[1vw] py-[1vh] bg-Red66">Entreprise</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results