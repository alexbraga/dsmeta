import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="DSMeta logo" />
        <h1>DSMeta</h1>
        <p>
          Developed by{" "}
          <a href="http://www.github.com/alexbraga">Alexandre Braga</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
