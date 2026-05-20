  import React from 'react';
  import { Users, Scale, ShieldAlert, Briefcase } from 'lucide-react';
  import './specialties.css';

  const specialties = [
    {
      id: "derecho-familia",
      title: "Derecho de Familia",
      desc: "Divorcios, alimentos, régimen de comunicación, filiación, juicios de capacidad y sucesiones.",
      icon: <Users size={24} strokeWidth={1.5} />
    },
    {
      id: "derecho-penal",
      title: "Derecho Penal",
      desc: "Defensa, denuncias, excarcelaciones, ejecución de sentencia y acompañamiento en procesos penales.",
      icon: <Scale size={24} strokeWidth={1.5} />
    },
    {
      id: "violencia-domestica",
      title: "Violencia Doméstica",
      desc: "Medidas de protección, exclusión del hogar, denuncias, restricciones de acercamiento y acompañamiento integral.",
      icon: <ShieldAlert size={24} strokeWidth={1.5} />
    },
    {
      id: "derecho-laboral",
      title: "Derecho Laboral",
      desc: "Despidos, indemnizaciones, trabajo no registrado, conflictos laborales y asesoramiento preventivo.",
      icon: <Briefcase size={24} strokeWidth={1.5} />
    }
  ];

  const Specialties = () => {
    
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5493815765967&text=Hola+Dra.+Pons+Amun%2C+necesito+hacer+una+consulta+legal.&type=phone_number&app_absent=0";

    return (
      <section className="specialties" id="especialidades">
        <div className="specialties__container">
          <header className="specialties__header">
            <h2 className="specialties__title">
              Áreas de <span className="specialties__title--alt">Especialidad</span>
            </h2>
            <div className="specialties__title-line"></div>
          </header>

          <div className="specialties__grid">
            {specialties.map((item, idx) => (
              <div key={idx} className="specialty-card" id={item.id}>
                <div className="specialty-card__icon">
                  {item.icon}
                </div>
                <h3 className="specialty-card__title">{item.title}</h3>
                <p className="specialty-card__desc">{item.desc}</p>
                {}
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="specialty-card__link"
                >
                  CONSULTAR CASO <span className="link-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Specialties;
