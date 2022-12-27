import React,{useState} from "react";

const useAddGif = ()=>{

const [gifUrl, setGifUrl] = useState("");

const handleChangeGifUrl=(value:string)=>{
    setGifUrl(value);
    console.log(gifUrl);   
};


return{
    gifUrl,handleChangeGifUrl,setGifUrl
}
};


export default useAddGif;