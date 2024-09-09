import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <StyledList>
      {colors.map((color, index) => (
        <StyledListItem key={index} color={color}>
          {color}
        </StyledListItem>
      ))}
    </StyledList>
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
  color: #ffffff;
  padding: 10px;
  margin: 5px 0;
  border-radius: 50px;
  width: fit-content;
`;
