import { useState } from "react";
import "./form.style.css";
import type { Employee } from "./Employee.type";
type props = {
  backBtn: () => void;
  onClickAddBtn: (data :Employee) =>void
};

const ADDEmployee = (props: props) => {
  const { backBtn , onClickAddBtn} = props;

  const [first, setFirst] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handFirst = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
  };

  const handLast = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLast(e.target.value);
  };

  const handEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>) =>{
     e.preventDefault();
      const data : Employee = 
        {
            id : new Date().toJSON().toString(),
            first : first,
            last :last,
            email :email,
        }

      onClickAddBtn(data)

  }


  return (
    <div className="control-form">
      <h3>ADD EMPLOYEE FORM</h3>
      <form onSubmit={handelSubmit}>
        <div>
          <label>First :</label>
          <input type="text" value={first} onChange={handFirst} />
        </div>
        <div>
          <label>Last :</label>
          <input type="text" value={last} onChange={handLast} />
        </div>
        <div>
          <label>Email :</label>
          <input type="text" value={email} onChange={handEmail} />
        </div>
        <div>
          <input type="button" value="Back" onClick={backBtn} />
          <input type="submit" value="Add" onClick={()=>onClickAddBtn}/>
        </div>
      </form>
    </div>
  );
};

export default ADDEmployee;
