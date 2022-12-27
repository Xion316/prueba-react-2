import React, { createContext,FC, useContext } from 'react'
import Gif from '../../utils/interfaces/gif';
import useGif from './use-todo/use-todo';
 
export interface GifStateContext{
gifList: Gif[];
addGif: (url:string)=>void;
deleteGif: (id:number, url:string)=>void;
}
 export interface GifProviderProps{
    children: React.ReactNode
 }

 export const GifContext = createContext<GifStateContext>(
 {} as unknown as GifStateContext  
 );

 export const useGifContext =()=> useContext(GifContext);

 export const GifProvider: FC<GifProviderProps> =({children})=>{
    const values = useGif();
    return<GifContext.Provider value={values}>{children}</GifContext.Provider>
 };