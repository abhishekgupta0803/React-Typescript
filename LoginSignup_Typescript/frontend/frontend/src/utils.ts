import { toast } from "react-toastify";

export const handelSuccess = (msg:string) =>{

    return toast.success(msg ,{
         position:"top-center"  
    })

}

export const handelerrors = (msg:React.ReactNode) =>{

    return toast.error(msg ,{
         position:"top-center"  
    })

}