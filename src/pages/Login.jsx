import { useState } from "react";
import {
  CalendarDays,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-brand">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <CalendarDays size={22} />
          </div>
          <span>AgendaFácil</span>
        </Link>

        <div className="login-brand-content">
          <h1>
            Gestão simples para
            <span> uma rotina organizada.</span>
          </h1>

          <p>
            Acesse o sistema para gerenciar os agendamentos
            da sua secretaria.
          </p>
        </div>

        <div className="login-brand-footer">
          Sistema de gerenciamento de agendamentos
        </div>
      </div>

      <div className="login-form-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={17} />
          Voltar para início
        </Link>

        <div className="login-form-wrapper">
          <div className="login-heading">
            <h2>Bem-vindo de volta!</h2>
            <p>Entre com seus dados para acessar o sistema.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>

              <div className="input-wrapper">
                <Mail size={19} />
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Senha</label>
                <a href="#senha">Esqueci minha senha</a>
              </div>

              <div className="input-wrapper">
                <Lock size={19} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>

          <div className="login-info">
            <span>Ambiente demonstrativo</span>
            <small>
              O login será integrado ao backend posteriormente.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;