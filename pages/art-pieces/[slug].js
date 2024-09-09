import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces?.find((piece) => piece.slug === slug);

  if (!piece) return <p>Art piece not found!</p>;

  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      //   onBackClick={() => router.push("/art-pieces")}
      onBackClick={() => router.back()}
      buttonText="Go back"
    />
  );
}
