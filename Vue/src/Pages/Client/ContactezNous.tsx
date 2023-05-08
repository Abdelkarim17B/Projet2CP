import { ScrollRestoration } from "react-router-dom";
import CommentForm from "../../Components/Pages/Client/ContactezNous/CommentForm";
import Contacts from "../../Components/Pages/Client/ContactezNous/Contacts";

function ContactezNous() {
    return (
    <div>
      <ScrollRestoration />
      <div className="w-full flex flex-col justify-center items-center gap-[10vh] bg-[#F0EFF2] py-[20vh]">
        <h1 className="font-bold max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">Signalez tout problème que vous rencontrez et nous essaierons de vous aider</h1>
        <Contacts mailIcon="/mailIcon.png" phoneIcon="/phoneIcon.png" locationIcon="/locationIcon.png" mailAdress="admin@esi.dz" phoneNumber="+213 23 45 67 89" location="Oued Semar , Algeriers" />
        <CommentForm />
      </div>
    </div>
    )
}

export default ContactezNous;