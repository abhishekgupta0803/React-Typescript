import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCustomHook } from "../hook/useCustomHook";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../css/style.css";

const AddFormsValidate = z.object({
  name: z
    .string()
    .min(2, "value is required")
    .max(20, "max 20 character is required"),
  departments: z
    .string()
    .min(2, "value is required")
    .max(20, "max 20 character is required"),
   gender: z
    .string()
    .min(2, "value is required")
    .max(7, "max 20 character is required"),
  position: z
    .string()
    .min(2, "value is required")
    .max(20, "max 20 character is required"),
  salary: z.coerce
    .number()
    .min(1000, "minimum 1000 digit is required")
    .max(120000, "max 120000 digit is required"),
});

type Inputs = z.input<typeof AddFormsValidate>;

const EmpUpdate = () => {
  const { updateEmp, employee } = useCustomHook();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(AddFormsValidate),
  });

  const { id = "" } = useParams();
  const emp = employee.find((e) => e.id === id);
  useEffect(() => {
    if (emp) {
      reset({
        name: emp.name,
        departments: emp.departments,
        gender:emp.gender,
        position: emp.position,
        salary: emp.salary,
      });
    }
  }, [emp, reset]);
  const onSubmit = (data: any) => {
    const { name, departments, gender,position, salary } = data;
    updateEmp(id, name, departments, gender,position, salary);
    navigate("/EmpLists");
  };

  return (
    <div className="edit-emp">
      <h5>UPDATE EMPLOYEE</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Enter Name" />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          type="text"
          {...register("departments")}
          placeholder="Enter departments"
        />
        {errors.departments && <span>{errors.departments.message}</span>}

        <input
          type="text"
          {...register("gender")}
          placeholder="Enter gender"
        />
        {errors.gender && <span>{errors.gender.message}</span>}

        <input
          type="text"
          {...register("position")}
          placeholder="Enter Position"
        />
        {errors.position && <span>{errors.position.message}</span>}

        <input
          type="number"
          {...register("salary")}
          placeholder="Enter Salary"
        />
        {errors.salary && <span>{errors.salary.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmpUpdate;
