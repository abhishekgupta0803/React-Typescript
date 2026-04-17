import { useState } from "react";
import type { IEmp } from "./emp.type";
import EmployeModel from "./EmployeModel";
import "./table.style.css";
type props = {
  list: IEmp[];
  HandeldeleteBtn:(data:IEmp) =>void;
  onEditBtn:(data:IEmp) =>void;
};

export const EmpTable = (props: props) => {
  const { list , HandeldeleteBtn ,onEditBtn} = props;
 
  const [view , setView] = useState(false);
  const [dataToShow , setdataToShow] = useState(null as IEmp | null);

 const  handelviewbtn = (data:IEmp) =>{
   setView(true)
   setdataToShow(data)
 }

 const handelCloseBtn = ()=>{
     setView(false)
 }
 

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((items) => {
          return (
            <tr key={items.id}>
              <td>{items.first} {items.last}</td>
              <td>{items.email} </td>
              <td>
                <div>
                    <input type="button" value="View" onClick={()=>handelviewbtn(items)}/>
                    <input type="button" value="Edit" onClick={()=>onEditBtn(items)}/>
                    <input type="button" value="Delete" onClick={()=>HandeldeleteBtn(items)}/>
                </div>
              </td>
            </tr>
          );
        })}
      </table>

      {
        view && dataToShow !==null && <EmployeModel closeBtn={handelCloseBtn} data={dataToShow}/>
      }
      
    </div>
  );
};
