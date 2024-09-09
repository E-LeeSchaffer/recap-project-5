import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #ccc;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: #555;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <StyledLink href="/art-pieces">Pieces</StyledLink>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>{" "}
    </Nav>
  );
}
