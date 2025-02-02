import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 10px 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;

  &:hover {
    color: #5b21b6;
  }
`;

export const LogoutButton = styled.button`
  margin-top: auto;

`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #f3f4f6;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: black;
`;

export const Main = styled.main`
  padding: 20px;
  overflow-y: auto;
`;

export const LanguageSwitcher = styled.select`
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;
