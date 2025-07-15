import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
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

export default App;
