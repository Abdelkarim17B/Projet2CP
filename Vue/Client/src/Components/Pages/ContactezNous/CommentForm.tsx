import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CommentForm() {
    function notify(){toast.success("Votre message a été bien envoyé ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      });
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent , setSent] = useState(false);

    function resetForm(){
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(()=>{setSent(false),3000})
    }

    function formSubmit(e){
      e.preventDefault();
      let data = {
        nom: name,
        mail: email,
        msg: message
      }
      axios.post("http://localhost:3000/send",data).then(res =>{
        setSent(true);
      }).then(notify).then(resetForm).catch(() => console.log("message not sent"))
    }

    return (
      <form className="flex flex-col gap-[8vh] lg:max-w-[50vw] w-[82vw] justify-center" method='POST'>
          <div className="flex flex-col gap-[2vh] lg:max-w-[50vw] w-[82vw] ">
            <input type="text" value={name} onChange={(e)=> {setName(e.target.value);console.log(name)}} className="bg-white lg:max-w-[50vw] w-[82vw]  h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="Name" id="" placeholder="Name" />
            <input type="e-mail" value={email} onChange={(e)=> {setEmail(e.target.value)}} className="bg-white lg:max-w-[50vw] w-[82vw]  h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="E-mail" id="" placeholder="E-mail" />
            <textarea value={message} onChange={(e)=> {setMessage(e.target.value)}} className="bg-white lg:max-w-[50vw] w-[82vw]  pb-[20vh] font-bold flex pt-[5%] text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="Message" id="" placeholder="Message" />
          </div>
          <button className="bg-Red lg:max-w-[50vw] w-[82vw]  h-[10vh] font-bold px-[15vw] text-[1.5rem] text-white rounded-[4px]" type="button" onClick={formSubmit}>Submit</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </form>
    );
  };
  
  export default CommentForm;