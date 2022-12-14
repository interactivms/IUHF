import React, {useState, useEffect} from 'react'
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Contact from "../src/components/contact";

function especialidad() {

  const [selectedModule, setSelectedModule] = useState("ciberseguridad")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 450){
      setIsMobile(true)
    }
  },[])

  return (
    <div className='main'>
      <Header />
      <div className={isMobile ? "vh-100 relative specialties-header-responsive" : "vh-100 relative specialties-header"}>
        <div className="absolute header-text p-5">
          <h2 className='fontsize-3 fw-1000 white line-inherit'>Especialidad <br /> <span className="header-text-background p-1 px-2">de seguridad</span><br /><span className="header-text-background p-1 px-2">en redes y datos</span></h2>
          <br />
          <h3 className="white">
            <span className="font-light">
            Impartido por:
            </span> <br />
            Ing. Victor Hugo Lara Damas <br />
            Ing. Darío Medina <br />
            Ing. Luis Alfonso Ramírez Silva
          </h3>
        </div>
      </div>
      <div className="row mx-0 vh-100 background-darkGray lion-BG">
        <div className="col-12 col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="white bolder fw-1000 W-100">¿QUÉ VOY A <span className='darkblue'>APRENDER</span>?</h2>
          <br />
          <p className="white text-justify">
          El estudiante adquirirá conocimientos de redes y ciberseguridad, fomentando habilidades dentro del pensamiento crítico y análisis de datos.
          </p>
          <p className="white text-justify">
          Además, aprenderá las herramientas más efectivas para evitar ciberataques y fraudes digitales a través del acceso a laboratorios que les permitirán poner en práctica las habilidades aprendidas a través del análisis de casos del mundo real.
          </p>

          <br />
          <h2 className="white bolder fw-1000">¿CÓMO SE EVALUARÁ MI <span className='darkblue'>APRENDIZAJE</span>?</h2>
          <br />
          <p className="white text-justify">
          La evaluación será el resultado de una simulación de entrevista para aplicar a un trabajo en donde se requieran estas habilidades. De esta forma tendrás oportunidad de tener retroalimentación directa de personas que han evaluado candidatos para estas posiciones.
          </p>
          <br />
          <h2 className="white bolder fw-1000">¿QUÉ VOY A OBTENER AL FINAL DE LA ESPECIALIDAD?</h2>
          <br />
          <p className="white text-justify">
          La evaluación será el resultado de una simulación de entrevista para aplicar a un trabajo en donde se requieran estas habilidades. De esta forma tendrás oportunidad de tener retroalimentación directa de personas que han evaluado candidatos para estas posiciones.
          </p>
          <br />
          <h2 className="darkblue px-5 bolder fw-1000 w-100">INVERSIÓN TOTAL</h2>
          <h2 className="white px-5 bolder fw-1000 w-100">$16,800 MXN</h2>

          <br />
          <h2 className="darkblue px-5 bolder fw-1000 w-100">PLANES <br /> DE FINANCIAMIENTO</h2>

          <p className="darkblue px-5 fw-1000 w-100">1 SOLO PAGO (25% DE DESCUENTO)</p>

          <div className="row w-100">
            <div className="col">
              <p className="white fw-1000 text-center">
                (ANTES DEL 1 DE DICIEMBRE)
              </p>
            </div>
            <div className="col"><p className="white fw-1000 text-center">
            $12,600 MXN</p></div>
          </div>

          <p className="darkblue px-5 fw-1000 w-100">PAGOS DIFERIDOS</p>
    
          <div className="row w-100">
            <div className="col d-flex">
              <p className="white fw-1000 text-center">
                APARTA TU LUGAR CON TAN SOLO
              </p>
            </div>
            <div className="col "><p className="white fw-1000 text-center">
            $7,000 MXN</p></div>
          </div>

          <div className="row w-100">
            <div className="col">
              <p className="white fw-1000 text-center">
                SEGUNDO PAGO (ANTES DEL 30 DE NOVIEMBRE)
              </p>
            </div>
            <div className="col"><p className="white fw-1000 text-center">
            $4,900 MXN</p></div>
          </div>

          <div className="row w-100">
            <div className="col">
              <p className="white fw-1000 text-center">
                TERCER PAGO (ANTES DEL 31 DE DICIEMBRE)
              </p>
            </div>
            <div className="col"><p className="white fw-1000 text-center">
            $4,900 MXN</p>
            </div>
          </div>
          
          <small className="white">*Precios sin IVA</small>

          <br />
          
          <h2 className="white fontsize-3 fw-1000 mobile">INICIO <span className='darkblue'>14 DE ENERO DE 2023</span></h2>
        </div>
        <div className="col-12 col-md-6 p-5 h-fit">
          <h2 className="white fw-1000">TEMARIO</h2>

          <img className="icon clickable pointer" src="/img/Ciberseguridad.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("ciberseguridad")}/>
          
          <div className="moduleInfo active py-4">
            <div className="white px-5">14 de Enero del 2023</div>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 1:</span> Introducción a la Seguridad de Información</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 2:</span> Seguridad de Aplicaciones: <br />Vulnerabilidades, explotación y remediación.</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 3:</span> Pruebas de Penetración: Seguridad Ofensiva</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 4:</span> Detección y Respuesta a Incidentes</p>
          </div>
          <br />
          <br />
          <img className="icon clickable pointer" src="/img/IP.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("ip")} />
          <div className="moduleInfo active py-4">
          <div className="white px-5">21 de Enero del 2023</div>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 1:</span> Construyendo una red simple</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 2:</span> Estableciendo conexión con la red</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 3:</span> Manejo de la seguridad de red en dispositivos</p>
            <p className="white px-5 mb-0"><span className="darkblue">Módulo 4:</span> Constuyendo una red mediana</p>
          </div>

          <br />
          <br />
          <img className="icon clickable pointer" src="/img/Pensamiento.svg" alt="Ciber Seguridad" onClick={() => setSelectedModule("pensamiento")} />
          <div className="moduleInfo active py-4">
          <div className="white px-5">28 de Enero del 2023</div>
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
          <br />
          <h2 className="white fontsize-3 fw-1000 noMobile my-5">INICIO <span className='darkblue'>14 DE ENERO DE 2023</span></h2>
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