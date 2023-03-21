import React from 'react'
import Movie from './Movie'
import * as S from './styled'

interface Props{
    response: any[]
    errorMessage: string
    isError: boolean 
}

const MovieList: React.FC<Props> = ({response, errorMessage, isError}) => {

  return(
    <>
        <S.Container >
        { isError ? response.map((item, index)=>
         <Movie key={item.imdbID + `${Math.random() * 1000}` + index } 
            item={item}/>):
            <p>{errorMessage}</p>
        }
        </S.Container>
    </>
  )
}


export default MovieList
