import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  X
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <CalendarDays size={20} />
            </div>
            <span>AgendaFácil</span>
          </div>

          <button
            className="close-sidebar"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-title">MENU</span>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <LayoutDashboard size={19} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard"
            className="sidebar-link"
            onClick={() => setOpen(false)}
          >
            <CalendarDays size={19} />
            Agendamentos
          </NavLink>

          <NavLink
            to="/dashboard"
            className="sidebar-link"
            onClick={() => setOpen(false)}
          >
            <Users size={19} />
            Usuários
          </NavLink>
        </div>

        <div className="sidebar-bottom">
          <button className="sidebar-link">
            <Settings size={19} />
            Configurações
          </button>

          <button className="sidebar-link logout" onClick={logout}>
            <LogOut size={19} />
            Sair
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;