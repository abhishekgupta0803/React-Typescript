export interface IEmp{

    id : string;
    first:string;
    last:string;
    email:string;
}

export const DummyEmp : IEmp[] = [
    {
     id: new Date().toJSON().toString(),
     first:"Abhishek", 
     last:"Gupta",
     email:"abhi3377@gmail.com",

    }
]