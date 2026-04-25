import { useState } from "react";
import "./form.style.css";
import type { IEmp } from "./emp.type";
type Props = {
  HandelBackBtn: () => void;
  HandelSubmitBtn: (data: IEmp) => void;
};

const AddEmpData = (props: Props) => {

const [first, setFirst] = useState("");
const [last, setLast] = useState("");
const [email, setEmail] = useState("");


  const { HandelBackBtn, HandelSubmitBtn } = props;

  const handelFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
  };

  const handelLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLast(e.target.value);
  };

  const handelEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const HandelSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IEmp = {
      id: new Date().toJSON().toString(),
      first: first,
      last: last,
      email: email,
    };

    HandelSubmitBtn(data);
    HandelBackBtn()
  };
  return (
    <div className="control-form">
      <form onSubmit={HandelSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" value={first} onChange={handelFirst} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={last} onChange={handelLast} />
        </div>
        <div>
          <label>Email Name</label>
          <input type="text" value={email} onChange={handelEmail} />
        </div>
        <div>
          <input type="button" value="Back" onClick={HandelBackBtn} />
          <input type="submit" value="ADD" onClick={()=>HandelSubmitBtn}/>
        </div>
      </form>
    </div>
  );
};

export default AddEmpData;
