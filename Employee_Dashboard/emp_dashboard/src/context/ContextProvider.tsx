import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import type { DashboardTable, EmployeeTable } from "../types/employee";
import { context } from "./ContextTypes";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [employee, setEmployee] = useState<EmployeeTable[]>(() => {
    const emp = localStorage.getItem("employee");

    return emp ? JSON.parse(emp) : [];
  });

  const [dashboard, setDashboard] = useState<DashboardTable>(() => {
    const dash = localStorage.getItem("dashb");

    return dash
      ? (JSON.parse(dash) as DashboardTable)
      : {
          totalEmp: 0,
          totalDep: 0,
          totalSal: 0,
          active: 0,
          leave: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employee));
  }, [employee]);

  useEffect(() => {
    // console.log(dashboard)
    localStorage.setItem("dashb", JSON.stringify(dashboard));
  }, [dashboard]);

  const addEmp = (
    name: string,
    departments: string,
    gender: string,
    position: string,
    status: boolean,
    salary: number,
  ) => {
    const newEmp: EmployeeTable = {
      id: uuidv4(),
      name,
      departments,
      gender,
      position,
      status,
      salary,
    };

    setEmployee((prev: EmployeeTable[]) => [...prev, newEmp]);
  };

  //delete
  const deleteEmp = (id: string) => {
    setEmployee((prev) => prev.filter((del) => del.id !== id));
  };

  //update
  const updateEmp = (
    id: string,
    name: string,
    departments: string,
    gender:string,
    position: string,
    salary: number,
  ) => {
    console.log(id);
    setEmployee((prev) =>
      prev.map((p: any) =>
        p.id === id
          ? {
              ...p,
              name: name,
              departments: departments,
              gender: gender,
              position: position,
              salary: salary,
            }
          : p,
      ),
    );
  };

  //dashboard logic

  //total emp

  useEffect(() => {
    const totalEmp = () => {
      const totalEmp = employee.length;
      // console.log(totalEmp)
      setDashboard((prev: any) => ({ ...prev, totalEmp }));
    };

    //total dep

    const totalDep = () => {
      const uniqueDepartments = [
        ...new Set(
          employee
            .map((dep) => dep.departments.toLowerCase().trim())
            .filter((dep) => dep !== ""),
        ),
      ];

      setDashboard((prev) => ({
        ...prev,
        totalDep: uniqueDepartments.length,
      }));
    };

    //active users
    //  console.log(dashboard)
    const active = () => {
      const activ = employee.filter((at) => at.status === true);
      const leave = employee.filter((at) => at.status === false);

      setDashboard((prev) => ({
        ...prev,
        active: activ.length,
        leave: leave.length,
      }));
    };

    const totalSal = () => {
      const salary = employee.map((sal) => sal.salary);
      const totalSal = salary.reduce((acc, sum) => acc + sum, 0);
      setDashboard((prev) => ({ ...prev, totalSal }));
    };

    totalEmp();
    totalDep();
    active();
    totalSal();
  }, [employee]);

  return (
    <context.Provider
      value={{ addEmp, deleteEmp, updateEmp, dashboard, employee }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
