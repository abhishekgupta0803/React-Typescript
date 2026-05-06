import React, { useRef, useState, type ChangeEvent } from "react";

type FileWidthProgress = {
    id:string;
    file:File;
    progress:number;
    uploaded:boolean;
}

type FileInputProps = {
     :React.RefObject<HTMLInputElement>;
    disabled:boolean;
    onFileSelect:(e:ChangeEvent<HTMLInputElement>) =>void
};




const FileUpload = ({inputRef ,disabled , onFileSelect} : FileInputProps) => {

    // const [files , setFiles] = useState<FileWidthProgress[]>([]);

    // const inputRef = useRef<HTMLInputElement>(null);


  return (
    <>
        <input type="file" 
        ref={inputRef}
        onChange={onFileSelect}

        
        />
    </>
  )
}


export default FileUpload