import React from "react";
import { Scale, Phone, Mail} from "lucide-react";
import "./footer.css";

const Footer = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5493815765967&text=Hola+Dra.+Pons+Amun%2C+necesito+hacer+una+consulta+legal.&type=phone_number&app_absent=0";

  return (
    <footer className="footer" id="contacto">
      <div className="footer__container">
        {/* Columna 1: Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Scale size={20} strokeWidth={1.5} />
            <span className="footer__logo-name">PONS AMUN</span>
          </div>
          <p className="footer__tagline">
            Derecho inteligente y contención genuina. Diseñamos soluciones
            legales estratégicas para proteger tus derechos e intereses.
          </p>
          <a
            href="https://instagram.com/draponsamun"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer__col">
          <h4 className="footer__col-title">NAVEGACIÓN</h4>
          <ul className="footer__links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre Mí</a>
            </li>
            <li>
              <a href="#especialidades">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Prácticas */}
        <div className="footer__col">
          <h4 className="footer__col-title">PRÁCTICAS</h4>
          <ul className="footer__links">
            <li>
              <a href="#derecho-familia">Derecho de Familia</a>
            </li>
            <li>
              <a href="#derecho-penal">Derecho Penal</a>
            </li>
            <li>
              <a href="#violencia-domestica">Violencia Doméstica</a>
            </li>
            <li>
              <a href="#derecho-laboral">Derecho Laboral</a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer__col">
          <h4 className="footer__col-title">CONTACTO</h4>
          <ul className="footer__contact">
            <li>
              <Phone size={14} strokeWidth={1.5} />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                3815765967
              </a>
            </li>
            <li>
              <Mail size={14} strokeWidth={1.5} />
              <a href="mailto:draponsamun@gmail.com">draponsamun@gmail.com</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              <a
                href="https://instagram.com/draponsamun"
                target="_blank"
                rel="noopener noreferrer"
              >
                @draponsamun
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span>
          © 2026 Dra. Pons Amun Estudio Jurídico. Todos los derechos reservados.
        </span>
        <span>San Miguel de Tucumán</span>
      </div>
    </footer>
  );
};

export default Footer;
