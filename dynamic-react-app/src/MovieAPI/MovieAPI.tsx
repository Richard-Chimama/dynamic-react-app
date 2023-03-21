import React, {useState, useEffect} from 'react'
import * as S from './styled'
import Form from './Form/Form'
import MovieList from './MovieList/MovieList'
import { movies } from './FetchData'


 const MovieAPI = () => {
    const init:any = []
    const [data, setData] = useState(init)
    const [error, setError] = useState("")
    const [isError, setIsError] = useState(false)
    const [searchKey, setSearchKey] = useState("batman")
    const [searchType, setSearchType] = useState("all")
    const [page, setCountPage] = useState(1)


    useEffect(()=>{
        movies(
            searchKey,
            searchType,
            page,
            data,
            setIsError,
            setData,
            setError
        )
    },[searchKey, searchType, page])

    
    const detectOffPage = ()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setCountPage(page + 1)
        }
    }
    
    window.onscroll = detectOffPage        
     
    function SEARCHTYPE(type:string){
        setCountPage(1)
        setSearchType(type)
    }
    
    function SEARCHKEY(key:string){
        setCountPage(1)
        setSearchKey(key)
    }

   

  return (
    <S.Container >
        <Form getSearchKey={SEARCHKEY} 
            getSearchType={SEARCHTYPE} 
            />
        <MovieList response={data} 
                errorMessage={error}
                isError={isError}
                 />
    </S.Container>
  )
}

export default MovieAPI
