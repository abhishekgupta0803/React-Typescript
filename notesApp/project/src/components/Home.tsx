import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../redux/pasteApp/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const pasteData = useSelector((state: any) => state.paste.pasteValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const pasteToEdit = pasteData.find((p: any) => p.id === pasteId);
      setTitle(pasteToEdit.title);
      console.log(pasteToEdit.title);
      setContent(pasteToEdit.contents);
      console.log(pasteToEdit.contents);
    }
  }, [pasteId]);

  const CreatePaste = () => {
    const paste = {
      title,
      contents,
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePaste(paste));
    } else {
      dispatch(addPaste(paste));
    }

    setTitle("");
    setContent("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          {pasteId ? "Update Paste" : "Create New Paste"}
        </h1>

        {/* Title + Button */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Paste Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-5 py-3
            text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={CreatePaste}
            className="px-8 py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            transition-all duration-300 shadow-lg"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>

        {/* Textarea */}
        <textarea
          rows="15"
          placeholder="Write your content here..."
          value={contents}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-5
          text-lg resize-none outline-none
          focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
