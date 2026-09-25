import {
  CalendarDays,
  Clock3,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <CalendarDays size={16} />
              Sistema de agendamento
            </div>

            <h1>
              Organize seus
              <span> agendamentos</span>
              <br />
              de forma simples.
            </h1>

            <p>
              Uma plataforma desenvolvida para secretarias de
              escolas e instituições organizarem horários,
              atendimentos e compromissos em um único lugar.
            </p>

            <div className="hero-buttons">
              <Link to="/login" className="primary-button">
                Acessar sistema
                <ArrowRight size={18} />
              </Link>

              <a href="#recursos" className="secondary-button">
                Conheça o sistema
              </a>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-window">
              <div className="preview-top">
                <div>
                  <span className="preview-label">Visão geral</span>
                  <h3>Dashboard</h3>
                </div>

                <div className="preview-date">
                  Setembro, 2026
                </div>
              </div>

              <div className="preview-stats">
                <div>
                  <span>Hoje</span>
                  <strong>24</strong>
                </div>

                <div>
                  <span>Confirmados</span>
                  <strong>18</strong>
                </div>

                <div>
                  <span>Pendentes</span>
                  <strong>6</strong>
                </div>
              </div>

              <div className="preview-list">
                <div className="preview-item">
                  <div className="preview-avatar">MA</div>
                  <div>
                    <strong>Maria Almeida</strong>
                    <span>Atendimento escolar</span>
                  </div>
                  <b>09:00</b>
                </div>

                <div className="preview-item">
                  <div className="preview-avatar">JS</div>
                  <div>
                    <strong>João Silva</strong>
                    <span>Reunião com secretaria</span>
                  </div>
                  <b>10:30</b>
                </div>

                <div className="preview-item">
                  <div className="preview-avatar">AC</div>
                  <div>
                    <strong>Ana Costa</strong>
                    <span>Entrega de documentos</span>
                  </div>
                  <b>13:30</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="recursos">
          <div className="section-heading">
            <span>RECURSOS</span>
            <h2>Tudo o que sua secretaria precisa</h2>
            <p>
              Ferramentas para facilitar a organização dos
              atendimentos e compromissos.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <CalendarDays size={24} />
              </div>
              <h3>Agendamentos</h3>
              <p>
                Organize consultas, reuniões e atendimentos
                em uma agenda centralizada.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock3 size={24} />
              </div>
              <h3>Controle de horários</h3>
              <p>
                Visualize os horários disponíveis e evite
                conflitos de agenda.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Gestão de usuários</h3>
              <p>
                Tenha controle sobre usuários e atendimentos
                da instituição.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3>Organização</h3>
              <p>
                Acompanhe facilmente o status de cada
                agendamento.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 AgendaFácil</span>
        <span>Sistema de gerenciamento de agendamentos</span>
      </footer>
    </div>
  );
}

export default Home;