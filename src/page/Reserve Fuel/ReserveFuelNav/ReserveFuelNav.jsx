import { Link } from "react-router-dom";
const ReserveFuelNav = () => {
  return (
    <div>

      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <Link to={'/daily_incoming_fuel'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Daily Incoming Fuel</p>
                </Link>

                <Link to={'/daily_outgoing_fuel'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Daily Outgoing Fuel</p>
                </Link>

                <Link to={'/total_reserve_fuel'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Total Reserve Fuel</p>
                </Link>



              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default ReserveFuelNav;