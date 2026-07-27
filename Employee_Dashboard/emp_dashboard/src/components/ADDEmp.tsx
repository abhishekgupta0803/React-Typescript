import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCustomHook } from "../hook/useCustomHook";
import { useNavigate } from "react-router-dom";
import "../css/style.css"

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
  status: z.preprocess(
    (value) => value === "true" || value === true,
    z.boolean()
  ),
});

// Use Zod to infer the input types directly, matching your schema's requirements
type Inputs = z.input<typeof AddFormsValidate>;
// type Outputs = z.output<typeof AddFormsValidate>;

const ADDEmp = () => {
  const {addEmp} = useCustomHook();
   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ 
    resolver: zodResolver(AddFormsValidate) 
  });


  // Data will be strictly typed as Outputs
  const onSubmit = (data:any) => {
    const { name , departments,gender, position,status,salary} = data;
    addEmp(name , departments,gender,position,status,salary);
    reset();
    navigate("/EmpLists")
    // console.log("subm=>", data);
  };

  // const onError = (errors: any) => {
  //   console.log(errors);
  // };

  return (
    <div className="add-container">
      <h3>ADD NEW EMPLOYEE</h3>
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
        
        <label>
          <input
            type="radio"
            value="true"
            {...register("status")}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="false"
            {...register("status")}
          />
          Leave
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ADDEmp;
