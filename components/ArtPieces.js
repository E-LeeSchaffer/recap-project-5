import { ArtPiecePreview } from "./ArtPiecesPreview";

export function ArtPieces({ pieces }) {
  return (
    <>
      <h2>All Art Pieces</h2>

      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
