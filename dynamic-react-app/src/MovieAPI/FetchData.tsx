
const URL = "https://www.omdbapi.com/?apikey="+import.meta.env.VITE_API_KEY

export const GET_ALL_MOVIES = async(searchKey: string, type:string, page:number)=>{
    let urlSearchKeyCategory
    const urlSearchKey = URL + searchKey.trim()
    const category = type === "all" ? null: `&type=${type}`
    const pages = `&page=${page}`

    if(category != null){
        urlSearchKeyCategory = urlSearchKey  + category
    }else{
        urlSearchKeyCategory = urlSearchKey
    }
    
    try{

        const response = await fetch(urlSearchKeyCategory + pages)
        const data = await response.json()
        return data
    }catch(err:any){
        return{ Error: err.message}
    }
}



export const movies = async (
    searchKey:string, 
    searchType:string, 
    page:number,
    data: [],
    setIsError: (text:boolean)=>void,
    setData: (text: any)=>void,
    setError: (text:string)=>void
    )=>{
    const response = await GET_ALL_MOVIES(searchKey,searchType, page).then(data=> data)
    const db = response
    if(db.Response === "True" || page > 1){
        if(db.hasOwnProperty("Search")){
            setIsError(true)
            if(page > 1 && data.length < db.totalResults){
                setData((prev:any)=>{
                    const newArray =  [...prev, ...db.Search]
                    return newArray
                })
            }else{
                    setData(db.Search)
            }
        }
    }else{
        setIsError(false)
        setError(await response.Error)
    }
}  

