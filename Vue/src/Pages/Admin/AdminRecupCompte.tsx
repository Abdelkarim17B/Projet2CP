interface AdminRecupCompteProps{
    Img1Url : string;
    Img2Url : string;
}

function AdminRecupCompte(props : AdminRecupCompteProps){
    return(
        <div className="bg-Gray33">
            <div className="flex flex-col justify-center items-center h-screen gap-12">
                <div className="w-[856px] h-[85px] text-[72px] font-semibold text-center text-BlueDark">
                    Recuperation de compte
                </div>
                <div className="w-[1334px] h-[72px] text-BlueDark text-center text-[24px]">
                    Votre demande est actuellement traitée par l'administrateur. Vous recevrez un message par email lorsque le traitement sera terminé. Nous vous remercions de votre patience.
                </div>
                <div className="w-[260px] h-[260px] flex justify-center items-center relative">
                    <img className="absolute" src={props.Img1Url}/>
                    <img className="absolute" src={props.Img2Url}/>
                </div>
            </div>
        </div>
    )
}

export default AdminRecupCompte;