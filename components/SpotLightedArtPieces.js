// import Image from "next/image";
import Link from "next/link";
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
          <Link href={`/art-pieces/${result.slug}`}>
            <ArtPiecePreview
              image={result.imageSource}
              title={result.name}
              artist={result.artist}
              height={300}
              width={300}
            />
          </Link>
        </>
      )}
    </div>
  );
}
