import ColorPalette from "./ColorPalette";
import { ArtPiecePreview } from "./ArtPiecesPreview";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBackClick,
  buttonText,
  colors,
}) {
  return (
    <>
      <ArtPiecePreview
        image={image}
        alt={title}
        height={300}
        width={300}
        title={title}
        artist={artist}
      />
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <ColorPalette colors={colors} />
      <button onClick={onBackClick}>{buttonText}</button>
    </>
  );
}
