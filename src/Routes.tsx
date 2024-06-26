import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import { Box, LinearProgress } from '@mui/material';

import Footer from 'components/Footer';
import Header from 'components/Header';
import DefaultPage from 'components/DefaultPage';

const HomePage = lazy(() => import('pages/Homepage'))
const Softwares = lazy(() => import('pages/Softwares'));
const Cadastrar = lazy(() => import('pages/Cadastrar'));
const Indicadores = lazy(() => import('pages/Indicadores'));
const Automatization = lazy(() => import('pages/Automatization'));
const Agenda = lazy(() => import('pages/Agenda'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function AppRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}>
          <Header />
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={<HomePage />} />
              <Route path='/Softwares' element={<Softwares />} />
              <Route path='/Indicadores' element={<Indicadores />} />
              <Route path='/CadastrarIndicador' element={<Cadastrar />} />
              <Route path='/CadastrarSoftware' element={<Cadastrar />} />
              <Route path='/Agenda' element={<Agenda />} />
              <Route path='/Automatization/:id' element={<Automatization />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}
