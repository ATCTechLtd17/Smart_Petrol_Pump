
import { Outlet } from 'react-router-dom';
import NavbarDefault from '../components/Navbar/NavbarDefault';
import SideNavbar from '../components/SideNav/SideNavbar';


const AdminDashboardLayout = () => {
    return (
        <section className=' '>
            <div>
                <NavbarDefault />
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">...</label> */}
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <SideNavbar />
                </div>
            </div>
        </section>
    );
};

export default AdminDashboardLayout;