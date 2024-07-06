

const NavbarDefault = () => {
    return (
        <div className=' bg-base-200 '>
            <div className="navbar bg-base-200   mx-auto z-20">
                <div className="flex-1">
                    <a className="btn btn-ghost  text-xl">Smart Petrol Pump</a>
                </div>
                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}
                    <div className='flex gap-5 items-center'>
                        <img className='w-7' src="/NavbarDefaultIcon/Notifications.png" alt="" />
                        <img className='w-6' src="/NavbarDefaultIcon/Vector.png" alt="" />
                        <img className='w-6' src="/NavbarDefaultIcon/search.png" alt="" />
                        {/* <p className=' text-lg underline-offset-4 underline'>Zara station</p> */}
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>

                        </div>

                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDefault;