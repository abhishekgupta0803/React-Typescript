import type { IEmp } from "./emp.type";
import "./EmployeeModel.style.css"
type props = {
  closeBtn : ()=>void;
  data:IEmp;
}
const EmployeModel = (props : props) => {
  const {closeBtn , data} = props

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeBtn}>&times;</span>
         <div>
              <label >Name:{data.first} {data.last}</label>
         </div>
         <div>
              <label >Email:{data.email}</label>
         </div>
      </div>
    </div>
  );
};

export default EmployeModel;
