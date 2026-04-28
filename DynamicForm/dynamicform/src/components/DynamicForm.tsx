import { useState } from "react"

 interface StudentFormData  {
    name:string,
    email:string,
    age:number,
    skills:string[],
}




const DynamicForm = () => {
    const [formData ,setFormData] = useState<StudentFormData>({
        name:"",
        email:"",
        age:0,
        skills:[""],


    });

    const handelChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handelSkillChange = (index:number , value :string)=>{
    const updatedSkills = [...formData.skills];

    updatedSkills[index] = value;

    setFormData((prev)=>({
        ...prev,
        skills:updatedSkills,
    }))

  }

  const addSkill = () =>{
     setFormData((prev)=>({
        ...prev,
        skills:[...prev.skills, ""],
     }));
  };

  const removeSkill = (index:number)=>{
    const updatedSkills = formData.skills.filter((_,i) => i !== index );
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  }


  const handelSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    console.log("submitted Successfully" , formData);
    alert("form Submitted successfully")

  }

  return (
    <div>
        <form  onSubmit={handelSubmit}>
            <h2>Student Registration Form</h2>

            <input type="text"
             name="name"
             placeholder="Enter Name"
             value={formData.name}
             onChange={handelChange} 
             required
             />

              <input type="email"
             name="email"
             placeholder="Enter Email"
             value={formData.email}
             onChange={handelChange} 
             required
             />

              <input type="number"
             name="age"
             placeholder="Enter Age"
             value={formData.age}
             onChange={handelChange} 
             required
             />

            <h3>Skills</h3>

            {
                formData.skills.map((skill , index)=>(

                    <div key={index}>
                        <input type="text"
                        placeholder={`Skill ${index +1}`}
                        value={skill} 
                        onChange={(e)=> handelSkillChange(index , e.target.value)} 
                        required
                        />

                        {
                            formData.skills.length > 1 && (
                                <button type="button" 
                                 onClick={()=> removeSkill(index)}>
                                    Remove

                                </button>
                            )
                        }

                    </div>

                ))
            }

            <button type="button" onClick={addSkill}>Add Skill</button>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default DynamicForm