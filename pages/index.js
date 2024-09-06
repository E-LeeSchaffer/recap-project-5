import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Error occured while fetching data");
    throw error;
  }
  return response.json();
};

const URL = "https://example-apis.vercel.app/api/art";

export function ArtPieces() {
  const { data, isLoading, error } = useSWR(URL, fetcher);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Data not found</p>;

  return (
    <ul>
      {data.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview name={piece.name} artist={piece.artist} />
        </li>
      ))}
    </ul>
  );
}

export function ArtPiecePreview({ title, artist }) {
  return (
    <>
      <h2>Title: {title}</h2>
      <p>Artist: {artist}</p>
    </>
  );
}

export default function HomePage() {
  return <ArtPieces />;
}
