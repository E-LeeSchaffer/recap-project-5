import { SpotLightedArtPieces } from "@/components/SpotLightedArtPieces";

export default function SpotlightPage({ artPieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <SpotLightedArtPieces pieces={artPieces} />
    </>
  );
}
