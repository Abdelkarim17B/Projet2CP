import Accueil from './Pages/Accueil'
import Populaire from './Pages/Populaire'
import SuggestionAttente from './Pages/SuggestionAttente'
import Suggestions from './Pages/Suggestions'
import Error from './Pages/Error'
import Glossary from './Pages/Glossary'
import ContactezNous from './Pages/ContactezNous'
import Apropos from './Pages/Apropos'
import ConditionUtilisation from './Pages/ConditionUtilisation'
import ResultatComparison from './Pages/ResultatComparison'
import ProfileBank from './Pages/ProfileBank'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <div>
      <Navbar language="Français"/>
      <Accueil />
      <Footer />
    </div>
  )
}

export default App
