import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export default App;
