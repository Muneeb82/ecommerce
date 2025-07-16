import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
=======
import MainLayout from '../src/components/MainLayout';
import AdminLayout from '../src/components/AdminLayout';
import HomePage from '../src/pages/HomePage';
import Admin from '../src/pages/Dashboard/Admin';
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Add more public routes here */}
        </Route>

        {/* Admin routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          {/* Add nested admin pages here */}
        </Route>
      </Routes>
    </Router>
  );
<<<<<<< HEAD
}
=======
import MainLayout from '../src/components/MainLayout';
import AdminLayout from '../src/components/AdminLayout';
import HomePage from '../src/pages/HomePage';
import Admin from '../src/pages/Dashboard/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Add more public routes here */}
        </Route>

        {/* Admin routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          {/* Add nested admin pages here */}
        </Route>
      </Routes>
    </Router>
  );
};
>>>>>>> 78cea10 (Night commit)
=======
};
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32

export default App;
