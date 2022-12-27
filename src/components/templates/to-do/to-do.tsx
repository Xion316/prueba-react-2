import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import "./to-do.scss";
import { useGifContext } from "../../../context/todo-context/todo-context";
import useAddGif from "./use-add-task/use-add-task";
import GifsList from "../../organisms/gifs-list/gif-list";


const ToDo = () => {
  const { addGif,deleteGif,gifList } = useGifContext();
  const {gifUrl,handleChangeGifUrl,setGifUrl}= useAddGif();
  return (
    <div className="to-do">
      <h1 className="to-do__title">GIF Galery</h1>
      <div className="to-do__header">
        <Input
          value={gifUrl}
          name="addGif"
          onChange={handleChangeGifUrl}
          placeholder="Gif URL" 
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>)=>{ if (event.key === 'Enter') addGif(gifUrl), setGifUrl("") }}                 />
        <Button onClick={() => {addGif(gifUrl), setGifUrl("")}}>Agregar</Button>
      </div>

      <GifsList gifs={gifList} onDelete={function (id: number, url: string): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  );
};

export default ToDo;
