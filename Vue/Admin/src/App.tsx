import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminAuth from './Pages/AdminAuth';
import img2 from '/ApprouvedMark.png'
import img1 from '/ApprovedCircle.png'
import img1AdminAuth from '/Img1AdminAuth.png'
import img2AdminAuth from '/Img2AdminAuth.png'
import AdminPasswordReset from './Pages/AdminPasswordReset';
import AdminRecupCompte from './Pages/AdminRecupCompte';
import AdminEnterResetMail from './Pages/AdminEnterResetMail';
import AdminListeDesBnaques from './Pages/AdminListeDesBanques';
import AdminListeDesAnnonces from './Pages/AdminListeAnonces';
import AdminAjouterBanque from './Pages/AdminAjouterBanque';


const App: React.FC = ({}) =>
{
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/AdminAuth' element={<AdminAuth Img1Url={img1AdminAuth} Img2Url={img2AdminAuth} />} />
          <Route path='/AdminPasswordReset' element={<AdminPasswordReset/>} />
          <Route path='/AdminRecupCompte' element={<AdminRecupCompte Img1Url={img1} Img2Url={img2} />} />
          <Route path='/AdminEnterResetMail' element={<AdminEnterResetMail/>} />
          <Route path="/AdminListeDesAnnonces" element={<AdminListeDesAnnonces/>} />
          <Route path='/AdminListeDesBanques' element={<AdminListeDesBnaques/>} />
          <Route path='/AdminAjouterBanque' element={<AdminAjouterBanque/>} />
        </Routes>
      </BrowserRouter>
    )
};

export default App;

