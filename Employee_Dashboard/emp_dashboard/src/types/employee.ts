export interface EmployeeTable {
  id: string;
  name: string;
  departments: string;
  gender: string;
  position: string;
  status: boolean;
  salary: number;
}

export interface DashboardTable {
  totalEmp: number;
  totalSal: number;
  totalDep: number;
  active: number;
  leave: number;
}
