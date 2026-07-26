export interface EmployeeTable {
  id: string;
  name: string;
  departments: string;
  position: string;
  status: boolean;
  salary: number;
}

export interface DashboardTable {
  totalEmp: number;
  totalDep: number;
  active: number;
  leave: number;
}
