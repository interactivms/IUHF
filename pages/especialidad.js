import React, {useState} from 'react'
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Contact from "../src/components/contact";

function especialidad() {

  const [selectedModule, setSelectedModule] = useState("ciberseguridad")
  return (
    <div className='main'>
      <Header />
      <div className="vh-100 relative specialties-header">
        <div className="absolute header-text p-5">
          <h2 className='fontsize-3 fw-1000 white line-inherit'>Especialidad <br /> <span className="header-text-background p-1 px-2">de seguridad</span><br /><span className="header-text-background p-1 px-2">en redes y datos</span></h2>
          <br />
          <h3 className="white">
            <span className="font-light">
            Impartido por:
            </span> <br />
            Ing. Victor Hugo Lara Damas <br />
            Ing. Darío Medina
          </h3>
        </div>
      </div>
      <div className="row mx-0 vh-100 background-darkGray lion-BG">
        <div className="col-12 col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="white bolder fw-1000">¿QUÉ VOY A <span className='darkblue'>APRENDER</span>?</h2>
          <br />
          <p className="white">
          El estudiante adquirirá conocimientos de redes
          y ciberseguridad, fomentando habilidades
          dentro del pensamiento crítico y análisis de 
          datos.
          </p>
          <p className="white">
          Además, aprenderá las herramientas más
          efectivas para evitar ciberataques y fraudes
          digitales.
          </p>

          <br />

          <h2 className="white bolder fw-1000">FECHAS <span className='darkblue'>DE INSCRIPCIÓN</span></h2>

          <img className="icon" src="/img/Ciberseguridad.svg" alt="Ciber Seguridad" />

          <p className="white px-5"><span className="darkblue">15 de Octubre:</span> Primera fecha de Inscripción
          <br />Costo: $27,900 mxn*</p>

          <p className="white px-5"><span className="darkblue">22 de Octubre:</span> Segunda fecha de Inscripción
          <br />Costo: $28,400 mxn*</p>

          <p className="white px-5"><span className="darkblue">29 de Octubre:</span> Tercera fecha de Inscripción
          <br />Costo: $29,970 mxn*</p>
    
          <small className="white">*Precios sin IVA</small>
          <br />
          <h2 className="white fontsize-3 fw-1000">INICIO <span className='darkblue'>4 DE JUNIO DE 2022</span></h2>
        </div>
        <div className="col-12 col-md-6 p-5 h-fit">
          <h2 className="white fw-1000">NUESTROS <span className='darkblue'>CURSOS</span></h2>

          <img className="icon clickable pointer" src="/img/Ciberseguridad.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("ciberseguridad")}/>
          
          <div className={selectedModule === "ciberseguridad" ? "moduleInfo active" : "moduleInfo"}>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 1:</span> Introducción a la Seguridad de Información</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 2:</span> Seguridad de Aplicaciones: <br />Vulnerabilidades, explotación y remediación.</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 3:</span> Pruebas de Penetración: Seguridad Ofensiva</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 4:</span> Detección y Respuesta a Incidentes</p>
          </div>
          <br />
          <br />
          <img className="icon clickable pointer" src="/img/IP.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("ip")} />
          <div className={selectedModule === "ip" ? "moduleInfo active" : "moduleInfo"}>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 1:</span> Construyendo una red simple</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 2:</span> Estableciendo conexión con la red</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 3:</span> Manejo de la seguridad de red en dispositivos</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 4:</span> Constuyendo una red mediana</p>
          </div>

          <br />
          <br />
          <img className="icon clickable pointer" src="/img/Pensamiento.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("pensamiento")} />
          <div className={selectedModule === "pensamiento" ? "moduleInfo active" : "moduleInfo"}>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 1:</span> Iniciamos</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 2:</span> Análisis de Negocio</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 3:</span> Fundamentos</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 4:</span> Elementos Clave</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 5:</span> Definición del proyecto</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 6:</span> Limpieza y modelado</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 7:</span> Análisis de riesgos informáticos</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 8:</span> Power Query</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 9:</span> Power BI</p>
          </div>

        </div>
      </div>
      <div className="row mx-0">
        <Contact section="other" />
      </div>
      <Footer />
    </div>
  )
}

export default especialidad