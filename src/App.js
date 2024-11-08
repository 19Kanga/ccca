// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./traduction/i18n"
import Aos from 'aos'
import 'aos/dist/aos.css'
import CoomingSoon from './pages/CoomingSoon';
import Formation from './pages/Formatione copy';
import Incubations from './pages/Incubations';
import Contacts from './pages/Contact';
import Evenements from './pages/Evenements';

import Layout from './pages/Admin/Layouts/Layout';
// import CccaRevueAdmin from './pages/CccaRevue';
import CccaRevueAdmin from './pages/Admin/pages/CccaRevue';
import Dashboard from './pages/Admin/pages/Dashboard';
import Activities from './pages/Admin/pages/Activities';
import Events from './pages/Admin/pages/Events';
import News from './pages/Admin/pages/Actualite';

import Missions from './pages/Missions';
import Services from './pages/Services';
import ConseilAdministrationDetail from './pages/Apropos/ConseilAdministrationDetail'
import Acceuil from './pages/Acceuil';
import Layouts from './pages/Layouts';
import login from './pages/Login/Login';
import inscription from './pages/Login/Inscription';
import BureauxAfrique from './pages/Bureau-Afrique/BureauxAfrique';
import AfriqueLayouts from './pages/Bureau-Afrique/AfriqueLayouts';
import indexes from './pages/Bureau-Afrique/indexes';
import Pays from './pages/Bureau-Afrique/Pays';
import 'jquery/dist/jquery.min.js';
import { AnimatePresence } from 'framer-motion';
import DevenirMembre from './pages/DevenirMembre';
import LayoutsDetail from './pages/Services/LayoutsDetail';
import ServiceDetails from './pages/Services/ServiceDetails';
import Actualites from './pages/Actualites';
import Activites from './pages/Activites';
import LayoutsActivite from './pages/Activites/LayoutsActivite';
import ActiviteDetail from './pages/Activites/ActiviteDetail';
// import AproposDetail from './pages/Apropos/AproposDetail';
import LayoutsApropos from './pages/Apropos/LayoutsApropos';
import Presentations from './pages/Apropos/Presentations';
import ConseilAdministration from './pages/Apropos/ConseilAdministration';
import DirectionGenerale from './pages/Apropos/DirectionGenerale';
import Gallerie from './pages/Apropos/Gallerie';
import Contact from './pages/Apropos/Contact';
import 'lightgallery/css/lightgallery.css';
// import styles
import 'lightgallery/css/lg-zoom.css';
import Zone from './pages/Bureau-Afrique/Zone';

import ListActivite from './pages/Activites/ListActivite';
import DetailEvenements from './pages/Evenements/DetailEvenements';
import ActualiteDetail from './pages/Actualites/ActualiteDetail'
import CccaRevue from './pages/CccaRevue';
import RevueDetail from './pages/CccaRevue/RevueDetail';


// import { lazy } from 'react';
// const Layout =lazy(()=> import('./pages/Layout.js'));
// const Formation = lazy(() => import('./pages/Formation'));
// const Incubations = lazy(() => import('./pages/Incubations'));
// const Activite = lazy(() => import('./pages/Activite'));
// const Contacts = lazy(() => import('./pages/Contact'));
function App() {


  
  window.addEventListener('load', () => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/'  >
        <Route index Component={Acceuil} />
        <Route path='/login' Component={login} />
        <Route path='/inscription' Component={inscription} />
          {/* <Route index Component={Acceuil} /> */}
        </Route>
        <Route path="/a/" Component={Layouts} >
          <Route index Component={Home} />
          <Route path='Formations' Component={Formation} />
          <Route path='Mission' Component={Missions} />
          <Route path='Activites/' >
            <Route index Component={Activites} />
            <Route path='List' Component={ListActivite} />
            <Route path=':nameactivite' Component={LayoutsActivite}>
              <Route index Component={ActiviteDetail} />
            </Route>
          </Route>
          <Route path='Services/' >
            <Route index Component={Services}/>
            <Route path=':nameservice' Component={LayoutsDetail}>
              <Route index Component={ServiceDetails} />
            </Route>
          </Route>
          <Route path='Apropos-de-nous/' Component={LayoutsApropos}>
            <Route path='Présentation' Component={Presentations} />
            <Route path="Conseil d'administration" >
            <Route index Component={ConseilAdministration} />
            <Route path=':name' Component={ConseilAdministrationDetail} />
            </Route>
            <Route path="Direction Exécutive" Component={DirectionGenerale} />
            <Route path="Gallerie" Component={Gallerie} />
            <Route path="Contacts" Component={Contact} />
            {/* <Route path=':detail' >
              <Route index Component={AproposDetail} />
            </Route> */}
          </Route>
          <Route path='Incubation' Component={Incubations} />
          <Route path='Evenements/'>
            <Route index Component={Evenements} />
            <Route path=':id' Component={DetailEvenements} />
          </Route>
          <Route path='Actualites/'>
            <Route index Component={Actualites} />
            <Route path=':id' Component={ActualiteDetail} />
          </Route>
          <Route path='CCCA REVUE/'>
            <Route index Component={CccaRevue} />
            <Route path=':id' Component={RevueDetail} />
          </Route>
          <Route path='Contacts' Component={Contacts} />
          <Route path='Devenir-membre' Component={DevenirMembre} />
          <Route path='Bureau/'>
            <Route index Component={indexes} />
            <Route path=':nation/'>  
              <Route index Component={Pays} />
              <Route path=':zone/'>
                <Route index Component={Zone} />
                <Route path=':region' Component={AfriqueLayouts} >
                  <Route index Component={BureauxAfrique} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" Component={CoomingSoon} />

       
       
        <Route path="/Admin" element={<Layout />}>
        
          <Route index element={<Dashboard />} /> 
          
          <Route path="ccca-revue" element={<CccaRevueAdmin />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="activities" element={<Activities />} />
        </Route>
      
      </Routes>
    </AnimatePresence>
  );
}

export default App;
