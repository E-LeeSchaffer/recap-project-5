// import Image from "next/image";
import { ArtPiecePreview } from "./ArtPiecesPreview";

export function SpotLightedArtPieces({ pieces }) {
  function getRandomArtPiece(pieces) {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }
  const result = getRandomArtPiece(pieces);

  return (
    <div>
      <h2>Spotlight</h2>

      {result && (
        <>
          <ArtPiecePreview
            image={result.imageSource}
            title={result.name}
            artist={result.artist}
            height={300}
            width={300}
          />
        </>
      )}
    </div>
  );
}
