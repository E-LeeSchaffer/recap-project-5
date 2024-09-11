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
