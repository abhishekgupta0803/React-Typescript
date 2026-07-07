import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePaste } from "../redux/pasteApp/pasteSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Paste = () => {
  const [search, setSearch] = useState("");

  const pasteData = useSelector((state: any) => state.paste.pasteValue);
  const dispatch = useDispatch();

  const filterData = pasteData.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const deletePaste = (pasteId: string) => {
    dispatch(removePaste(pasteId));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filterData.length > 0 ? (
            filterData.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-3 break-words">{item.content}</p>
                <p>{item.created_at}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <button
                    onClick={() => deletePaste(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Delete
                  </button>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                    <Link to={`/paste/${item.id}`}>View</Link>
                  </button>

                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                    Share
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                    onClick={() => {
                      navigator.clipboard.writeText(item.contents);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    copy
                  </button>
                  <button className="bg-pink-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
                    <Link to={`/?pasteId=${item.id}`}>Edit</Link>
                  </button>
                  <p>{item.createdAt}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500 text-lg font-medium mt-10">
              No Paste Found 😔
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
