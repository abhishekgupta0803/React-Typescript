import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Viewpastes = () => {

  const {id} = useParams();
  const pastesData = useSelector((state:any)=>state.paste.pasteValue)

  const filterData = pastesData.find((p:any)=>(p.id === id));
  console.log(filterData)

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8">

        {/* Title + Button */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Paste Title..."
            value={filterData.title}
            // onChange={ setTitle(filterData.title)}
            disabled
            className="flex-1 border border-gray-300 rounded-xl px-5 py-3
            text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Textarea */}
        <textarea
          rows="15"
          placeholder="Write your content here..."
          value={filterData.contents}
          disabled
          // onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-5
          text-lg resize-none outline-none
          focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>
  );
};

export default Viewpastes;
