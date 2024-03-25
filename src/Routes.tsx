import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import { Box, LinearProgress } from '@mui/material';

const Homepage = lazy(() => import('pages/Homepage'));
const Automatization = lazy(() => import('pages/Automatization'));
const Agenda = lazy(() => import('pages/Agenda'));

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
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
