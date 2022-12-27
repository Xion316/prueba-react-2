import { FC } from "react";
import Gif from "../../../utils/interfaces/gif";
import "./tasks-list.scss";
import Card from "../../molecules/card/card";

interface GifListProps {
  gifs: Gif[];
  onDelete: (id: number, url: string) => void;
}

const GifsList: FC<GifListProps> = ({ gifs, onDelete }) => {
  if (gifs.length === 0)
    return <h2 className="tasks-list__title">No posee Gifs</h2>;
  return (
    <div className="tasks-list">
      {gifs?.map((gifs, index) => (
        <Card key={`gif-${index}`} gif={gifs} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default GifsList;
