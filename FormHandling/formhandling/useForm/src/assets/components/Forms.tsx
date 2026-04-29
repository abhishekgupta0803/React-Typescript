import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type GenderEnum = "female" | "male" | "other";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: "First Name is required",
          })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}

        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: "Last Name is required",
          })}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email Name is required",
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        <label>Gender Selection</label>
        <select {...register("gender", { required: "Gender is requires" })}>
          {errors.gender && (
            <p style={{ color: "red" }}>{errors.gender.message}</p>
          )}
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
