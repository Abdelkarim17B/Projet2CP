import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import CommentForm from "../Components/Pages/ContactezNous/CommentForm";
import Contacts from "../Components/Pages/ContactezNous/Contacts";

function ContactezNous() {
    return (
    <div>
      <Navbar language="Français"/>
      <div className="w-full flex flex-col justify-center items-center gap-[10vh] bg-[#F0EFF2] py-[20vh]">
        <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Signalez tout problème que vous rencontrez et nous essaierons de vous aider</h1>
        <Contacts mailIcon="/mailIcon.png" phoneIcon="/phoneIcon.png" locationIcon="/locationIcon.png" mailAdress="admin@esi.dz" phoneNumber="+213 23 45 67 89" location="Oued Semar , Algeriers" />
        <CommentForm />
      </div>
      <Footer />
    </div>
    )
}

export default ContactezNous;