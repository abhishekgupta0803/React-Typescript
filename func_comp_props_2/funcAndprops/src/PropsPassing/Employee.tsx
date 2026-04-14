// import React from 'react'
interface Data {
    name:string,
    desg:string,
    salary?:number
}

const Employee = ({name , desg } :Data) => {
  return (
    <div>
        <p>My Name is {name} and desg is {desg}</p>
    </div>
  )
}

export default Employee