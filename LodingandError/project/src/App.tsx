import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {

    setLoading(true);
    setError(null);

    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!data.ok) {
        throw new Error("Fail to fetch data");
      }

      const response: User[] = await data.json();
      setData(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
     
    }
    finally {
       setLoading(false)
     }
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>

      {Loading && <h1>Loading Data....</h1>}
      {error && <p>{error}</p>}
       
       <div>
          {
            data?.map((items)=>(<ul key={items.id}>
                  <li>{items.name}</li>
                  <li>{items.email}</li>
               </ul>))
          } 
       </div>
    </div>
  );
};

export default App;
