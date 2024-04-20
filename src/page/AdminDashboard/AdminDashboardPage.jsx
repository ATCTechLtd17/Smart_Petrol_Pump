

const AdminDashboardPage = () => {
    return (
        <section >
            <section className="flex gap-5">
                <section className="shadow-md ">
                    <div className="bg-gray-700 rounded-t-md p-5 text-white  ">
                        <h1 className="font-bold text-3xl">Desel</h1>
                        <p>Total Capacity:<span>10000 L</span></p>
                    </div>
                    <div className=" bg-white rounded-b-md p-5 text-black">
                        <div>
                            <p>Desel 1</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        </div>
                        <div>
                            <p>Desel 2</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                        </div>
                        <div>
                            <p>Desel 3</p>
                            <progress className="progress progress-primary w-56" value="30" max="100"></progress>
                        </div>
                    </div>
                </section>

                <section className="shadow-md ">
                    <div className="bg-[#337357] rounded-t-md p-5 text-white   ">
                        <h1 className="font-bold text-3xl">Petrol</h1>
                        <p>Total Capacity:<span>10000 L</span></p>
                    </div>
                    <div className=" bg-white rounded-b-md p-5 text-black">
                        <div>
                            <p>Petrol 1</p>
                            <progress className="progress progress-success w-56" value="20" max="100"></progress>
                        </div>
                        <div>
                            <p>Petrol 2</p>
                            <progress className="progress progress-success w-56" value="70" max="100"></progress>
                        </div>
                        <div>
                            <p>Petrol 3</p>
                            <progress className="progress progress-success w-56" value="500" max="100"></progress>
                        </div>
                    </div>
                </section>

                <section className=" shadow-md ">
                    <div className="bg-[#0F79B9] rounded-t-md p-5 text-white   ">
                        <h1 className="font-bold text-3xl">Octane</h1>
                        <p>Total Capacity:<span>10000 L</span></p>
                    </div>
                    <div className=" bg-white rounded-b-md p-5 text-black">
                        <div>
                            <p>Octane 1</p>
                            <progress className="progress progress-info w-56" value="40" max="100"></progress>
                        </div>
                        <div>
                            <p>Octane 2</p>
                            <progress className="progress progress-info w-56" value="70" max="100"></progress>
                        </div>
                        <div>
                            <p>Octane 3</p>
                            <progress className="progress progress-info w-56" value="90" max="100"></progress>
                        </div>
                    </div>
                </section>
            </section>

            {/* status section */}
            <section className="mt-5 grid grid-cols-2 gap-5 w-full">
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
    );
};

export default AdminDashboardPage;