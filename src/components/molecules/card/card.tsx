import { FC } from "react";
import Gif from "../../../utils/interfaces/gif";
import "./card.scss";
import Button from "../../atoms/button/button";

interface CardProps {
  gif: Gif;
  onDelete: (id: number, url: string) => void;
}

const Card: FC<CardProps> = ({ gif, onDelete }) => {
  return (
    <div className="card">
      <img
        src={gif.url}
        alt={`GIF DE ${gif.author_id} CON ${gif.id}`}
      />
      <Button onClick={() => {}}>Eliminar</Button>
    </div>
  );
};

export default Card;
