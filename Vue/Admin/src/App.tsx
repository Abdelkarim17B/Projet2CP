import { createBrowserRouter,createRoutesFromElements, Route,RouterProvider, useParams } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AdminAjouterBanque from "./Pages/AdminAjouterBanque";
import AdminAuth from "./Pages/AdminAuth";
import AdminListeDesAnnonces from "./Pages/AdminListeAnonces";
import AdminListeDesBanques from "./Pages/AdminListeDesBanuqes";
import AdminModifierBanque from "./Pages/AdminModifierBanque";
import Dashboard from "./Pages/Dashboard";
import AdminProfile from "./Pages/AdminProfile";
import AdminModifierProfile from "./Pages/AdminModifierProfile";


const user= true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout isAuth={user}/>}>
      <Route index element={<AdminModifierProfile />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="banques">
        <Route index element={<AdminListeDesBanques />} />
        <Route path=":id" element={<AdminModifierBanque />}/>
        <Route path="ajouter" element={<AdminAjouterBanque />} />
      </Route>
      <Route path="annonces" element={<AdminListeDesAnnonces />} />
      
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