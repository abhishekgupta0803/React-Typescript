import { useParams } from "react-router-dom";

type Params = {
    id:string;
};

const User = () => {

    const {id} = useParams<Params>();
  return (
    <div>
        <h1>User Id :{id}</h1>
    </div>
  )
}

export default User