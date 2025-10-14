import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";

import Mainscreen from "../HomePage/Mainscreen.jsx";
import DownloadPage from '../DownloadPage/DownloadPage.jsx';
import DocumentationPage from '../DocumentationPage/DocumentationPage.jsx';
import UtilsPage from '../UtilsPage/UtilsPage.jsx';

import PageWrapper from './PageWrapper.jsx';


export default function AnimatedRoutes({ pressedRoute }) {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <PageWrapper path='/' pressedRoute={pressedRoute}>
              <Mainscreen />
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
