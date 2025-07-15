import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Optional: Add a sidebar or admin navbar here */}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
