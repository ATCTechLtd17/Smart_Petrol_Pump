
import SideNavbar from '../components/SideNav/SideNavbar';
import AdminDashboardPage from '../page/AdminDashboard/AdminDashboardPage';

const AdminDashboardLayout = () => {
    return (
        <div className='flex gap-10'>
            <div>
                <SideNavbar />
            </div>
            <div>
                <AdminDashboardPage />
            </div>

        </div>
    );
};

export default AdminDashboardLayout;