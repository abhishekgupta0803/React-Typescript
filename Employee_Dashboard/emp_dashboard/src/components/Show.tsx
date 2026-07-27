// import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useCustomHook } from "../hook/useCustomHook";
import "../css/style.css";

const Show = () => {
  const { employee } = useCustomHook();
  const { id } = useParams();
  const Navigate = useNavigate();

  const data = employee.find((p) => p.id === id);
  console.log(data);
  const handekBack = () => {
    Navigate("/EmpLists");
  };
  return (
    <div className="view">
      <button onClick={handekBack}>Back</button>
      <h1>SHOW EMPLOYEE DATA</h1>
      <p>
        <span>ID :</span>
        {data?.id}
      </p>
      <p>
        <span>Name :</span>
        {data?.name}
      </p>
      <p>
        <span>Departments :</span>
        {data?.departments}
      </p>
      <p>
        <span>Gender :</span>
        {data?.gender}
      </p>
      <p>
        <span>Position :</span>
        {data?.position}
      </p>
      <p>
        <span>Salary :</span>
        {data?.salary}
      </p>
      <p>
        <span>Status :</span>
        {data?.status ? "Active" : "Leave"}
      </p>
    </div>
  );
};

export default Show;
