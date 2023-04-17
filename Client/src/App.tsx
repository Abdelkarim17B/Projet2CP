import Accueil from './Pages/Accueil'
import { Routes, Route, Outlet } from "react-router-dom";
import Populaire from './Pages/Populaire';
import Suggestions from './Pages/Suggestions';
import Error from './Pages/Error';
import Glossary from './Pages/Glossary'
import ContactezNous from './Pages/ContactezNous';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import ConditionUtilisation from './Pages/ConditionUtilisation';
import Apropos from './Pages/Apropos';


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="Catalogue" element={<Error />} />
          <Route path="Populaire" element={<Populaire />} />
          <Route path="Suggestions" element={<Suggestions />} />
          <Route path="Contactez" element={<ContactezNous />} />
          <Route path="Condition" element={<ConditionUtilisation />} />
          <Route path="Glossary" element={<Glossary />} />
          <Route path="About" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> 
    </div>
  )
}

function Layout() {
  return (
    <div>
      <Navbar language='Français'/>
      <Outlet />
      <Footer />
    </div>
  );
}


export default App
