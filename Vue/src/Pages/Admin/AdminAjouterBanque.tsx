import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from "../../api/axios"


function AdminAjouterBanque() {
    const [nom ,setNom] = useState("");
    const [adresse ,setAdresse] = useState("");
    const [tel ,setTel] = useState("");
    const [fax ,setFax] = useState("");
    const [email ,setEmail] = useState("");
    const [logo ,setLogo] = useState("");
    const [siteweb ,setSiteweb] = useState("");
    const [sent , setSent] = useState(false);

    function resetForm(){
        setNom("");
        setAdresse("");
        setTel("");
        setFax("");
        setLogo("");
        setEmail("");
        setSiteweb("");
        setTimeout(()=>{setSent(false),3000});
    }

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
        }).then(resetForm).catch(() => console.log("message not sent"))
      }

  return (
    <div className='px-[9vw] flex flex-col gap-[4vh] py-[20vh]'>
        <h2 className='text-[4rem] font-bold text-BlueDark'>Ajouter une banque</h2>
        <div className='flex flex-start justify-between'>
            <form action="" className='flex flex-col gap-[25vh]'>
                <form className='flex flex-col gap-[3vh]'>
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Nom de la banque' className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={nom} onChange={(e)=> {setNom(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Adresse</h3>
                        <input placeholder="l'adresse de la banque" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={adresse} onChange={(e)=> {setAdresse(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>N° Tel</h3>
                        <input placeholder="num_tel" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={tel} onChange={(e)=> {setTel(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>N° Fax</h3>
                        <input placeholder="num_fax" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={fax} onChange={(e)=> {setFax(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>E-Mail</h3>
                        <input placeholder="adresse mail" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>logo</h3>
                        <input placeholder="link vers logo" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={logo} onChange={(e)=> {setLogo(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[1.1rem] font-medium text-BlueDark'>Siteweb</h3>
                        <input placeholder="siteweb" className='py-[4vh] w-[40vw] pl-[2vw] rounded-[4px]' value={siteweb} onChange={(e)=> {setSiteweb(e.target.value)}}/>
                    </div>
                </form>


                
            </form>
            <div className='flex flex-col gap-[10vh]'>
                <input type="file" name="Importer les offres (CSV)" id="" className='bg-BlueDark text-white w-[30vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px] bg-BlueDark' />
                <div className='flex justify-between'>
                    <button className='border-4 border-Red bg-Red text-white w-[14vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px]'>Ajouter</button>
                    <button className='border-4 border-BlueDark text-BlueDark w-[14vw] py-[4vh] text-[1.5rem] font-bold rounded-[4px]'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAjouterBanque