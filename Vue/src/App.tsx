import { createBrowserRouter,createRoutesFromElements, Route,RouterProvider } from "react-router-dom";
import React from "react";

import Layout from "./Components/Layout/Client/Layout";
import Accueil from "./Pages/Client/Acceuil";
import Catalogue from "./Pages/Client/Catalogue"
import Apropos from "./Pages/Client/Apropos";
import ContactezNous from "./Pages/Client/ContactezNous";
import Glossary from "./Pages/Client/Glossary"
import ConditionUtilisation from "./Pages/Client/ConditionUtilisation";
import Error from "./Pages/Client/Error";
import ProfileBank from "./Pages/Client/ProfileBank";
import LayoutAdmin from "./Components/Layout/Admin/LayoutAdmin";
import AdminAuth from "./Pages/Admin/AdminAuth";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminListeDesBanques from "./Pages/Admin/AdminListeDesBanuqes";
import AdminModifierBanque from "./Pages/Admin/AdminModifierBanque";
import AdminAjouterBanque from "./Pages/Admin/AdminAjouterBanque";
import AdminListeDesAnnonces from "./Pages/Admin/AdminListeAnonces";
import AdminProfile from "./Pages/Admin/AdminProfile";
const LazyResultat = React.lazy(() => import('./Pages/Client/ResultatCmp'));

const banksLoader = async () => {
  const res = await fetch('http://localhost:3000/catalogue/')
  return res.json()
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accueil />} loader={banksLoader}/>
        <Route path="catalogue">
          <Route index element={<Catalogue />} loader={banksLoader}></Route>
          <Route path=":id" element={<ProfileBank />}/>
        </Route>
        <Route path="propos" element={<Apropos />} />
        <Route path="contactez" element={<ContactezNous />} />
        <Route path="glossary" element={ <Glossary /> } />
        <Route path="condition" element={<ConditionUtilisation />} />
        <Route path="Resultat" 
          element={<React.Suspense fallback='loading ...'>
                    <LazyResultat />
                  </React.Suspense>}>
        </Route>
        <Route path='*' element={<Error />} />
      </Route>

      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<AdminAuth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="banques">
          <Route index element={<AdminListeDesBanques />} loader={banksLoader}/>
          <Route path=":id" element={<AdminModifierBanque />}/>
          <Route path="ajouter" element={<AdminAjouterBanque />} />
        </Route>
        <Route path="annonces" element={<AdminListeDesAnnonces />} />
        <Route path="profil">
        <Route path=":id" element={<AdminProfile />} />
        
      </Route>
      </Route>
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



 