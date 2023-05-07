import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Bank} from "../../Model/Bank"
import {PrestationModel} from "../../Model/Prestation"
import {AiOutlineDelete} from "react-icons/ai"
import axios from "../../api/axios"


function AdminModifierBanque() {
  const { id } = useParams();
  const [bank, setBank] = useState<Bank>();
  const [offre, setOffre] = useState<PrestationModel>();
  useEffect(() => {
    const BankFetching = async () => {
      const data = await (
        await fetch('http://localhost:3000/catalogue/'+id)
      ).json();
      setBank(() => data[0]);
      setOffre(() => data[1]);
    };
    BankFetching();
  }, []);


  const [nom ,setNom] = useState(bank?.nom_banque);
    const [adresse ,setAdresse] = useState(bank?.adresse);
    const [tel ,setTel] = useState(bank?.num_tel);
    const [fax ,setFax] = useState(bank?.num_fax);
    const [email ,setEmail] = useState(bank?.adresse_mail);
    const [logo ,setLogo] = useState(bank?.logo);
    const [siteweb ,setSiteweb] = useState(bank?.site_web);
    const [sent , setSent] = useState(false);

    

      function formSubmit(e){
        e.preventDefault();
        let data = {
          nom: nom,
          adr: adresse,
          tel: tel,
          fax:fax,
          logo:logo,
          email: email,
          siteweb: siteweb,
        }
        axios.post("",data).then(res =>{
          setSent(true);
        }).catch(() => console.log("message not sent"))
      }


  const ADMIN_SUPPRESSION_BANQUE_URL : string = "/admin/catalogue/";
  //Suppression
  async function handleSuppression(event: React.MouseEvent<HTMLButtonElement>,id : number) {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(
            ADMIN_SUPPRESSION_BANQUE_URL+id,
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
  
  return (
     <div className='px-[9vw] flex flex-col gap-[4vh] py-[20vh]'>
        {bank && <div className='flex justify-between'>
            <h2 className='text-[4rem] font-bold text-BlueDark'>Modifier une banque</h2>
            <button className='border-4 border-Red bg-Red text-white w-[14vw] py-[2vh] text-[1.5rem] font-bold rounded-[4px] flex items-center justify-center gap-[1vw]' onClick={(event)=>{handleSuppression(event,bank.id_banque)}}>
                <AiOutlineDelete />
                <p>Supprimer</p>
            </button>
        </div>}
        { bank && <div className='flex flex-start justify-between'>
            <form action="" className='flex flex-col gap-[25vh]'>
            <form className='flex flex-col gap-[3vh]'>
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Nom de la banque' className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.nom_banque} onChange={(e)=> {setNom(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Adresse</h3>
                        <input placeholder="l'adresse de la banque" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.adresse} onChange={(e)=> {setAdresse(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>N° Tel</h3>
                        <input placeholder="num_tel" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.num_tel} onChange={(e)=> {setTel(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>N° Fax</h3>
                        <input placeholder="num_fax" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.num_fax} onChange={(e)=> {setFax(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>E-Mail</h3>
                        <input placeholder="adresse mail" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.adresse_mail} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>logo</h3>
                        <input placeholder="link vers logo" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.logo} onChange={(e)=> {setLogo(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Siteweb</h3>
                        <input placeholder="siteweb" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={bank.site_web} onChange={(e)=> {setSiteweb(e.target.value)}}/>
                    </div>
                </form>


                
            </form>
            <div className='flex flex-col gap-[10vh]'>
                <button className='w-[30vw] h-[30vw] bg-white rounded-[4px] flex flex-col justify-center items-center gap-[2vh]'>
                    <img className="w-[75%]" src={bank.logo} alt="" />
                    <a className='underline'>modifier l'image de la banque</a>
                </button>
                <button className='bg-BlueDark text-white w-[30vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px]'>
                    Importer les offres (CSV)
                </button>
                <div className='flex justify-between'>
                    <button className='border-4 border-Red bg-Red text-white w-[14vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px]'>Sauvegarder</button>
                    <button className='border-4 border-BlueDark text-BlueDark w-[14vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px]'>Cancel</button>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default AdminModifierBanque