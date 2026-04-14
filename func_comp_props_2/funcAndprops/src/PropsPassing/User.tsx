import React from "react";

interface Props {
    name:string,
    age:number,
    gender?:string
}

const User:React.FC<Props>= ({name , age , gender}) =>{
    return <>
        <p>
            Hello , My self {name} i am learning React + TypeScript , 
            My age is {age} ,
            My Gender is {gender}

        </p>
    </>
}

export default User;