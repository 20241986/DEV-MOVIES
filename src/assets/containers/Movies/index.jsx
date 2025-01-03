import React from "react"
import { Background } from "../Home/styles"
import Button from "../../components/Button copy"

function Movies(){
      
     <Background 
     img={https://image.tmdb.org/t/p/original${movie.backdrop_path}}
          >
          <container>
               <info>
                    <h1>{Movies.title}</h1>
                    <p>{Movies.overview}</p>
                    <div>
                         <Button>Assista agora</Button>
                         <Button>Assista o Trailer</Button>
                    </div>
               </info>
               <poster>
                    <img
                    alt="capa-do-filme"
                    src={'https://</poster>image.tmdb.org/t/p/original${movie.poster_path}'}
                    />
                    </poster>
          </container>
          </Background>
     )
}
export default Movies