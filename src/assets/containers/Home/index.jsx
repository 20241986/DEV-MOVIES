import { useState, useEffect } from 'react'

import api from '../../services/api'
import { Background,Container, ContainerButtons, Info, Poster} from '../../components/background'
import Slider from '../../components/Slider'
import Button from '../../components/Button'
import { getImages } from '../../../utils/getimages'

function Home(){
     const [movie, setMovie] =useState()
     const[topMovies, setTopMovie]=useState()
     const[topSeries, setTopSeries]=useState()
     const[popularSeries, setPopularSeries]=useState()
     const[topPeople, setTopPeople]=useState()


useEffect(()=>{
async function getMovies(){
      const {
          data:{results}
     } =await api.get('/movie/popular')
      setMovie(results[0])
}

async function getTopSeries(){
     const {
         data:{results}
     } =await api.get('/tv/top_rated')
     setTopSeries(results)
}

async function getTopPeople(){
     const {
         data:{results}
     } =await api.get('/Person/Popular')
     setTopPeople(results)
}
     getMovies()
     getTopMovies()
     getTopSeries()
     getPopularSeries()
     getTopPeople()
     
},[])
return
     <>
     {movie &&(



<Background
 img = {getImages= ( movie.backdrop_path ) }

>
     <Container>
          <    Info>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ContainerButtons>
               <Button red>Assista agora</Button>
               <Button>Assista o trailer</Button>
          </ContainerButtons> 
          </Info>
          <Poster>
               <img
               alt="capa-do-filme"
               src={getImages(movie.poster_path)}/>
          </Poster>
     </Container>
</Background>
     )}
     {topMovies&& <Slider info={topMovies} title={'Top Filmes'}/>}
     {topSeries&& <Slider info={topSeries} title={'Top Series'}/>}
     {popularSeries&& (
     <Slider info={popularSeries} title={'Séries Populares'}/>
     )}
     {topPeoples&& <Slider info={topPeople} title={'Top Artistas'}/>}

</>

}

import {ButtonRed, Buttonwhite,} from './styles'
import { getImages } from '../../../utils/getimages'
import { formToJSON } from 'axios'

function Button({children, red}) {
     return     (
          <>{red?(<ButtonRed>{children}</ButtonRed>):(<buttonWhite>{children}</buttonWhite>)}
          </>
     )
}



export default Button