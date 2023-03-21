import React from 'react'
import errorImage from '../img/error.jpg'
import * as S from './styled'

interface Props{
    item: any
}

const Movie: React.FC<Props> = ({item}) => {
  return (
        <div>
            <S.header>{item.Title}</S.header> 
            <S.year>{item.Type} {item.Year}</S.year>
            <S.Image 
                src={item.Poster !== 'N/A'? item.Poster: errorImage}
                alt={item.Title}/>
        </div>
  )
}

export default Movie
