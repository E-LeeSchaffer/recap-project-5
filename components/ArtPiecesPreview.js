import Image from "next/image";
import styled from "styled-components";

export function ArtPiecePreview({
  image,
  title,
  artist,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <Container>
      <StyledImage
        src={image}
        alt={title}
        layout="responsive"
        width={300}
        height={300}
      />
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
      <FavoriteButton onClick={toggleFavorite} isFavorite={isFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </FavoriteButton>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 8px;
`;
