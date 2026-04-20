import ADDEmployee from "./ADDEmployee";
import { DummyData, PageEnum, type Employee } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./home.style.css"
import { useState } from "react";

const Home = () => {

  //list all data
  const [empList ,setEmpList] = useState(DummyData as Employee[]);

  const [showPage , setShowPage] = useState(PageEnum.list);

  const HandlerAddBtn = () =>{
     setShowPage(PageEnum.add)
  }

  const handlerBackBtn = () =>{
    setShowPage(PageEnum.list)
  }

  const handelAdd = (data : Employee)=>{

    setEmpList( [...empList , data ])
    setShowPage(PageEnum.list)
    
  }

  const deleteEmployeehand = (data:Employee)=>{
    const EmpIndex = empList.indexOf(data);
    const tempEmp =  [...empList];
   tempEmp.splice(EmpIndex , 1);
   setEmpList(tempEmp)
  }
  return (
    <>
      <article>
        <header>
          <h1 className="article-header">CRUDE APP</h1>
        </header>
      </article>
      <section>
          
          {
            showPage === PageEnum.list && 
            <>
            <div className="add-btn">
              <input type="button" value="ADD Emp" onClick={HandlerAddBtn} />
          </div>
          <EmployeeList list={empList}  onBtnDeleteHand={deleteEmployeehand}/>
            </>
          }
          {
            showPage === PageEnum.add && 
            <ADDEmployee backBtn={handlerBackBtn}  onClickAddBtn={handelAdd}/>
          }
      </section>
    </>
  );
};

export default Home;
