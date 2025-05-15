
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import "preline/preline";
import HomeLayout from './layouts/HomeLayout';
import Contact from './pages/ContactPage';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route path='services' element={<ServicePage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='contact' element={<ContactPage/>}/>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
