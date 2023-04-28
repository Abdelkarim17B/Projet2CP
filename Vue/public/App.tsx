import AboutUsText from "./components/AboutUsText"
import CommentForm from "./components/CommentForm"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App text-3xl bg-gray-100">
      <Navbar />
      <AboutUsText text1="Signalez tout problème que vous rencontrez et nous essaierons de vous aider" text2Title="à propos de nous" text2Content="Ce site compare les offres bancaires en termes de taux d'intérêt, de frais et autres détails importants. Interface conviviale et informations à jour pour une recherche facile et efficace de la meilleure option. Trouvez la meilleure offre bancaire en toute simplicité grâce à ce site."  image1Src="/Pic1AbUs.png" image2Src="/Pic2AbUs.png"/>
      <Contacts mailIcon="/mailIcon.png" phoneIcon="/phoneIcon.png" locationIcon="/locationIcon.png" mailAdress="admin@esi.dz" phoneNumber="+213 23 45 67 89" location="Oued Semar , Algeriers" />
      <CommentForm/>
      <Footer></Footer>
    </div>
  )
}

export default App
