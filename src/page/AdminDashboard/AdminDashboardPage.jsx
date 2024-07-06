import car from './../../assets/wal2.jpg'

const AdminDashboardPage = () => {
    return (
<<<<<<< HEAD
        <section >
            <section className="flex gap-5 justify-center items-center p-10">
                <section className="shadow-md ">
                    <div className="bg-gray-700 rounded-t-md p-5 text-white  ">
                        <h1 className="font-bold text-3xl">Diesel</h1>
                        <p>Total Capacity:<span>10000 L</span></p>
                    </div>
                    <div className=" bg-white rounded-b-md p-5 text-black">
                        <div>
                            <p>Diesel 1</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
=======
        <div className='min-h-screen ' style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat', backgroundSize: '1500px', minHeight: '100vh' }}>

            <section className="p-8 max-w-4xl mx-auto " >

                <section className=" grid grid-cols-3  gap-6 ">

                    <section className="shadow-md transform hover:scale-105 duration-500 hover:cursor-pointer card glass col-span-2   ">
                        <div className="bg-gray-700 rounded-t-md p-5 text-white  ">
                            <h1 className="font-bold  card-title">Deisel</h1>
                            <p>Total Capacity:<span> 10000 L</span></p>
>>>>>>> 55892f5c96bfb56293e4f08b72a7a1d505352983
                        </div>
                        <div className="  rounded-b-md p-5 text-black w-full card-body font-medium ">
                            <div className=" ">
                                <p>Diesel 1 <span className="badge bg-primary  text-white  ">20 %</span></p>
                                <progress className="progress progress-primary  " value="70" max="100"></progress>

                            </div>
                            <div>
                                <p>Diesel 2   <span className="badge bg-primary  text-white  ">50 %</span></p>
                                <progress className="progress progress-primary " value="50" max="100"></progress>

                            </div>
                            <div>
                                <p>Diesel 3  <span className="badge bg-primary  text-white ">30 %</span></p>
                                <progress className="progress progress-primary " value="30" max="100"></progress>

                            </div>
                        </div>
                    </section>

                    <section className="shadow-md transform hover:scale-105 duration-500 hover:cursor-pointer card glass ">
                        <div className="bg-[#337357] rounded-t-md p-5 text-white   ">
                            <h1 className="font-bold  card-title">Petrol</h1>
                            <p>Total Capacity:<span> 10000 L</span></p>
                        </div>
                        <div className="  rounded-b-md p-5 text-black card-body font-medium">
                            <div>
                                <p>Petrol 1</p>
                                <progress className="progress progress-success w-56" value="20" max="100"></progress>
                                <div className="badge bg-[#337357]  text-white ml-2">20 %</div>
                            </div>
                            <div>
                                <p>Petrol 2</p>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>
                                <div className="badge bg-[#337357]  text-white ml-2">70 %</div>
                            </div>
                            <div>
                                <p>Petrol 3</p>
                                <progress className="progress progress-success w-56" value="32" max="100"></progress>
                                <div className="badge bg-[#337357]  text-white ml-2">32 %</div>
                            </div>
                        </div>
                    </section>

                    <section className=" shadow-md transform hover:scale-105 duration-500 hover:cursor-pointer card glass ">
                        <div className="bg-[#0F79B9] rounded-t-md p-5 text-white   ">
                            <h1 className="font-bold card-title">Octane</h1>
                            <p>Total Capacity:<span> 10000 L</span></p>
                        </div>
                        <div className="  rounded-b-md p-5 text-black card-body font-medium">
                            <div>
                                <p>Octane 1 <span className="badge badge-info text-white ml-2">40 %</span> </p>
                                <progress className="progress progress-info " value="40" max="100"></progress>

                            </div>
                            <div>
                                <p>Octane 2  <span className="badge badge-info text-white ml-2">70 %</span></p>
                                <progress className="progress progress-info " value="70" max="100"></progress>

                            </div>
                            <div>
                                <p>Octane 3 <span className="badge badge-info text-white ml-2">90 %</span></p>
                                <progress className="progress progress-info " value="90" max="100"></progress>

                            </div>
                        </div>
                    </section>

                    {/* status section */}
                    <section className="   flex flex-col gap-5 w-full col-span-2">
                        <div className=' rounded-md border-t-8 border-blue-700 transform hover:scale-105 duration-500 hover:cursor-pointer card '>
                            <div className="flex gap-5 justify-between items-center bg-base-200  text-black p-5 rounded-md rounded-t-none shadow-md  glass bg-transparent  ">
                                <img className="w-14" src="/DashboardIcons/Rectangle 41.png" alt="" />
                                <div>
                                    <p>Fuel Status</p>
                                    <h2 className="font-bold text-3xl">200,000 Lt</h2>
                                </div>
                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                                </div>
                            </div>
                        </div>
                        <div className=' rounded-md border-t-8 border-cyan-600 transform hover:scale-105 duration-500 hover:cursor-pointer card '>
                            <div className="flex gap-5 items-center justify-between bg-base-200  text-black p-5 rounded-md shadow-md transform hover:scale-105 duration-500 hover:cursor-pointer glass bg-transparent rounded-t-none ">
                                <img className="w-14" src="/DashboardIcons/Rectangle 43.png" alt="" />
                                <div>
                                    <p>Reserve Fuel Status</p>
                                    <h2 className="font-bold text-3xl">132,000 Lt</h2>
                                </div>
                                <div>
                                    <div className="radial-progress text-cyan-600" style={{ "--value": 70 }} role="progressbar">40%</div>
                                </div>
                            </div>


                        </div>


                    </section>
                </section>



            </section>
<<<<<<< HEAD

            {/* status section */}
            <section className="mt-5 grid grid-cols-2 gap-5 w-full p-10">
                <div className="flex gap-5 justify-between items-center bg-base-200  text-black p-5 rounded-md shadow-md ">
                    <img className="w-14" src="/DashboardIcons/Rectangle 41.png" alt="" />
                    <div>
                        <p>Fuel Status</p>
                        <h2 className="font-bold text-3xl">200,000 Lt</h2>
                    </div>
                    <div>
                        <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                </div>

                <div className="flex gap-5 items-center justify-between bg-base-200  text-black p-5 rounded-md shadow-md ">
                    <img className="w-14" src="/DashboardIcons/Rectangle 43.png" alt="" />
                    <div>
                        <p>Reserve Fuel Status</p>
                        <h2 className="font-bold text-3xl">132,000 Lt</h2>
                    </div>
                    <div>
                        <div className="radial-progress text-info" style={{ "--value": 70 }} role="progressbar">40%</div>
                    </div>
                </div>
            </section>

        </section>
=======
        </div>
>>>>>>> 55892f5c96bfb56293e4f08b72a7a1d505352983
    );
};

export default AdminDashboardPage;