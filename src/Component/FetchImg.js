import { useEffect, useState } from "react"
function FetchImg(query){
    const key = ('35113396-7b920b693022772480264fedd')

    const[results,setResults]=useState([])
    
    useEffect(()=>{
        async function fetchData(){
            try{
         const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&pretty=true/`)
           const json= await response.json()
           console.log({json});
           setResults(
            json.hits
            
           )
            
            }
            catch(error){}
           
        }
     if (query !==''){
        fetchData()
     }
     },[query])
     return results;
}
export default FetchImg