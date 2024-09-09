import Image from "next/image";

export function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} height={300} width={300} />
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
    </>
  );
}
