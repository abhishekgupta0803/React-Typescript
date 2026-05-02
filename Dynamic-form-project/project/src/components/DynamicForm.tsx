import "./form.style.css";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validation";
import { z } from "zod";
type FormData = z.infer<typeof formSchema>;

const DynamicForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workExperience: false,
      companyName: "",
      knowLanguages: false,
      languages: [],
      education: "No Formal Education",
      school: "",
      board: "",
      degree: "",
      university: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  const workExperience = watch("workExperience");
  const knowLanguages = watch("knowLanguages");
  const Selectededucation = watch("education");

  const onsubmit = (data: FormData) => {
    console.log("Submitted Data :", data);
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit(onsubmit)} className="form">
        <h2 className="heading">Employment Form</h2>

        <input
          className="input"
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}

        <label className="checkboxLabel">
          <input type="checkbox" {...register("workExperience")} />
          work Experience?
        </label>
        {workExperience && (
          <>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
              className="input"
            />
            {errors.companyName && (
              <p className="error">{errors.companyName.message}</p>
            )}
          </>
        )}

        <label className="checkboxLabel">
          <input type="checkbox" {...register("knowLanguages")} />
          Know Other Languages?
        </label>
        {errors.languages?.message && (
          <p className="error">{errors.languages.message}</p>
        )}
        {knowLanguages && (
          <div>
            {fields.map((field, index) => (
              <div key={field.id} className="languageRow">
                <input
                  type="text"
                  placeholder="Language Name"
                  {...register(`languages.${index}.name`)}
                  className="input"
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="removeBtn"
                >
                  X
                </button>

                {errors.languages?.[index]?.name?.message && (
                  <p className="error">
                    {errors.languages[index]?.name?.message}
                  </p>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({ name: "" })}
              className="addBtn"
            >
              +Add Language
            </button>
          </div>
        )}

        <div className="radioGroup">
          <p>Education Level</p>

          <label>
            <input
              type="radio"
              value="No Formal Education"
              {...register("education")}
            />
            No Formal Education
          </label>

          <label>
            <input
              type="radio"
              value="High School Diploma"
              {...register("education")}
            />
            High School Diploma
          </label>

          {Selectededucation === "High School Diploma" && (
            <>
              <input
                type="text"
                placeholder="school name"
                {...register("school")}
                className="input"
              />
              {errors.school && (
                <p className="error">{errors.school.message}</p>
              )}

              <input
                type="text"
                placeholder="board name"
                {...register("board")}
                className="input"
              />
              {errors.board && <p className="error">{errors.board.message}</p>}
            </>
          )}

          <label>
            <input
              type="radio"
              value="Bachelors Degree"
              {...register("education")}
            />
            Bachelors Degree
          </label>
          {Selectededucation === "Bachelors Degree" && (
            <>
              <input
                type="text"
                placeholder="degree name"
                {...register("degree")}
                className="input"
              />
              {errors.degree && (
                <p className="error">{errors.degree.message}</p>
              )}

              <input
                type="text"
                placeholder="university name"
                {...register("university")}
                className="input"
              />
              {errors.university && (
                <p className="error">{errors.university.message}</p>
              )}
            </>
          )}
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
