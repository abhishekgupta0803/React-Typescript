import "./zod.style.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type GenderEnum = "female" | "male" | "other";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  conform: string;
  gender: GenderEnum;
}

const Employee = z
  .object({
    firstName: z
      .string()
      .min(3, "minimum value 3 is requires")
      .max(10, "maximum 10 values is required"),
    lastName: z
      .string()
      .min(3, "minimum value 3 is requires")
      .max(5, "maximum 5 values is required"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(3, "minimum value 3 is requires")
      .max(10, "maximum 10 values is required"),
    conform: z.string(),
    gender: z.enum(["female", "male", "other"], {
      message: "Gender is required",
    }),
  })
  .refine((data) => data.password === data.conform, {
    message: "Passwords don't match",
    path: ["conform"], // path of error
  });

const Zod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(Employee),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-child">
        <div>
          <label>First Name</label>
          <input {...register("firstName", {})} />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName", {})} />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email", {})} />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input {...register("password", {})} />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Conform </label>
          <input {...register("conform", {})} />
          {errors.conform && (
            <p style={{ color: "red" }}>{errors.conform.message}</p>
          )}
        </div>

        <label>Gender Selection</label>
        <select {...register("gender")}>
          {errors.gender && (
            <p style={{ color: "red" }}>{errors.gender.message}</p>
          )}
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Zod;
