import {useState, useEffect} from 'react'
import * as S from './styled'

interface Props{
    getSearchKey: (key: string)=> void
    getSearchType: (key: string)=> void
}
 
const Form: React.FC<Props> = ({getSearchKey, getSearchType}) => {
    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("All")

    useEffect(() => {
        getSearchKey(searchValue == "" ? "batman": searchValue)
    },[searchValue])

    const handleSearchValue = (evt:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(evt.target.value)
    }

    const handleSelectedValue = (evt:React.ChangeEvent<HTMLSelectElement>)=>{
        const key = evt.target.value
        setSelectedValue(key)
        getSearchType(key)
    }

  

    const keyEvent = (evt: React.KeyboardEvent<HTMLInputElement>)=>{
        if(evt.code === "Enter"){
            getSearchKey(searchValue)
            evt.preventDefault()
        }
    }

  return (
    <S.Form >
        <input type="search" 
        name="search" 
        id="search" 
        placeholder='search'
        value={searchValue} 
        onKeyDown={(evt)=> keyEvent(evt) }
        onChange={(evt)=> handleSearchValue(evt)}/>
        <select value={selectedValue} onChange={(e)=>handleSelectedValue(e)}>
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="game">Game</option>
        </select>
    </S.Form>
  )
}

export default Form
