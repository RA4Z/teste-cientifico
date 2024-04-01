import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import { Box, LinearProgress } from '@mui/material';

const Homepage = lazy(() => import('pages/Homepage'));
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
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Agenda' element={<Agenda />} />
            <Route path='/Automatization/:id' element={<Automatization />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
