import { SpotLightedArtPieces } from "@/components/SpotLightedArtPieces";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <SpotLightedArtPieces pieces={pieces} />
    </>
  );
}
