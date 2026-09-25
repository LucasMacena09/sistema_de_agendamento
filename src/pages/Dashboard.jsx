import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
  Plus,
  Search,
  Bell,
  Menu,
  MoreVertical
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const appointments = [
  {
    name: "Maria Almeida",
    type: "Atendimento escolar",
    date: "Hoje",
    time: "09:00",
    status: "Confirmado",
    initials: "MA"
  },
  {
    name: "João Silva",
    type: "Reunião com secretaria",
    date: "Hoje",
    time: "10:30",
    status: "Confirmado",
    initials: "JS"
  },
  {
    name: "Ana Costa",
    type: "Entrega de documentos",
    date: "Hoje",
    time: "13:30",
    status: "Pendente",
    initials: "AC"
  },
  {
    name: "Carlos Oliveira",
    type: "Atendimento",
    date: "Hoje",
    time: "15:00",
    status: "Confirmado",
    initials: "CO"
  },
  {
    name: "Juliana Santos",
    type: "Reunião",
    date: "Amanhã",
    time: "08:30",
    status: "Pendente",
    initials: "JS"
  }
];

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      appointment.type
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div className="dashboard-header-left">
            <h1>Dashboard</h1>
            <p>
              Acompanhe os agendamentos da sua secretaria.
            </p>
          </div>

          <div className="dashboard-header-right">
            <button className="notification-button">
              <Bell size={20} />
              <span />
            </button>

            <div className="user-profile">
              <div className="user-avatar">AD</div>
              <div>
                <strong>Administrador</strong>
                <small>Secretaria</small>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="dashboard-top">
            <div>
              <span className="dashboard-date">
                Sexta-feira, 25 de setembro de 2026
              </span>
              <h2>Olá, Administrador 👋</h2>
            </div>

            <button
              className="new-appointment"
              onClick={() => alert("Novo agendamento")}
            >
              <Plus size={19} />
              Novo agendamento
            </button>
          </div>

          <div className="stats-grid">
            <StatCard
              icon={<CalendarDays size={22} />}
              title="Agendamentos hoje"
              value="24"
              description="Total para hoje"
              type="blue"
            />

            <StatCard
              icon={<CheckCircle2 size={22} />}
              title="Confirmados"
              value="18"
              description="75% dos agendamentos"
              type="green"
            />

            <StatCard
              icon={<Clock3 size={22} />}
              title="Pendentes"
              value="06"
              description="Aguardando confirmação"
              type="orange"
            />

            <StatCard
              icon={<XCircle size={22} />}
              title="Cancelados"
              value="02"
              description="Neste mês"
              type="red"
            />
          </div>

          <section className="appointments-card">
            <div className="appointments-header">
              <div>
                <h3>Próximos agendamentos</h3>
                <p>Confira os atendimentos programados.</p>
              </div>

              <div className="search-box">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="appointments-table">
              <div className="table-header">
                <span>Solicitante</span>
                <span>Atendimento</span>
                <span>Data</span>
                <span>Horário</span>
                <span>Status</span>
                <span />
              </div>

              {filteredAppointments.map(
                (appointment, index) => (
                  <div className="table-row" key={index}>
                    <div className="appointment-person">
                      <div className="person-avatar">
                        {appointment.initials}
                      </div>

                      <div>
                        <strong>{appointment.name}</strong>
                        <small>Responsável</small>
                      </div>
                    </div>

                    <span className="appointment-type">
                      {appointment.type}
                    </span>

                    <span>{appointment.date}</span>

                    <strong className="appointment-time">
                      {appointment.time}
                    </strong>

                    <span
                      className={`status ${appointment.status
                        .toLowerCase()
                        .replace("ã", "a")}`}
                    >
                      {appointment.status}
                    </span>

                    <button className="more-button">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                )
              )}
            </div>

            {filteredAppointments.length === 0 && (
              <div className="empty-state">
                Nenhum agendamento encontrado.
              </div>
            )}

            <div className="appointments-footer">
              <span>
                Mostrando {filteredAppointments.length} de{" "}
                {appointments.length} agendamentos
              </span>

              <button
                onClick={() => navigate("/dashboard")}
              >
                Ver todos
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;