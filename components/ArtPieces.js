import Link from "next/link";
import { ArtPiecePreview } from "./ArtPiecesPreview";
import styled from "styled-components";
import ColorPalette from "./ColorPalette";

export function ArtPieces({ pieces }) {
  return (
    <div>
      <h2>All Art Pieces</h2>

      <StyledUl>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                colors={piece.colors}
              />
            </Link>
          </li>
        ))}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  //   display: flex;
  //   flex-wrap: wrap;
  //   gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
