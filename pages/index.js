import { ArtPieces } from "@/components/ArtPieces";
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

export default function HomePage() {
  const { data: pieces, isLoading, error } = useSWR(URL, fetcher);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // if (!data) return <p>Data not found</p>;

  return <ArtPieces pieces={pieces} />;
}
