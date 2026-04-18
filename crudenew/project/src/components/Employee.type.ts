export interface Employee {
    id:string,
    first:string,
    last:string,
    email:string,
}

export const DummyData : Employee[] = [

    {
    id : new Date().toJSON().toString(),
    first : "Abhishek",
    last : "Gupta",
    email : "guptaabhishek0803@gmail.com",
    }
]


export enum PageEnum  {
    list,
    add,
}
