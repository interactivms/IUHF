import React from 'react'
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Contact from "../src/components/contact";

function trayectoria() {
  return (
    <div className='main'>
      <Header />
      <div className="vh-100 relative trajectory-header">
      <div className="absolute trajectory-text p-5">
          <h2 className='fontsize-2 white line-inherit'>Crea tu especialidad <br /> conforme a tus<br />necesidades.</h2>
          <br />
          <h3 className="white font-light">
            "¡Construye tu propio camino!"
          </h3>
          <br />
          <h2 className='fontsize-3 white line-inherit'><span className="header-text-background fw-1000 p-1 px-2">Tu nueva</span><br /><span className="header-text-background fw-1000 p-1 px-2">trayectoria educativa</span></h2>
        </div>
      </div>
      <div className="background-darkGray lion-BG py-2">
        <div className="row vh-60 py-3 px-3 mx-0 relative">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="h-fit">
            <h2 className="white bolder fontsize-3 fw-1000">EDUCACIÓN BASADA EN <span className='darkblue'>TENDENCIAS <br /> TECNOLÓGICAS</span> DEL 2022</h2>
          <br />
          <p className="white">
            Nuestro objetivo es proveer a la comunidad capacitación en tecnologías de la información 
            de vanguardia y habilidades del futuro para satisfacer la creciente demanda de la industria 
            con personal capacitado y al mismo tiempo facilitar al personal capacitado a encontrar 
            oportunidades laborales bien remuneradas y con amplias expectativas de crecimiento.
          </p>
          <br />
          <div className="row">
            <div className="col-sm-1 col-md-8">

            </div>
            <div className="col-sm-11 col-md-4">
            <h2 className="white bolder fontsize-3 fw-1000">TOP EN <span className='darkblue'>TENDENCIAS</span></h2>
            <small className="white text-right">Fuente: Gertner. Inc. 2021</small>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <img src="/img/diagrama_trayectoria.svg" alt="" />
        </div>
        <div className="col-12 py-5">
          <h2 className="white bolder fw-1000 text-center"><span className='darkblue'>CONSTRUYE</span> TU PROPIO CAMINO</h2>
        </div>
        <div className="col-12">
          <div className="row  mx-0">
            <div className="col-12 vh-60 col-md px-5">
              <p className="white">
              A diferencia de la educación 
              tradicional, IUHF fomenta la 
              libertad y flexibilidad de crear tu 
              propia especialidad conforme a tus 
              necesidades.
              </p>
              <br />
              <p className="white">
              Sabemos que hoy en día, las 
              habilidades que necesitan las 
              empresas de tecnología e 
              información siguen evolucionando, 
              dejando desactualizada a la 
              educación tradicional.
              </p>
              <br />
              <p className="white">
              De esta manera, nuestros alumnos 
              podrán mantenerse a la vanguardia 
              en su industria, creciendo su perfil 
              profesional sin desperdiciar años en 
              educación.
              </p>

            </div>
            <div className="col-12 col-md trajectory_diagram">
            </div>
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

export default trayectoria