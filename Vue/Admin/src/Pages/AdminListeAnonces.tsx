
import { GoSearch } from "react-icons/go"
import { useEffect, useState } from "react"
import axios from "../api/axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RiDeleteBin2Line} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai';
import {GrEdit} from 'react-icons/gr';


type ComposantAnnonceUpdate = {
    id : number;
    title : string;
    subTitle : string;
    image : string;
}

type ComposantAnnonce = {
    id : number;
    title : string;
    subtitle : string;
    image : string;
};

type AnnonceAjouter = {
    id : number;
    title : string;
    subTitle : string;
    image : string;
};


const ADMIN_ANNONCE_URL : string = "/home";
const ADMIN_AJOUT_ANNONCE_URL : string = "/admin/announce/Create";
const ADMIN_SUPPRESSION_ANNONCE_URL : string = "/admin/annouce/Delete/";
const ADMIN_MODIFIER_ANNONCE_URL : string = "/admin/annouce/Update/";

function AdminListeDesAnnonces(){
    const [listeAnnonceAff,setListeAnnonceAff] = useState<ComposantAnnonce[]>([]);
    const [listeAnnonce , setListeAnnonce] = useState<ComposantAnnonce []>([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(ADMIN_ANNONCE_URL);
            console.log(response.data);
            setListeAnnonceAff(response.data);
            setListeAnnonce(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
    }, []);
    const [isOpen,setIsOpen] = useState(false);
    const [requeteRecherche,setRequeteRecherche] = useState<string>("");

    function updateRequeteRecherche(event : React.ChangeEvent<HTMLInputElement>) : void {
        setRequeteRecherche(event.target.value);
        console.log(requeteRecherche);
    }
    useEffect(() => {
        console.log("liste aff changed: ", listeAnnonceAff);
      }, [listeAnnonceAff]);
    useEffect(()=>{
        const nouvelleListe = listeAnnonce.filter(
            (annonce)=>
            annonce.title.toLowerCase().includes(requeteRecherche.toLowerCase())
        );
        setListeAnnonceAff(nouvelleListe);
    },[requeteRecherche])

    //The MODAL part ( insertion / ajout )
    const ids: number[] = listeAnnonce.map((data: { id: number; }) => data.id); // liste des IDs
    function generateRandomID() : number {
        let rand : number;
        do {
            rand = Math.floor(Math.random() * 1000) + 1;
          } while (ids.includes(rand));
        return rand;
    }
    const [AnnonceAjouter,setAnnonceAjouter] = useState<AnnonceAjouter>({
        id : generateRandomID(),
        title : "",
        subTitle : "",
        image : ""
    });
    function updateImageAjouter(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnnonceAjouter({
            ...AnnonceAjouter,
            image : event.target.value,
        })
    }
    function updateTitreAjouter(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnnonceAjouter({
            ...AnnonceAjouter,
            title : event.target.value,
        })
    }
    function updateSousTitreAjouter(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnnonceAjouter({
            ...AnnonceAjouter,
            subTitle : event.target.value,
        })
    }
    function handleAnnuler(event : React.MouseEvent<HTMLButtonElement>){
        setIsOpen(false);
        setAnnonceAjouter({
            id : 0,
            title : "",
            subTitle : "",
            image : "",
        })
    }
    async function handleOnSubmit(event : React.FormEvent<HTMLFormElement> ) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        try {
            console.log(JSON.stringify(AnnonceAjouter))
            const response = await axios.post(
                ADMIN_AJOUT_ANNONCE_URL,
                JSON.stringify(AnnonceAjouter),
                {
                    headers: {
                        "Content-Type": "application/json" ,
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            console.log(response)
            setAnnonceAjouter({
                ...AnnonceAjouter,
                id : generateRandomID(),
                image : "",
                title : "",
                subTitle : ""
            })
            toast.success('Vous etes desormais connecte', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsOpen(false);
            //window.location.reload();
        } catch (error) {
            if(!(error as any).response){
                toast.error('Connexion au serveur impossible', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log("Connexion au serveur impossible");
            }
            else if((error as any).response?.status === 400){
                toast.error('Il vous manque encore plus d\'information', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else if((error as any).response?.status === 401){
                toast.error('Votre adresse mail ou mot de passe est invalide', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log("ranan hna");
            }
            else{
                toast.error('Connexion Impossible', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    //Liste des choix
    const [showListe,setShowListe] = useState(false);
    const [selectedAnnonce,setSelectedAnnonce] = useState<AnnonceAjouter>({
        id : 0,
        title : "",
        subTitle : "",
        image : ""
    });
    function handleShowListe(event: React.MouseEvent<HTMLButtonElement>,annonce : ComposantAnnonce) {
        if(showListe === true){
            setShowListe(false);
        }
        else{
            setShowListe(true);
        }
        setSelectedAnnonce({
            ...selectedAnnonce,
            id : annonce.id,
            title : annonce.title,
            subTitle : annonce.subtitle,
            image : annonce.image,
        });
    }

    //Suppression
    async function handleSuppression(event: React.MouseEvent<HTMLButtonElement>,id : number) {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(
                ADMIN_SUPPRESSION_ANNONCE_URL+id,
                {
                    headers: {
                        "Content-Type": "application/json" ,
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            console.log(response);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    
    }

    //Modification
    const [modifIsOpen,setModifIsOpen] = useState(false);
        const [AnnonceModifier,setAnonModifier] = useState<AnnonceAjouter>({
        id : 0,
        title : "",
        subTitle : "",
        image : ""
    });
    function handleAnnulerModif() {
        setModifIsOpen(false);
    }
    function handleModification(){
        setShowListe(false);
        setModifIsOpen(true);
        setAnonModifier(selectedAnnonce);
    }
    function updateImageModifier(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnonModifier({
            ...AnnonceModifier,
            image : event.target.value,
        })
    }
    function updateTitreModifier(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnonModifier({
            ...AnnonceModifier,
            title : event.target.value,
        })
    }
    function updateSousTitreModifier(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnonModifier({
            ...AnnonceModifier,
            subTitle : event.target.value,
        })
    }

    async function handleOnSubmitModification(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const token = localStorage.getItem('token');
        const newUpdatedAnnonce : ComposantAnnonceUpdate = {
            id : AnnonceModifier.id,
            title : AnnonceModifier.title,
            subTitle : AnnonceModifier.subTitle,
            image : AnnonceModifier.image,
        } 
        try {
            console.log(JSON.stringify(newUpdatedAnnonce))
            const response = await axios.put(
                ADMIN_MODIFIER_ANNONCE_URL+newUpdatedAnnonce.id,
                JSON.stringify(newUpdatedAnnonce),
                {
                    headers: {
                        "Content-Type": "application/json" ,
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            console.log("response : ",response);
            console.log("the server response : ",response.statusText);
            setModifIsOpen(false);
        } catch (error) {
            console.log("well ...");
        }
    }
    return(
        <div>
            <div className="flex flex-col h-full gap-[100px] min-h-screen items-center justify-center pt-[20vh]">
                <div className="flex flex-row gap-[613px] justify-center mt-24">
                    <div className="bg-white w-[630px] h-[90px] flex items-center justify-between px-10">
                        <input type="text" id="RechercheAnnonceAdmin" className="text-[28px] outline-none rounded-sm w-3/4" onChange={updateRequeteRecherche}></input>
                        <GoSearch size="30px" className="text-Gray"/>
                    </div>
                    <div>
                        <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold" onClick={(e) => {setIsOpen(true)}}> Ajouter Annonce</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[60px] justify-items-center mb-24">
                    {(listeAnnonceAff.length == 0) ? (
                        <div className="text-72 font-bold">
                            Pas d'Annonces {/*FIX IT LATER*/}
                        </div>
                    ) :
                    (listeAnnonceAff.map((Annonce) =>(
                        <div key={Annonce.id} className="relative" >
                            <button className="w-[514px] h-[366px] relative" onClick={(event) => handleShowListe(event, Annonce)}>
                                <img src={Annonce.image} alt={Annonce.title} className="rounded-md w-[514px] h-[363px]"/>
                                <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8))" }}></div>
                                <div className="absolute bottom-0 left-1/2 right-1/2 w-[400px] h-[99px] transform -translate-x-1/2 -translate-y-1/2 text-white">
                                    <div className="text-[36px] font-bold">
                                        {Annonce.title}
                                    </div>
                                    <div className="text-[28px] font-bold">
                                        {Annonce.subtitle}
                                    </div>
                                </div>
                               
                            </button>
                            {(showListe && (Annonce.id === selectedAnnonce.id)) ? 
                                <div className="w-[200px] h-[150px] bg-white z-50 absolute top-28 left-[350px] rounded-md text-[#101010]">{/*the liste *-* */}
                                    <div className="flex flex-col justify-center items-center h-full"> 
                                        <button className="border-b-2 border-[#636161] w-full h-[50px] flex items-center justify-center gap-10 text-[22px] font-semibold" onClick={handleModification}>Modifier<GrEdit /></button>
                                        <button className="border-b-2 border-[#636161] w-full h-[50px] flex items-center justify-center gap-6 text-[22px] font-semibold" onClick={(event)=>{handleSuppression(event,selectedAnnonce.id)}}>Supprimer <RiDeleteBin2Line size="24px" className="text-Red"/></button>
                                        <button className="w-full h-[50px] flex items-center justify-center gap-14 text-[22px] font-semibold" onClick={()=>{
                                            setShowListe(false)
                                        }}>Fermer <AiFillCloseCircle className="text-[#949ee9]"/></button>
                                    </div>
                                </div> 
                                : <div>
                                {/*Nothing to display Really*/}
                                </div>}
                        </div>
                    )))}
                </div>      
            </div>
            {isOpen ? 
            <div className="fixed inset-0 bg-Black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                {/* Show the pop up modal */}
                <form className="w-[54vw] h-[64vh] bg-white rounded-md flex flex-col justify-center items-center gap-10" onSubmit={handleOnSubmit}>
                    {/* TITRE */}
                    <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                        <input type="text" required={true} value={AnnonceAjouter.title} placeholder="Titre" id="titre" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold" onChange={updateTitreAjouter}></input>
                    </div >
                    {/* SUB-TITRE */}
                    <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                        <input type="text" required={true} value={AnnonceAjouter.subTitle} placeholder="Sous-Titre" id="subtitre" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold"onChange={updateSousTitreAjouter}></input>
                    </div>
                    {/* IMAGE LINK */}
                    <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                        <input type="text" required={true} value={AnnonceAjouter.image} placeholder="Lien Image" id="image" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold" onChange={updateImageAjouter}></input>
                    </div>
                    {/* BUTTONS */}
                    <div className="h-[9vh] w-[25vw] mt-6 flex flex-row gap-12">
                        <button type="submit" className="w-[12vw] h-[8vh] bg-Red rounded-md text-center text-[28px] text-white font-semibold">Ajouter</button>
                        <button type="button" className="w-[12vw] h-[8vh] bg-white border-2 border-[#000000] rounded-md text-center text-[28px] text-[#000000] font-semibold" onClick={handleAnnuler}>Annuler</button>
                    </div>
                </form>
                
            </div>
            : 
            <div>
                {/* Nothing to do really */}
            </div>
            }
            {modifIsOpen ?
                <div className="fixed inset-0 bg-Black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                {/* Show the pop up modal for MODIFIER */}
                    <form className="w-[54vw] h-[64vh] bg-white rounded-md flex flex-col justify-center items-center gap-10" onSubmit={handleOnSubmitModification}>
                        {/* TITRE */}
                        <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                            <input type="text" required={true} value={AnnonceModifier.title} placeholder="Titre" id="titre" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold" onChange={updateTitreModifier}></input>
                        </div >
                        {/* SUB-TITRE */}
                        <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                            <input type="text" required={true} value={AnnonceModifier.subTitle} placeholder="Sous-Titre" id="subtitre" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold"onChange={updateSousTitreModifier}></input>
                        </div>
                        {/* IMAGE LINK */}
                        <div className="bg-[#F0EFF2] h-[9vh] w-3/4 flex flex-row items-center">
                            <input type="text" required={true} value={AnnonceModifier.image} placeholder="Lien Image" id="image" className="bg-[#F0EFF2] h-[6vh] w-3/4 text-[24px] outline-none pl-8 font-semibold" onChange={updateImageModifier}></input>
                        </div>
                        {/* BUTTONS */}
                        <div className="h-[9vh] w-[25vw] mt-6 flex flex-row gap-12">
                            <button type="submit" className="w-[12vw] h-[8vh] bg-Red rounded-md text-center text-[28px] text-white font-semibold">Modifier</button>
                            <button type="button" className="w-[12vw] h-[8vh] bg-white border-2 border-[#000000] rounded-md text-center text-[28px] text-[#000000] font-semibold" onClick={handleAnnulerModif}>Annuler</button>
                        </div>
                    </form>
                </div>
                : 
                <div>
                    {/* Nothing to do really */}
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default AdminListeDesAnnonces;