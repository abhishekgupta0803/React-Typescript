import { createContext } from "react";
import type { DashboardTable, EmployeeTable } from "../types/employee";

export interface ContextTypes {
  dashboard: DashboardTable;
  employee: EmployeeTable[];

  totalEmp:()=> void;
  totalDep:()=> void;
  active:()=>void;

  addEmp: (
    name: string,
    departments: string,
    position: string,
    status: boolean,
    salary: number,
  ) => void;
  deleteEmp: (id: string) => void;
  updateEmp: (
    id: string,
    name: string,
    departments: string,
    position: string,
    salary: number,
  ) => void;
}

export const context = createContext<ContextTypes | null>(null);
