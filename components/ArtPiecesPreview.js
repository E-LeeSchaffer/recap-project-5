import Image from "next/image";
import IsFavorite from "./IsFavorite";
import { useState } from "react";

export function ArtPiecePreview({ image, title, artist }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <Image src={image} alt={title} height={300} width={300} />
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
      <IsFavorite isFavorite={isFavorite} onToggle={toggleFavorite} />
    </div>
  );
}
