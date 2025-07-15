import { Outlet, NavLink } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/admin/categories"
            className={({ isActive }) =>
              `py-2 px-4 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-800' : ''}`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `py-2 px-4 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-800' : ''}`
            }
          >
            Products
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
