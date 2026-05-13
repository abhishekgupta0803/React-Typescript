import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back, Admin 👋
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Total Users
          </h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            12,450
          </p>

          <span className="text-green-500 text-sm mt-2 block">
            +12% this month
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Revenue
          </h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            $48,900
          </p>

          <span className="text-green-500 text-sm mt-2 block">
            +8% this month
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Orders
          </h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            1,245
          </p>

          <span className="text-red-500 text-sm mt-2 block">
            -2% this month
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Active Users
          </h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            8,532
          </p>

          <span className="text-green-500 text-sm mt-2 block">
            +18% this month
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-md mt-10 p-6 overflow-x-auto">

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Orders
          </h2>

          <button className="text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-2 text-gray-600">Order ID</th>
              <th className="py-3 px-2 text-gray-600">Customer</th>
              <th className="py-3 px-2 text-gray-600">Amount</th>
              <th className="py-3 px-2 text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-4 px-2">#1024</td>
              <td className="py-4 px-2">John Doe</td>
              <td className="py-4 px-2">$250</td>

              <td className="py-4 px-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-4 px-2">#1025</td>
              <td className="py-4 px-2">Sarah Smith</td>
              <td className="py-4 px-2">$420</td>

              <td className="py-4 px-2">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-4 px-2">#1026</td>
              <td className="py-4 px-2">Michael Lee</td>
              <td className="py-4 px-2">$180</td>

              <td className="py-4 px-2">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  Cancelled
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;