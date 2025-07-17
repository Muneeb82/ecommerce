import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AdminLayout from './components/AdminLayout';
import HomePage from './pages/HomePage';
import Admin from './pages/Dashboard/Admin';


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

export default App;
