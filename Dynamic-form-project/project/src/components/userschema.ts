import { z } from "zod";
export const languageSchema = z.object({
  name: z.string().min(1, "String must contain at least 1 character(s)"),
});

export  const employeeSchema = z.object({
  fullName: z.string().min(1, "String must contain at least 1 character(s)"),
  workExperience: z.boolean().optional(),
  companyName: z.string().optional(),
  knowLanguages: z.boolean(),
  languages: z.array(languageSchema).optional(),
  education: z.enum([
    "No Formal Education",
    "High School Diploma",
    "Bachelors Degree",
  ]),

  //   HighSchool: z.boolean().optional(),
  board: z.string().optional(),
  school: z.string().optional(),

  //   Bachelors:z.boolean().optional(),
  university: z.string().optional(),
  degree: z.string().optional(),
});

