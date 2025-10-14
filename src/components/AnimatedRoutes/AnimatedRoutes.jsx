import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";

import Mainscreen from "../HomePage/Mainscreen.jsx";
import DownloadPage from '../DownloadPage/DownloadPage.jsx';
import DocumentationPage from '../DocumentationPage/DocumentationPage.jsx';
import UtilsPage from '../UtilsPage/UtilsPage.jsx';

import PageWrapper from './PageWrapper.jsx';
import { useState } from "react";


export default function AnimatedRoutes({ pressedRoute }) {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <PageWrapper path='/' pressedRoute={pressedRoute} loaded={loaded}>
              <Mainscreen setLoaded={setLoaded} />
            </PageWrapper>
          }
        />
        <Route
          path='/download'
          element={
            <PageWrapper path='/download' pressedRoute={pressedRoute}>
              <DownloadPage />
            </PageWrapper>
          }
        />
        <Route
          path='/documentation'
          element={
            <PageWrapper path='/documentation' pressedRoute={pressedRoute}>
              <DocumentationPage />
            </PageWrapper>
          }
        />
        <Route
          path='/utils'
          element={
            <PageWrapper path='/utils' pressedRoute={pressedRoute}>
              <UtilsPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
