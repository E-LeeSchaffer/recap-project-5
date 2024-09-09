import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <>
      <p>Contained colors: </p>
      <StyledList>
        {colors.map((color, index) => (
          <StyledListItem key={index} color={color}>
            {color}
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  background-color: ${(props) => props.color};
  // Bedingung für die Schriftfarbe, bei heller Farbe schwarze Schrift, sonst weiße Schriftfarbe
  color: ${(props) =>
    [
      "#f1f3f4",
      "#d8d5d8",
      "#cec4c6",
      "#dadee1",
      "#eeeee4",
      "#c5dedb",
      "#c9c8c5",
    ].includes(props.color)
      ? "#000000"
      : "#ffffff"};
  padding: 10px;
  border-radius: 50px;
  width: fit-content;
`;

// Zweite automatisierte Lösung. Hier wird die Helligkeit der Backgroundcolor mittels einer Funktion berechnet:
// const StyledListItem = styled.li`
//   background-color: ${(props) => props.color};
//   color: ${(props) => (isColorDark(props.color) ? "#ffffff" : "#000000")};
//   padding: 10px;
//   border-radius: 50px;
//   width: fit-content;
// `;

// function isColorDark(color) {
//   const hex = color.replace("#", "");

//   const r = parseInt(hex.substring(0, 2), 16);
//   const g = parseInt(hex.substring(2, 4), 16);
//   const b = parseInt(hex.substring(4, 6), 16);

//   // Formel zur Berechnung der Luminanz basierend auf dem menschlichen Auge
//   const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

//   // Wenn die Luminanz gering ist, gilt die Farbe als dunkel (sprich weiße Schrift)
//   return luminance < 186; // Schwellenwert
// }
