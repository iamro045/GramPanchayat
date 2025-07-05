import { NavLink } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import './Navbar.css';

function Navbar() {
  const { toggleLang, t, lang } = useLang();

  return (
    <nav className="navbar">
      <h2>🌿 Grampanchayat</h2>
      <ul>
        <li><NavLink to="/">{t("nav_home")}</NavLink></li>
        <li><NavLink to="/about">{t("nav_about")}</NavLink></li>
        <li><NavLink to="/schemes">{t("nav_schemes")}</NavLink></li>
        <li><NavLink to="/notices">{t("nav_notices")}</NavLink></li>
        <li><NavLink to="/gallery">{t("nav_gallery")}</NavLink></li>
        <li><NavLink to="/contact">{t("nav_contact")}</NavLink></li>
        <li><button onClick={toggleLang}>{lang === "en" ? "मराठी" : "English"}</button></li>
      </ul>
    </nav>
  );
}
export default Navbar;
