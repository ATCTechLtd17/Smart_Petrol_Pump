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
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/Dashboard black.png" alt="Dashboard icon"/>
                            Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/Branch black.png" alt="branch icon"/>
                            Branches
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/Reserve Fuel black.png" alt="Dashboard icon"/>
                            Reserve Fuel
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/Employee black.png" alt="Dashboard icon"/>
                            Employee</Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/Fuel Status black.png" alt="Dashboard icon"/>
                            Fuel Status
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/user maintanance black.png" alt="Dashboard icon"/>
                            User Maintanance
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/hrm black.png" alt="Dashboard icon"/>
                            HRM
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/asset section black.png" alt="Dashboard icon"/>
                            Asset Section
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/liabilities black.png" alt="Dashboard icon"/>
                            Liabilities
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/financial status black.png" alt="Dashboard icon"/>
                            Financial status
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/settings black.png" alt="Dashboard icon"/>
                            Settings
                            </Link>
                        </li>

                        <li>
                            <Link>
                            <img className="w-6 h-6" src="/public/Side Navbar Icon/logout black.png" alt="Dashboard icon"/>
                            Logout
                            </Link>
                        </li>

                    </ul>
                </div>

       
    );
};

export default SideNavbar;