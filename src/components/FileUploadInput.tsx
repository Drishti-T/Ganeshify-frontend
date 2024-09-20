import { useState } from 'react';


export const FileUploadInput = () => {

    const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e : any) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFileName(files.length === 1 ? files[0].name : `${files.length} files selected`);
    } else {
      setFileName("No file chosen");
    }
  };



    return <div>

<div className="my-4">
      <label className="block mb-2 text-lg font-medium">Upload Documents (PDF, PPT, TXT)</label>
      {/* Hidden file input */}
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.ppt,.pptx,.txt"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Custom button */}
      <label
        htmlFor="file-upload"
        className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-zinc-200 text-zinc-700 rounded-md hover:bg-zinc-300 font-medium"
      >
        Choose File
      </label>

      {/* Display the selected file name */}
      <span className="ml-4 text-gray-500">{fileName}</span>
    </div>


    </div>
}