import React from "react"
function ImageCard({ item }){
   const tags=item.tags.split(',')
    return( 
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
 <img src={item.webformatURL} className="w-full h-64"/>

 <div className="px-6  py-4"> 
 <div className="font-bold text-blue-500 text-xl mb-2">
    créé par {item.user}
 </div>

 
 </div>
 {
 tags.map((tag,index)=>(
    <span key={index} className="inline-block bg-gray-200 rounded-full 
    px-3 py-1 text-sm font-semi-bold text-gray-700 mr-é">
 #{tag}
    </span>
 ))

 }
    </div>)
}
export default ImageCard