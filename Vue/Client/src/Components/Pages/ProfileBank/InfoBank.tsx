import { Link } from "react-router-dom"
import { Bank } from "../../../Model/Bank"


function InfoBank(props: Bank){
    return ( 
        <div className="flex flex-col gap-[8vh] w-[40vw] px-[4vw] py-[20vh] items-center">
            <img className="md:w-[30vw] w-[70vw]" src={props.logo} alt={"props.imageUrl"} />
            <div className="font-semibold lg:text-[1.5rem] md:text-[1.2rem] text-center lg:w-[35vw] md:w-[50vw] w-[75vw] flex flex-col gap-[3vh] text-BlueDark">
                <div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.nom_banque}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.adresse}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.num_tel}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.num_fax}</h2></div>
                <div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.adresse_mail}</h2></div>
                <Link to={props.site_web}><div className="flex justify-center items-center bg-white rounded-[4px] py-[2vh] px-[1vw] font-light"><h2>{props.site_web}</h2></div>
</Link>
            </div>
        </div>
    )
}

export default InfoBank