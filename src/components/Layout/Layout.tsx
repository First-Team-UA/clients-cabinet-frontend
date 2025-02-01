import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Layout.css"; 
import "../../language/i18n"

const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: { target: { value: string | undefined; }; }) => {
    i18n.changeLanguage(event.target.value); 
  };

  return (
    <div className="layout">
        {/* in the future, a new component (sidebar) */}
      <aside className="sidebar">
        <h2 className="logo">VseTV</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">{t("sidebar.dashboard")}</Link></li>
            <li><Link to="/profile">{t("sidebar.profile")}</Link></li>
            <li><Link to="/tv-channels">{t("sidebar.Channels")}</Link></li>
            <li><Link to="/contacts">{t("sidebar.contacts")}</Link></li>
            <li><Link to="/test">{t("sidebar.test")}</Link></li>
          </ul>
        </nav>

        <button className="logout-button">{t("logout")}</button>
      </aside>

      <div className="main-content">
      {/* in the future, a new component (header) */}
        <header className="header">

          <h1>Назва компанії</h1> 
          {/* component (language switcher) */}
          <select className="language-switcher" onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="uk">Українська</option>
        </select>
        {/* component (theme switcher) */}
        <div>Switcher theme</div>
        </header>
        <main>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;
