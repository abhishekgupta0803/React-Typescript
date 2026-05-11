import axios from "axios";
import { useState, type ChangeEvent } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle"); //status
  const [uploadProgress ,setUploadProgress] = useState<number>(0);//progress bar

  function handelFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handelFileUpload() {
    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData)

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress:(ProgressEvent) =>{
            const progress = ProgressEvent.total
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            :0;
            setUploadProgress(progress);
        }
      });

      setStatus("success");
      setUploadProgress(100);
    } catch {
      setStatus("error");
       setUploadProgress(0);
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6 sm:p-8">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        File Upload
      </h2>

      {/* File Input */}
      <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-blue-400 rounded-xl p-6 cursor-pointer hover:bg-blue-50 transition">
        <span className="text-gray-600 text-sm sm:text-base">
          Click to select a file
        </span>
        <input
          type="file"
          onChange={handelFileChange}
          className="hidden"
        />
      </label>

      {/* File Details */}
      {file && (
        <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm sm:text-base space-y-2">
          <p className="break-all">
            <span className="font-semibold text-gray-700">File Name:</span>{" "}
            {file.name}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Size:</span>{" "}
            {(file.size / 1024).toFixed(2)} KB
          </p>
          <p className="break-all">
            <span className="font-semibold text-gray-700">Type:</span>{" "}
            {file.type}
          </p>
        </div>
      )}

      {/* Upload Progress */}
      {status === "uploading" && (
        <div className="mt-6 space-y-3">
          <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-3 rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-center text-gray-600 font-medium">
            {uploadProgress}% Uploaded
          </p>
        </div>
      )}

      {/* Upload Button */}
      {file && status !== "uploading" && (
        <button
          onClick={handelFileUpload}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Upload File
        </button>
      )}

      {/* Success Message */}
      {status === "success" && (
        <p className="mt-4 text-center text-green-600 font-medium text-sm sm:text-base">
          File uploaded successfully!
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p className="mt-4 text-center text-red-600 font-medium text-sm sm:text-base">
          Upload failed. Please try again.
        </p>
      )}
    </div>
  </div>
);
};

export default FileUploader;
