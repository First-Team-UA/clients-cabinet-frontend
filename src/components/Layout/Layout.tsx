import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LayoutContainer,
  Sidebar,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink,
  LogoutButton,
  MainContent,
  Header,
  Main,
  LanguageSwitcher,
} from "./Layout.styles";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LayoutContainer>
      <Sidebar>
        <Logo>VseTV</Logo>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/dashboard">{t("sidebar.dashboard")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">{t("sidebar.profile")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tv-channels">{t("sidebar.channels")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contacts">{t("sidebar.contacts")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/test">{t("sidebar.test")}</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <LogoutButton>{t("sidebar.logout")}</LogoutButton>
      </Sidebar>

      <MainContent>
        <Header>
          <h1>Назва компанії</h1>
          <LanguageSwitcher
            onChange={handleLanguageChange}
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </LanguageSwitcher>
          <div>Switcher theme</div>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
