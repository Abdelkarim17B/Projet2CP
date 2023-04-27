import { createBrowserRouter,createRoutesFromElements, Route,RouterProvider, useParams } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Accueil from "./Pages/Acceuil";
import Catalogue from "./Pages/Catalogue"
import Apropos from "./Pages/Apropos";
import ContactezNous from "./Pages/ContactezNous";
import Glossary from "./Pages/Glossary"
import ConditionUtilisation from "./Pages/ConditionUtilisation";
import Error from "./Pages/Error";
import ProfileBank from "./Pages/ProfileBank";
import ResultatCmp from "./Pages/ResultatCmp";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Accueil />} />
      <Route path="catalogue">
        <Route index element={<Catalogue />}></Route>
        <Route path=":id" element={<ProfileBank />}/>
      </Route>
      <Route path="propos" element={<Apropos />} />
      <Route path="contactez" element={<ContactezNous />} />
      <Route path="glossary" element={ <Glossary /> } />
      <Route path="condition" element={<ConditionUtilisation />} />
      <Route path="Resultat" element={<ResultatCmp />}>

      </Route>
      <Route path='*' element={<Error />}/>
    </Route>
  )
);

function App(){
    return(
        <main>
            <RouterProvider router={router} />
        </main>
      )
}

export default App;