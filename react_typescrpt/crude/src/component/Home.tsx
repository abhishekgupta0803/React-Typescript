import { useState } from "react";
import { DummyEmp, type IEmp } from "./emp.type";
import { EmpTable } from "./EmpTable";
import "./home.style.css";
import AddEmpData from "./AddEmpData";
import { PageEnum } from "./PagesEnum";
import { Edit } from "./Edit";

export const Home = () => {
   
    const [emp , setEmp] = useState( DummyEmp as IEmp[])

    const [seePage , setSeePage] = useState(PageEnum.List);

    //  const [edit , setEdit] = useState(null as null | IEmp);

    const ShowListPage = ()=>{
      setSeePage(PageEnum.List)
    }


    const HandelAdd = () =>{
      setSeePage(PageEnum.Add);
    }

    const handleAddList = (data:IEmp) =>{
      setEmp([...emp , data])
    };

    const deleteButton = (data : IEmp)=>{

      const index = emp.indexOf(data);
      const tempData = [...emp];
      tempData.splice(index , 1);
      setEmp(tempData)

    }

    // const editEmpData = (data:IEmp)=>{
    //       setSeePage(PageEnum.Edit);
    //       setEdit(data);
    // }
  return (
    <>
    <article className="article-header">
      <header>
        <h1>CRUDE APPLICATION</h1>
      </header>
    </article>
     <section>
      <h3 className="records"> RECORDS</h3>
      {
        seePage === PageEnum.List &&
        <>
          <input type="button" value="ADD EMPLOYEE" onClick={HandelAdd} className="add-btn" />
         <EmpTable list={emp} HandeldeleteBtn={deleteButton} />
        </>
      }

      {
        seePage === PageEnum.Add && <AddEmpData HandelBackBtn={ShowListPage} HandelSubmitBtn={handleAddList} />
      }

      {/* {
        seePage === PageEnum.Edit && <Edit  ={editEmpData}/>
      } */}
      </section>
    </>
  );
};
