import { Bank } from "../../../Model/Bank"


function InfoBank(props: Bank){
    return ( 
        <div className="flex flex-col gap-[8vh] w-[40vw] px-[4vw] py-[20vh] items-center">
            <img className="h-[10vh] w-auto" src={props.logo} alt={"props.imageUrl"} />
            <div className="font-semibold text-[1.5rem] text-center w-[35vw] flex flex-col gap-[3vh] text-BlueDark">
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.nom_banque}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.adresse}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.num_tel}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.num_fax}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.adresse_mail}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[0.7rem] py-[2vh] font-light"><h2>{props.site_web}</h2></div>
            </div>
        </div>
    )
}

export default InfoBank