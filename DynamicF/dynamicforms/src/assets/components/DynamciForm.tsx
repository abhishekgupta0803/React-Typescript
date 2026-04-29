import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./dynamic.style.css"

//schema

const baseSchema = z.object({
  role: z.enum(["student", "employee"]),
  firstName: z.string().min(2, "First name is requires"),
  lastName: z.string().min(2, "Last name is requires"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "valid phone number"),
});

//student

const studentSchema = baseSchema.extend({
  role: z.literal("student"),
  schoolName: z.string().min(2, "schoole name is requires"),
  className: z.string().min(2, "class name is requires"),
  rollNumber: z.string().min(1, "Roll number is required"),
  guardianName: z.string().min(2, "Guardian name required"),
});

//employee schema

const employeeSchema = baseSchema.extend({
  role: z.literal("employee"),
  companyName: z.string().min(2, "company name name is requires"),
  department: z.string().min(2, "Department is requires"),
  salary: z.coerce.number().min(1000, "salary is  required"),
  experience: z.coerce.number().min(0, "Experience required"),
});

//dynamic union schema

const formSchema = z.discriminatedUnion("role", [
  studentSchema,
  employeeSchema,
]);

type FormData = z.infer<typeof formSchema>;

const DynamciForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "student",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  
   

  const selectedRole = watch("role");

  const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
  console.log(data);
};

  return (
    <div className="container">
      <h2>Dynamic Registration Forms </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* basic details */}
        <select {...register("role")}>
          <option value="student">Student</option>
          <option value="employee">Employess</option>
        </select>

        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        {"firstName" in errors && <p>{errors.firstName?.message}</p>}

        <input type="text" placeholder="Last Name" {...register("lastName")} />
        {"lastName" in errors && <p>{errors.lastName?.message}</p>}

        <input type="email" placeholder="Email" {...register("email")} />
        {"email" in errors && <p>{errors.email?.message}</p>}

        <input type="number" placeholder="Phone" {...register("phone")} />
        {"phone" in errors && <p>{errors.phone?.message}</p>}

        {/* //student  */}

        {selectedRole === "student" && (
          <>
            <input
              type="text"
              placeholder="School Name"
              {...register("schoolName")}
            />
            <p>{"schoolName" in errors ? errors.schoolName?.message : ""}</p>

            <input
              type="text"
              placeholder="className "
              {...register("className")}
            />
            <p>{"className" in errors ? errors.className?.message : ""}</p>

            <input
              type="text"
              placeholder="rollNumber "
              {...register("rollNumber")}
            />
            <p>{"rollNumber" in errors ? errors.rollNumber?.message : ""}</p>

            <input
              type="text"
              placeholder="guardianName"
              {...register("guardianName")}
            />
            <p>
              {"guardianName" in errors ? errors.guardianName?.message : ""}
            </p>
          </>
        )}

        {/* //Employee  */}

        {selectedRole === "employee" && (
          <>
            <input
              type="text"
              placeholder="companyName "
              {...register("companyName")}
            />
            <p>{"companyName" in errors ? errors.companyName?.message : ""}</p>

            <input
              type="text"
              placeholder="department "
              {...register("department")}
            />
            <p>{"department" in errors ? errors.department?.message : ""}</p>

            <input
              type="number"
              placeholder="salary "
              {...register("salary")}
            />
            <p>{"salary" in errors ? errors.salary?.message : ""}</p>

            <input
              type="number"
              placeholder="experience"
              {...register("experience")}
            />
            <p>{"experience" in errors ? errors.experience?.message : ""}</p>
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamciForm;
