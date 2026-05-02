import { z } from "zod";
import { employeeSchema } from "./userschema";

export const formSchema = employeeSchema.superRefine((data, ctx) => {
  if (data.workExperience && !data.companyName) {
    ctx.addIssue({
      path: ["companyName"],
      code: z.ZodIssueCode.custom,
      message: "Company name is required",
    });
  }

  if (data.knowLanguages && (!data.languages || data.languages.length === 0)) {
    ctx.addIssue({
      path: ["languages"],
      code: z.ZodIssueCode.custom,
      message: "At least one languages is requires.",
    });
  }

  if (data.education === "High School Diploma") {
    if (!data.school) {
      ctx.addIssue({
        path: ["school"],
        code: z.ZodIssueCode.custom,
        message: "school name is required",
      });
    }
  }

  if (data.education === "High School Diploma") {
    if (!data.board) {
      ctx.addIssue({
        path: ["board"],
        code: z.ZodIssueCode.custom,
        message: "board name is required",
      });
    }
  }

  if (data.education === "Bachelors Degree") {
    if (!data.degree) {
      ctx.addIssue({
        path: ["degree"],
        code: z.ZodIssueCode.custom,
        message: "degree name is required",
      });
    }
  }

  if (data.education === "Bachelors Degree") {
    if (!data.university) {
      ctx.addIssue({
        path: ["university"],
        code: z.ZodIssueCode.custom,
        message: "university name is required",
      });
    }
  }
});
