
interface Props{
    imageUrl1: string;
    imageUrl2 : string;
}

function ComparisonPolpulaire(props: Props) {
    return(
        <div className="flex flex-col items-center gap-[7vh]">
             <div className="flex gap-[5vw]">
                <img className="h-[5vh] w-auto" src={props.imageUrl1} alt={"props.imageUrl1"} />
                <div className="bg-BlueDark rounded-full w-[85px] h-[85px] flex justify-center items-center">
                   <h2 className="font-bold text-[1.2rem] text-white ">VS</h2>
                </div>
                <img className="h-[5vh] w-auto" src={props.imageUrl2} alt={"props.imageUrl2"} />
             </div>
             <input className="bg-Red max-w-[14vw] h-[7vh] font-bold px-[2vw] text-[1.5rem] text-white" type="button" value="Voir Resultat" />
        </div>
    )
}

 export default ComparisonPolpulaire
