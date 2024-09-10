import { ArtPiecePreview } from "./ArtPiecesPreview";
import styled from "styled-components";
import { useState } from "react";

export function ArtPieces({ pieces }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState(pieces);
  //chose a uniquie identifiere

  //to extract the isFavorite from the uniquie identifiere

  // to toggle one favorite piece
  function toggleFavorite(slug) {
    setArtPiecesInfo((pieces) =>
      pieces.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }
  return (
    <div>
      <h2>All Art Pieces</h2>
      <StyledUl>
        {artPiecesInfo.map((piece) => (
          <StyledLi key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              isFavorite={piece.isFavorite}
              toggleFavorite={() => toggleFavorite(piece.slug)}
            />
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 0;
  list-style: none;
  margin: 0;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
`;
