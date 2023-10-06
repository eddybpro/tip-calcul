import "./Header.css";
import { Logo } from "../assets";

function Header() {
  return (
    <header>
      <a href="#" className="Logo" aria-label="splitter">
        <img src={Logo} alt="splitter" />
      </a>
    </header>
  );
}
export default Header;
