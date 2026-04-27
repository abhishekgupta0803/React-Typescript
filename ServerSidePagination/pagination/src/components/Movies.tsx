import React, { useEffect } from "react";
import { Api_Key, Api_url } from "./MovieApi";
import "./movie.style.css"
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const Movies = () => {
  const [data, setData] = React.useState<Movie[]>([]);

  const [current , setCurrent] = React.useState(1);
  const [total , setTotal] = React.useState(1);


  const HandelBack = () =>{
      if(current > 1){
        setCurrent((prev) => (prev - 1))
      }
  }

  const HandelNext = () =>{
      if(current < total){
        setCurrent((next) => (next + 1))
      }
  }


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`${Api_url}?api_key=${Api_Key}`,{
            params:{
                 
                page:current,
            }
        });
         const {results,total_pages} = response.data;
        // console.log(response.data.results)
       setData(results);
       setTotal(total_pages);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, [current , total ]);
  return (
    <>
    <Navbar />
      { <div className="grid">
        
    {data.map((movie) => (
      <div key={movie.id} className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
         className="image"
        />

        <div className="content">
          <h3>{movie.title}</h3>
          <p>Release: {movie.release_date}</p>
        </div>
      </div>
    ))}
  </div> }

  <div className="pagination">
         {
            current > 1 && (<button className="back" onClick={HandelBack}>Back</button>)
            
        }
        
            <p>Pages | {current}</p>
        
        {
            current < total &&  (<button className="next" onClick={HandelNext}>Next</button>)
        }
       
      </div>

      <Footer />
     
    </>
  );
};

export default Movies;
