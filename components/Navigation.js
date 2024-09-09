import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <StyledNav>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces">All art pieces</StyledLink>
        </li>
      </StyledNav>
    </nav>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  color: black;

  &:hover {
    color: pink;
  }
`;

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 28px;
  background-color: lightgray;
  margin: 0;
  padding: 12px;
`;
