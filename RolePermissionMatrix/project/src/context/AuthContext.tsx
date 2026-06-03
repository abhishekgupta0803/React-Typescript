// यह code React Context API का use करके Authentication System बनाने की शुरुआत है। इसका उद्देश्य है कि पूरे app में user, login, logout और permissions की information share की जा सके।
import { createContext, useContext, useState } from "react";

export interface User{
    id:string,
    username:string,
    password:string,
    role:string,
    permissions:string[]

}

interface AuthContextType{
    user:User | null;
    login:(userData:User)=>void;
    logout:()=>void;
    hasPermission:(permission:string)=>boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}:{children: React.ReactNode})=>{
   const [user , setUser] = useState<User | null>(()=>{
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
   });

   const login = (userData:User)=>{
    console.log("Logging in user context:", userData);
    setUser(userData);
    localStorage.setItem("user",JSON.stringify(userData));
   }

   const logout = ()=>{
    setUser(null);
    localStorage.removeItem("user");
   }

   const hasPermission = (permission:string)=>{
    return user?.permissions.includes(permission) || false;

   }


    return <AuthContext.Provider value={{ user, login, logout, hasPermission }}>{children}</AuthContext.Provider>

}

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}