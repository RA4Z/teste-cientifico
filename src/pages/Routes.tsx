import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}
