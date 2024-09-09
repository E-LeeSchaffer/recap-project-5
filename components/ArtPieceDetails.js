import Image from "next/image";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBackClick,
  buttonText,
}) {
  return (
    <>
      <Image src={image} alt={title} height={300} width={300} />;
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={onBackClick}>{buttonText}</button>
    </>
  );
}
