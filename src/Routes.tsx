import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Automatization from './pages/Automatization';
import Agenda from 'pages/Agenda';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Agenda' element={<Agenda />} />
          <Route path='/Automatization/:id' element={<Automatization />} />
        </Routes>
      </Router>
    </>
  );
}
