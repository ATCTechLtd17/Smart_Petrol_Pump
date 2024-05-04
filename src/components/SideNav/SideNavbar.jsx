import { Link } from "react-router-dom";

const SideNavbar = () => {
    return (
<<<<<<< HEAD

        <div className="min-h-screen">
            {/* <div className='h-16'>
                        <h2>Smart petrol pump</h2>
                    </div> */}
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-fit md:w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                <li>
                    <Link to={'/'}>
                        <img className="w-6 h-6" src="/Side Navbar Icon/Dashboard black.png" alt="Dashboard icon" />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to={'add_new_branch'}>
                        <img className="w-6 h-6" src="/Side Navbar Icon/Branch black.png" alt="branch icon" />
                        Branches
=======

        <div className="min-h-screen">
            {/* <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> */}
            <ul className="menu p-4 w-fit md:w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                <li>
                    <Link>
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/Dashboard black.png" alt="Dashboard icon" />
                        Dashboard
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
<<<<<<< HEAD
                    <Link to={'daily_incoming_fuel'}>
                        <img className="w-6 h-6" src="/Side Navbar Icon/Reserve Fuel black.png" alt="Dashboard icon" />
                        Reserve Fuel
=======
                    <Link>
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/Branch black.png" alt="branch icon" />
                        Branches
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
<<<<<<< HEAD
                    <Link to={'active_employee'}>
                        <img className="w-6 h-6" src="/Side Navbar Icon/Employee black.png" alt="Dashboard icon" />
                        Employee</Link>
=======
                    <Link>
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/Reserve Fuel black.png" alt="Dashboard icon" />
                        Reserve Fuel
                    </Link>
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/Fuel Status black.png" alt="Dashboard icon" />
                        Fuel Status
                    </Link>
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/Employee black.png" alt="Dashboard icon" />
                        Employee</Link>
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/user maintanance black.png" alt="Dashboard icon" />
                        User Maintanance
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/Fuel Status black.png" alt="Dashboard icon" />
                        Fuel Status
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/hrm black.png" alt="Dashboard icon" />
                        HRM
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/user maintanance black.png" alt="Dashboard icon" />
                        User Maintanance
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/asset section black.png" alt="Dashboard icon" />
                        Asset Section
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/hrm black.png" alt="Dashboard icon" />
                        HRM
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/liabilities black.png" alt="Dashboard icon" />
                        Liabilities
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/asset section black.png" alt="Dashboard icon" />
                        Asset Section
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/financial status black.png" alt="Dashboard icon" />
                        Financial status
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/liabilities black.png" alt="Dashboard icon" />
                        Liabilities
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/settings black.png" alt="Dashboard icon" />
                        Settings
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/financial status black.png" alt="Dashboard icon" />
                        Financial status
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                    </Link>
                </li>

                <li>
                    <Link>
<<<<<<< HEAD
                        <img className="w-6 h-6" src="/Side Navbar Icon/logout black.png" alt="Dashboard icon" />
=======
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/settings black.png" alt="Dashboard icon" />
                        Settings
                    </Link>
                </li>

                <li>
                    <Link>
                        <img className="w-6 h-6" src="/public/Side Navbar Icon/logout black.png" alt="Dashboard icon" />
>>>>>>> b01a8d57a00ede6ba2c00f861bb9c26c765a0cfe
                        Logout
                    </Link>
                </li>

            </ul>
        </div>


    );
};

export default SideNavbar;