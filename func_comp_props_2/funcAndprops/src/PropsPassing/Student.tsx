import React from 'react'

type Std = {
    id:number,
    name:string,
    college:string,
    address?:string,
}

const Student = ({id , name , college}:Std) => {
  return (
    <div>
        <p>My id is {id} or My Name is {name} and My college is {college}</p>
    </div>
  )
}

export default Student