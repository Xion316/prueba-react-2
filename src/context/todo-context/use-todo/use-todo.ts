import React from "react";
import { useState } from "react";
import Gif from "../../../utils/interfaces/gif";
const useGif = ()=>{
const [gifList, setGifList] = useState<Gif[]>([]); 
const addGif = (url:string)=>{
    const newGif: Gif ={
        id: Math.floor(Math.random()*200),
        url: url,
        author_id: 1004
    };    
setGifList([...gifList,newGif]);    
};
 


const deleteGif=(id:number,url:string)=>{};

return{
    addGif,
    deleteGif,
    gifList
    

}
};
export default useGif;