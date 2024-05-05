import { Link } from "react-router-dom";
const BranchesNav = () => {
  return (
    <div>

      <nav className="bg-teal-500 text-white ">
        <div className="w-fit mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative w-full flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <Link to={'/add_new_branch'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Branch</p>
                </Link>

                <Link to={'/branches_employees_status'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch Employee Status</p>
                </Link>

                <Link to={'/branch_list'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch List</p>
                </Link>

                <Link to={'/report'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Report</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default BranchesNav;