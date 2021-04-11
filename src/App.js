import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1 className="title"><strong>SEMINARIO TALLER "ELABORACIÓN DE PROYECTOS HUMANITARIOS"</strong></h1>
          </div>
          <div className="col-md-6 col-12 mt-5">
            <ol>
              <li><small>Cada área de interés es para 20 participantes.</small> </li>
              <li><small>Se considerará 1 socio por club por cada área de interés.</small> </li>
            </ol>
            <div className="mt-5">
              <h2><strong>FACILITADORA</strong></h2>
              <p><strong>CADRE</strong> JESSICA LIÑAN PALOMINO</p>
            </div>
            <div className="mt-5">
              <h2><strong>COORDINADORES</strong> </h2>
              <ul>
                <li>Juan Carlos Agreda - RC Cajamarca</li>
                <li>Allan Díz Vásquez - RC Los Ejidos</li>
                <li>Joycie Carrasco Sullana - RC Sullana Capullanas Turicarami</li>
                <li>María Julia Plasencia - RC Chimbote</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-5">
            <Formulario />
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
