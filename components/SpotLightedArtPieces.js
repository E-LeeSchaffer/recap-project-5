import Image from "next/image";

export function SpotLightedArtPieces({ pieces }) {
  function getRandomArtPiece(pieces) {
    const randomPieces = Math.floor(Math.random() * pieces.length);
    return pieces[randomPieces];
  }
  const result = getRandomArtPiece(pieces);

  return (
    <div>
      <h2>Spotlight</h2>

      {result && (
        <>
          <Image
            src={result.imageSource}
            alt={result.name}
            height={300}
            width={300}
          />
          <p>Artist: {result.artist}</p>
        </>
      )}
    </div>
  );
}
