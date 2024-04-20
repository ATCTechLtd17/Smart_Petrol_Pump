import { Link } from "react-router-dom";

const SideNavbar = () => {
    return (
       
            <div className="min-h-screen">
                    {/* <div className='h-16'>
                        <h2>Smart petrol pump</h2>
                    </div> */}
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-fit md:w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li>
                            <Link>Branches</Link>
                        </li>
                        <li>
                            <Link>Reserve Fuel</Link>
                        </li>
                        <li>
                            <Link>Employee</Link>
                        </li>
                        <li>
                            <Link>Fuel Status</Link>
                        </li>
                        <li>
                            <Link>User Maintanance</Link>
                        </li>
                        <li>
                            <Link>HRM</Link>
                        </li>
                        <li>
                            <Link>Asset Section</Link>
                        </li>
                        <li>
                            <Link>Liabilities</Link>
                        </li>
                        <li>
                            <Link>Financial status</Link>
                        </li>
                        <li>
                            <Link>Settings</Link>
                        </li>
                        <li>
                            <Link>Logout</Link>
                        </li>

                    </ul>
                </div>

       
    );
};

export default SideNavbar;