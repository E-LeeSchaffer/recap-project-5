import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Error occured while fetching data");
    throw error;
  }
  return response.json();
};

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  const { data: pieces, isLoading, error } = useSWR(URL, fetcher);

  useEffect(() => {
    if (pieces) {
      setArtPieces(pieces);
    }
  }, [pieces]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // if (!data) return <p>Data not found</p>;
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} artPieces={artPieces} />
    </>
  );
}
