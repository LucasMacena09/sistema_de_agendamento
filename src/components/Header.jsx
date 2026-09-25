import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo-icon">
          <CalendarDays size={22} />
        </div>
        <span>AgendaFácil</span>
      </Link>

      <nav className="header-nav">
        <Link to="/">Início</Link>
        <Link to="/login" className="header-login">
          Entrar
        </Link>
      </nav>
    </header>
  );
}

export default Header;